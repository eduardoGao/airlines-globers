import React, { useState } from 'react'
import styles from './menu.module.css'
import airlines from '../../data/airlines.json'

function Menu({ setAirline }) {
  // State and method to handle the menu view
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  // Function to change the state that shows the name in the main view
  const handleAirline = (name) => {
    setAirline(name)
    toggleMenu()
  }

  return (
    <>
      <div className={`${styles.menu} ${menu && styles.menu_open}`} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <nav className={`${styles.drop} ${menu && styles.dropdown}`}>
        <ul className={styles.list}>
          {
            airlines.map(item => (
              // <button key={item.id} value={item.name} onClick={handleAirline}>{item.name}</button>
              <li
                key={item.id}
                onClick={() => handleAirline(item.name)}
                className={styles.item}
              >
                {item.name}
              </li>
            ))
          }
        </ul>
      </nav>
    </>
  )
}

export default Menu
