import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

import React from 'react'

function Navbar() {
  return (
    <div className={styles.navBox}>
      <Link to={'/'} className={styles.link}>Home</Link>
      <Link to={'/contact'}  className={styles.link}>Contact Us</Link>
      <Link to={'/task'}  className={styles.link}>Task</Link>
    </div>
  )
}

export default Navbar
