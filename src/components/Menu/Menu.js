import React, { useState } from 'react'
import styles from './menu.module.css'
import airlines from '../../data/airlines.json'

function Menu({ airline, setAirline }) {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const handleAirline = (e) => {
    setAirline(e.target.value)
  }

  return (
    <>
      <div className={`${styles.menu} ${menu && styles.menu_open}`} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <nav className={`${styles.drop} ${menu && styles.dropdown}`}>
        <ul>
          {
            airlines.map(item => (
              <button key={item.id} value={item.name} onClick={handleAirline}>{item.name}</button>
            ))
          }
        </ul>
        { airline }
      </nav>
    </>
  )
}

export default Menu
