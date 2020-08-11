import * as admin from 'firebase-admin';
const functions = require('firebase-functions');
import Stripe from 'stripe';

//init
const stripe = new Stripe(functions.config().stripe.secret, {
    apiVersion: '2020-03-02',
  });
admin.initializeApp();

// utils
interface CustomerData {
    metadata: {
      firebaseUID: string;
    };
    email?: string;
  }

// Logs
const creatingCustomerLog = (uid: string) => {
    console.log(`Creating customer object for [${uid}].`);
};
const creatingCustomerInFirebaseLog = (email?: string) => {
    console.log(`Creating customer object for Firebase [${email}].`);
};
const customerCreatedLog = (id: string, livemode: boolean) => {
    console.log(
      `Created a new customer: https://dashboard.stripe.com${
        livemode ? '' : '/test'
      }/customers/${id}.`
    );
  }

const customerCreationErrorLog = (error: Error, uid: string) => {
    console.error(
        `[Error]: Failed to create customer for [${uid}]:`,
        error.message
    );
};

// functions
const createClient = async ({
  email,
  uid,
}: {
  email?: string;
  uid: string;
}) => {
  try {
    creatingCustomerLog(uid);
    const customerData: CustomerData = {
      metadata: {
        firebaseUID: uid,
      },
    };
    if (email) customerData.email = email;
    const customer = await stripe.customers.create(customerData);
    // Add a mapping record in Cloud Firestore.
    const customerRecord = {
      stripeId: customer.id,
      stripeLink: `https://dashboard.stripe.com${
        customer.livemode ? '' : '/test'
      }/customers/${customer.id}`,
    };
    creatingCustomerInFirebaseLog(email)
    await admin
      .firestore()
      .collection('stripeClients')
      .doc(uid)
      .set(customerRecord, { merge: true });
    customerCreatedLog(customer.id, customer.livemode);
    return customerRecord;
  } catch (error) {
    customerCreationErrorLog(error, uid);
    return null;
  }
};

exports.createStripeClient = functions.https.onCall(
    async (user: any): Promise<void> => {
        await createClient(user);
      }
)