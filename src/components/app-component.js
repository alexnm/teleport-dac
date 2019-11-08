import React from 'react'
import { Link } from 'react-router-dom'

import styles from './app-component.module.css'

const AppComponent = (props) => {
  return (
    <div className={styles.container}>
      <img
        src="https://images.unsplash.com/photo-1572945688831-4f9f148906e6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkxMzIxfQ"
        className={styles.image}
      />
      <img
        src="https://images.unsplash.com/photo-1572904445274-6ddee9318dc9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjkxMzIxfQ"
        className={styles.image1}
      />
      <a href="#" target="_blank" className={styles.link}>
        Link
      </a>
      <p className={styles.textblock}>Here's a very very long paragraph</p>
      <Link to="/" className={styles.navlink}>
        Page
      </Link>
    </div>
  )
}

export default AppComponent
