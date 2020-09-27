import ReactModal from 'react-modal'
import Flex from '../../layout/Flex'
import Button from '../../elements/Button'

const Modal = ({ children, ...props }) => {
  return (
    <ReactModal
      {...props}
      style={customStyles}
    >
      <Flex justifyContent='flex-end'>
        <Button bg='transparent' color='textGrey' onClick={props.onRequestClose}>
          <i
            className='fa fa-close'
          />
        </Button>
      </Flex>

      {children}
    </ReactModal>
  )
}

export default Modal
const customStyles = {
  overlay: {
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    position: 'static',
    width: 'null',
    height: 'null',
    padding: '0px',
    maxHeight: '97%'
  }
}
