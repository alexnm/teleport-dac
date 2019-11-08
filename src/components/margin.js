import React from 'react'

import styles from './margin.module.css'

const Margin = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>Test Diffing</h1>
      <button className={styles.button}>Button</button>
      <button disabled="true" className={styles.button1}>
        Does this really work?
      </button>
    </div>
  )
}

export default Margin
