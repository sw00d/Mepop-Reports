// @flow
import Modal from '../../styles/elements/Modal'
import Text from '../../styles/elements/Text'
import Flex from '../../styles/layout/Flex'

const InfoModal = ({ modalIsOpen, toggleModal }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={() => toggleModal(false)}>
      <Flex p='50px' pt='0px' flexDirection='column'>

        <Text fontSize='25px'>How to get your files...</Text>
        <ol>
          <li><Text>Login to Depop</Text></li>
          <li><Text>Click 'Profile' (top right corner)</Text></li>
          <li><Text>Click 'Download Sales' (top right corner)</Text></li>
          <li><Text>Select date range and click 'Download'</Text></li>
        </ol>
        <img src='/get-files.gif' />
      </Flex>
    </Modal>

  )
}

export default InfoModal
