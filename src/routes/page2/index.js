import Helmet from 'react-helmet'

import Component from '../../components/component'
import styles from './style.css'

const Page2 = () => {
  return (
    <div class={styles.container}>
      <Helmet>
        <title>dac</title>
      </Helmet>
      <Component></Component>
    </div>
  )
}

export default Page2
