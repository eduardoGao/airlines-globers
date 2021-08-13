import React from 'react'
import styles from './hero.module.css'
import icon from "../../assets/airplane2.svg"
import { CardExpandable, InputCheckbox, InputCreditCard, CircularProgressBar } from 'schola-components'

// Receiving prop from App. It will display the airline name state
function Hero({ airline }) {
  return (
    <div className={styles.container}>
      <h1>
        ¡Hola, bienvenido! Sabemos que quieres viajar en un {' '}
        {airline ? <span className={styles.airName}>{airline}</span> : <img src={icon} alt="airplane" className={styles.icon} />}
      </h1>
      <h4 className={styles.instruction}>Por favor, completa el siguiente formulario:</h4>
      <span className={styles.warning}>Todos los campos son obligatorios*</span>
      <CardExpandable title='Prueba'>Hola</CardExpandable>
      <InputCheckbox>hehe</InputCheckbox>
      <InputCreditCard />
      <CircularProgressBar
        progress={100}
        size={45}
        step={3}
        strokeWidth={9}
        title="About you"
      />
    </div>
  )
}

export default Hero
