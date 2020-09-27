// @flow
import Modal from '../../styles/elements/Modal'
import Text from '../../styles/elements/Text'
import HorzDivider from '../../styles/elements/HorzDivider'
import Flex from '../../styles/layout/Flex'

const InfoModal = ({ modalIsOpen, toggleModal }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={() => toggleModal(false)}>
      <Flex p='50px' pt='0px' flexDirection='column'>
        <Text fontWeight={600} fontSize='25px' color='primary' mb='5px'>What's this?</Text>
        <Text>We use these files to read in your sales and make all the calculations for our reports.</Text>
        <HorzDivider my='15px' />
        <Text fontSize='20px'>How to get your files...</Text>
        <ol>
          <li><Text>Login to Depop</Text></li>
          <li><Text>Click 'Profile' (top right corner)</Text></li>
          <li><Text>Click 'Download Sales' (top right corner)</Text></li>
          <li><Text>Select date range and click 'Download'</Text></li>
          <li><Text>Upload those files to Mepop Reports!</Text></li>
        </ol>
        <img src='/get-files.gif' />
      </Flex>
    </Modal>

  )
}

export default InfoModal
