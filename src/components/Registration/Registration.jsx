import { useState } from 'react'
import ReactDOM from 'react-dom'
import styles from './Registration.module.css'
import CustomInput from '../CustomInput/CustomInput'
// IMAGES
import personImage from './images/person.png'
import emailImage from './images/email.png'
import lockImage from './images/lock.png'

const Registration = () => {
  const [visibility, setVisibility] = useState(true),
    handleRegistrationSubmit = e => {
      e.preventDefault()
      if (e.target.firstName.value === '') {
        e.target.firstName.parentElement.style.boxShadow =
          '0 0 3px 2px orangered'
      } else e.target.firstName.parentElement.style.boxShadow = 'none'

      if (e.target.lastName.value === '') {
        e.target.lastName.parentElement.style.boxShadow =
          '0 0 3px 2px orangered'
      } else e.target.lastName.parentElement.style.boxShadow = 'none'

      if (e.target.email.value === '') {
        e.target.email.parentElement.style.boxShadow = '0 0 3px 2px orangered'
      } else e.target.email.parentElement.style.boxShadow = 'none'

      if (e.target.password.value === '') {
        e.target.password.parentElement.style.boxShadow =
          '0 0 3px 2px orangered'
      } else e.target.password.parentElement.style.boxShadow = 'none'

      if (e.target.repeatPassword.value === '') {
        e.target.repeatPassword.parentElement.style.boxShadow =
          '0 0 3px 2px orangered'
      } else e.target.repeatPassword.parentElement.style.boxShadow = 'none'
      if (
        e.target.firstName.value !== '' &&
        e.target.lastName.value !== '' &&
        e.target.email.value !== '' &&
        e.target.password.value !== '' &&
        e.target.repeatPassword.value !== ''
      ) {
        if (e.target.password.value === e.target.repeatPassword.value) {
          alert('Вы были успешно зарегистрированы')
        } else alert('Пароли не совпадают')
      }
    }

  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles.header}>Регистрация</div>
      <form onSubmit={handleRegistrationSubmit}>
        <ul>
          <CustomInput placeholder='Имя' icon={personImage} name='firstName' />
          <CustomInput
            placeholder='Фамилия'
            icon={personImage}
            name='lastName'
          />
          <CustomInput
            type='email'
            placeholder='Email'
            name='email'
            icon={emailImage}
          />
          <CustomInput
            type='password'
            placeholder='Пароль'
            name='password'
            icon={lockImage}
            visibility={visibility}
            setVisibility={setVisibility}
          />
          <CustomInput
            type='password'
            placeholder='Повторите пароль'
            name='repeatPassword'
            icon={lockImage}
            visibility={visibility}
            setVisibility={setVisibility}
          />
          <li>
            <button>Зарегистрироваться</button>
          </li>
        </ul>
      </form>
    </div>, document.querySelector('body')
  )
}

export default Registration
