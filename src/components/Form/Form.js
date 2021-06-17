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

  const [send, setSend] = useState({
    loading: false,
    feedbackMessage: false
  })

  const handleInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  //Funciana:
  // const valid = userData.name === '' ? false : true

  // Método
  function validarForm() {
    let valid = false
    let field = userData

    if(field['name'] === '') {
      valid = true
    }
    if(userData.name.length < 3) {
      valid = true
    }

    return valid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enviando...')

    if(validarForm()) {
      console.log('INCOMPLET')
    } else {
      setSend({ loading: true })

      const timer = setTimeout(() => {
        console.log(userData)
        e.target.reset()
        console.log('Enviado')
        setUserData(initialState)
        setSend({ loading: false })

        setSend({ feedbackMessage: true })
        const feedbackTimer = setTimeout(() => {
          setSend({ feedbackMessage: false })
        }, 5000)
        return () => clearTimeout(feedbackTimer)

      }, 1000)
      return () => clearTimeout(timer)

    }

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
      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.button}>Enviar</button>
        {send.loading && <span className={styles.spinner}></span>}
      </div>
    </form>
    {
      send.feedbackMessage &&
      <div className={styles.feedbackContainer}>
        <div className={styles.feedbackItem}>
          <div className={styles.icon}>🔥</div>
          <h6 className={styles.message}>Tu información fue enviada con éxito. Muy pronto estaremos en contacto contigo. ✈️</h6>
          <div className={styles.loading}></div>
        </div>
      </div>
    }
    </section>
  )
}

export default Form
