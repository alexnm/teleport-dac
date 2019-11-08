import React from 'react'
import PropTypes from 'prop-types'

import styles from './component.module.css'

const AppComponent = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>Heading Level 1</h1>
      <h2 className={styles.heading2}>Heading Level 2</h2>
      <h3 className={styles.heading3}>Heading Level 3</h3>
      <h5 className={styles.heading5}>Heading Level 5</h5>
      <h6 className={styles.heading6}>Heading Level 6</h6>
      <div className={styles.container1}>
        <h1 className={styles.heading11}>Heading Level 1</h1>
        <p className={styles.textblock}>Paragraph</p>
      </div>
      <a href="#" target="_blank" className={styles.link}>
        Link
      </a>
    </div>
  )
}

AppComponent.defaultProps = {
  headingle: 'Heading Level 4',
  headingle1: 'Heading Level 1',
}

AppComponent.propTypes = {
  headingle: PropTypes.string,
  headingle1: PropTypes.string,
}

export default AppComponent
