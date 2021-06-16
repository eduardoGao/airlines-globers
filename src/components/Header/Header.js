import React from 'react'
import logo from '../../assets/aeroplane.svg'
import styles from './header.module.css'
import { Menu } from '../../components'

function Header({ airline, setAirline }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.image} src={logo} alt="Logo Air Globers" />
        <span className={styles.name}>Airlines Globers</span>
      </div>
      <Menu airline={airline} setAirline={setAirline} />
    </header>
  )
}

export default Header
