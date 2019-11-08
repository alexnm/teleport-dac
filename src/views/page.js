import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import Margin1 from '../components/margin1'
import styles from './page.module.css'

const Page = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>dac</title>
      </Helmet>
      <Margin1></Margin1>
      <Link to="/page2" className={styles.navlink}>
        Go there
      </Link>
    </div>
  )
}

export default Page
