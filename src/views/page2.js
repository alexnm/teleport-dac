import React from 'react'
import Helmet from 'react-helmet'

import Component from '../components/component'
import styles from './page2.module.css'

const Page2 = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>dac</title>
      </Helmet>
      <Component></Component>
    </div>
  )
}

export default Page2
