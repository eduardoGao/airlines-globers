import React from 'react'
import styles from './form.module.css'

function Form() {
  return (
    <section className={styles.section}>
      <form className={styles.form}>
      <label htmlFor="name" className={styles.label}>
        <span className={styles.span}>Nombre Completo</span>
        <input
          type="text"
          id='name'
          name='name'
          className={styles.input}
        />
      </label>
      <label htmlFor="email" className={styles.label}>
        <span className={styles.span}>Correo electrónico</span>
        <input
          type="email"
          id='email'
          name='email'
          className={styles.input}
        />
      </label>
      <label htmlFor="mobile" className={styles.label}>
        <span className={styles.span}>Teléfóno móvil</span>
        <input
          type="tel"
          id='mobile'
          name='mobile'
          className={styles.input}
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
        />
      </label>
      <button type="submit" className={styles.button}>Enviar</button>
    </form>
    </section>
  )
}

export default Form
