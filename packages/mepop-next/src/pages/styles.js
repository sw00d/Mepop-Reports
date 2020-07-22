import { Formik, Form } from 'formik'

import Spinner from '../styles/elements/Loading/Spinner'
import Button from '../styles/elements/Button'
import Card from '../styles/elements/Card'
import Table from '../styles/elements/Table'
import Field from '../styles/elements/Form/Field'
import Flex from '../styles/layout/Flex'
import Box from '../styles/layout/Box'
import ValueBox from '../styles/reporting/ValueBox'
import Linechart from '../styles/reporting/LineChart'
import Barchart from '../styles/reporting/Barchart'

const data = [
  { time: '10:09', sales: 40 },
  { time: '11:10', sales: 40 },
  { time: '12:11', sales: 50 },
  { time: '13:11', sales: 30 },
  { time: '14:11', sales: 10 },
  { time: '15:11', sales: 100 },
  { time: '16:11', sales: 80 },
  { time: '17:11', sales: 50 },
  { time: '18:09', sales: 100 },
  { time: '19:10', sales: 40 },
  { time: '20:11', sales: 50 },
  { time: '21:11', sales: 30 },
  { time: '22:11', sales: 10 },
  { time: '23:11', sales: 70 },
  { time: '00:11', sales: 30 }
]

const total_earnings = 14000
const total_shipping_cost = 2000
const depop_fees = 1000
const paypal_fees = 700

export default (props) => {
  return (
    <Flex justifyContent='space-between' flexWrap='wrap' alignItems='center' bg='mainBg'>
      <Flex justifyContent='space-around' alignItems='center' width={[1, 1, 1 / 2]} />
      <Flex justifyContent='space-around' alignItems='center' width={[1, 1, 1 / 2]}>
        <Card
          headerText='Form'
          m='20px'
          justifyContent='space-around'
          alignItems='center'
          flexDirection='row'
        >
          <Formik
            initialValues={{ email: '', color: 'red', firstName: '', lastName: '' }}
          >
            {
              () => {
                return (
                  <Form>
                    <Field as='select' name='color'>
                      <option value='red'>Red</option>
                      <option value='green'>Green</option>
                      <option value='blue'>Blue</option>
                    </Field>

                    <Field name='lastName'>
                      {({
                        field, // { name, value, onChange, onBlur }
                        form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                        meta
                      }) => (
                        <div>
                          <input type='text' placeholder='Email' {...field} />
                          {meta.touched && meta.error && (
                            <div className='error'>{meta.error}</div>
                          )}
                        </div>
                      )}
                    </Field>
                    <Button type='submit'>Submit</Button>
                  </Form>
                )
              }
            }
          </Formik>
        </Card>
      </Flex>
      <Flex justifyContent='space-around' alignItems='center' width={[1, 1, 1 / 2]}>
        <Table
          headerText='Table'
          data={data}
          columnLabels={['time', 'sales']}
          p='0px'
          height='320px'
          tableHeight={320 - 40}
        />
      </Flex>
      <Flex justifyContent='space-around' alignItems='center' width={[1, 1, 1 / 2]}>
        <Linechart headerText='Line Chart' data={data} xdataKey='time' lineDataKey='sales' />
      </Flex>
      <Flex justifyContent='space-around' alignItems='center' width={[1, 1, 1 / 2]}>
        <Barchart headerText='Bar Chart' data={data} xdataKey='time' barDataKey='sales' color='purple' />
      </Flex>
      <Flex flexWrap='wrap' justifyContent='space-around' alignItems='center' width={[1, 1, 1, 1]}>
        <ValueBox
          title='Items Sold'
          value={199}
        />
        <ValueBox
          title='Avg. Items Sold Per Day'
          value={4}
        />
        <ValueBox
          title='Avg. Item Price'
          value={150}
          compareValue={200}
          float
          currencyType='$'
          date1='12/20/2019'
          date2='12/20/2020'
        />
        <ValueBox
          title='Avg. Days Listed'
          value={250}
          compareValue={200}
          float
          currencyType='$'
          date1='12/20/2019'
          date2='12/20/2020'
        />

      </Flex>
      <Flex justifyContent='space-around' alignItems='center' width={[1, 1, 1 / 2]}>
        <Card headerText='Hello World'>
          <Button background='warning' size='lg'>Click Me</Button>
        </Card>
      </Flex>
      <Flex justifyContent='space-around' alignItems='center' width={[1, 1, 1 / 2]}>
        <Card headerText='Loading...' isLoading />
      </Flex>
      <Flex justifyContent='space-around' alignItems='center' width={[1, 1, 1 / 2]}>
        <Spinner color='primary' background='mainBg' />
        <Spinner color='sunset' />
        <Spinner color='yellowDark' background='mainBg' />
      </Flex>
      <Flex justifyContent='space-between' alignItems='center' width={[1, 1, 1 / 2]}>
        <Button background='warning' color='white' size='sm'>Small</Button>
        <Button isLoading>Click Me</Button>
        <Button background='blueHighlight' color='white'>Medium</Button>
        <Button background='bad' color='white' size='lg'>Large</Button>
      </Flex>
      <Box
        width={[1, 1, 1 / 2]}
        p={5}
        fontSize={4}
        color='white'
        bg='blueHighlight'
      >
        Flex Box
      </Box>
      <Box
        width={[1, 1, 1 / 2]}
        p={5}
        fontSize={4}
        color='white'
        bg='green'
      >
        Flex Box
      </Box>
      <Box
        width={[1, 1, 1 / 2]}
        p={5}
        fontSize={4}
        color='white'
        bg='danger'
      >
        Flex Box
      </Box>
      <Box
        width={[1, 1, 1 / 2]}
        p={5}
        fontSize={4}
        color='white'
        bg='blue'
      >
        Flex Box
      </Box>
    </Flex>
  )
}
