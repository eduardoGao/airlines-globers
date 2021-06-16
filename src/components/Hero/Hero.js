import React from 'react'
import styles from './hero.module.css'

function Hero() {
  return (
    <div className={styles.container}>
      <h1>¡Hola, bienvenido! Sabemos que quieres viajar en un X.</h1>
      <h4>Por favor, completa el siguiente formulario:</h4>
    </div>
  )
}

export default Hero
