import { useState } from 'react'
import styles from './CustomInput.module.css'
// IMAGES
import hiddenImage from './images/hidden.png'
import visibleImage from './images/visible.png'

const CustomInput = ({
  type,
  name,
  placeholder,
  icon,
  visibility,
  setVisibility,
}) => {
  if (!type) type = 'text'
  const [currentType, setCurrentType] = useState(type)
  return (
    <li>
      <div className={styles.icons}>
        <img src={icon} alt={icon.name} />
      </div>
      <input
        type={currentType}
        placeholder={placeholder}
        name={name}
      />
      {type === 'password' ? (
        <div onClick={() => {
          setVisibility(!visibility)
          currentType === 'password' ? 
            setCurrentType('text') :
            setCurrentType('password')
        }}>
          <img src={visibility ? hiddenImage : visibleImage} alt='show/hide' />
        </div>
      ) : null}
    </li>
  )
}

export default CustomInput
