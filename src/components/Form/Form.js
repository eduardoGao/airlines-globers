import React from 'react'
import styles from './form.module.css'

// UI Component \ Receiving props to father FormContainer component
function Form({ handleInput, handleSubmit, send }) {
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
        <span className={styles.messageValidation}>{ send.error?.name }</span>
      </label>
      <label htmlFor="email" className={styles.label}>
        <span className={styles.span}>Correo electrónico</span>
        <input
          // type="email"
          id='email'
          name='email'
          className={styles.input}
          onChange={handleInput}
        />
        <span className={styles.messageValidation}>{ send.error?.email }</span>
      </label>
      <label htmlFor="mobile" className={styles.label}>
        <span className={styles.span}>Teléfono móvil</span>
        <input
          type="tel"
          id='mobile'
          name='mobile'
          className={styles.input}
          onChange={handleInput}
        />
        <span className={styles.messageValidation}>{ send.error?.mobile }</span>
      </label>
      <label htmlFor="age" className={styles.label}>
        <span className={styles.span}>Edad</span>
        <input
          type="number"
          id='age'
          name='age'
          className={styles.input}
          onChange={handleInput}
        />
        <span className={styles.messageValidation}>{send.error?.age}</span>
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
          <div className={styles.icon}>⭐️</div>
          <h6 className={styles.message}>Tu información fue enviada con éxito. Muy pronto estaremos en contacto contigo. ✈️</h6>
          <div className={styles.loading}></div>
        </div>
      </div>
    }
    </section>
  )
}

export default Form
