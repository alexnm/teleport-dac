import React from 'react'

import styles from './margin.module.css'

const Margin = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>Heading Level 1</h1>
      <button className={styles.button}>Button</button>
      <button className={styles.button1}>Button</button>
    </div>
  )
}

export default Margin
