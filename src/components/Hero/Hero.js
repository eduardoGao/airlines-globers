import React from 'react'
import styles from './hero.module.css'
import icon from "../../assets/airplane2.svg"

// Receiving prop from App. It will display the airline name state
function Hero({ airline }) {
  return (
    <div className={styles.container}>
      <h1>
        ¡Hola, bienvenido! Sabemos que quieres viajar en un {' '}
        {airline ? <span className={styles.airName}>{airline}</span> : <img src={icon} alt="airplane" className={styles.icon} />}
      </h1>
      <h4>Por favor, completa el siguiente formulario:</h4>
    </div>
  )
}

export default Hero
