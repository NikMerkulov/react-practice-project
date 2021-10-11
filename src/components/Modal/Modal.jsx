import { createPortal } from 'react-dom'

const Modal = ({ isShowing, switchDisplay, children }) => {
  if (!isShowing) return null

  const styles = {
    overlay: {
      background: 'rgba(0, 0, 0, 30%)',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
  
  return createPortal(
    <div style={styles.overlay} onClick={switchDisplay}>
      <div onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div> , document.querySelector('#portal')
  )
}
export default Modal