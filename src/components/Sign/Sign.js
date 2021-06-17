import React from 'react'
import styles from './sign.module.css'

function Sign() {
  return (
    <span className={styles.sign}>
      Made with 🔥 by <span className={styles.name}>Eduardo Díaz</span>
    </span>
  )
}

export default Sign
