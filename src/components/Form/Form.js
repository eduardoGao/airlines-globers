import React, { useState } from 'react'
import styles from './form.module.css'

function Form() {
  const initialState = {
    name: '',
    email: '',
    mobile: '',
    age: ''
  }
  const [userData, setUserData] = useState(initialState)

  const handleInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userData)
    e.target.reset()
  }

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={styles.label}>
        <span className={styles.span}>Nombre Completo</span>
        <input
          type="text"
          id='name'
          name='name'
          className={styles.input}
          onChange={handleInput}
        />
      </label>
      <label htmlFor="email" className={styles.label}>
        <span className={styles.span}>Correo electrónico</span>
        <input
          type="email"
          id='email'
          name='email'
          className={styles.input}
          onChange={handleInput}
        />
      </label>
      <label htmlFor="mobile" className={styles.label}>
        <span className={styles.span}>Teléfóno móvil</span>
        <input
          type="tel"
          id='mobile'
          name='mobile'
          className={styles.input}
          onChange={handleInput}
        />
      </label>
      <label htmlFor="age" className={styles.label}>
        <span className={styles.span}>Edad</span>
        <input
          type="number"
          id='age'
          name='age'
          min='18'
          max='99'
          className={styles.input}
          onChange={handleInput}
        />
      </label>
      <button type="submit" className={styles.button}>Enviar</button>
    </form>
    </section>
  )
}

export default Form
