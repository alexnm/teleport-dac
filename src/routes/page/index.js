import { Link } from 'preact-router/match'
import Helmet from 'react-helmet'

import Margin1 from '../../components/margin1'
import styles from './style.css'

const Page = () => {
  return (
    <div class={styles.container}>
      <Helmet>
        <title>dac</title>
      </Helmet>
      <Margin1></Margin1>
      <Link href="/page2" class={styles.navlink}>
        Go there
      </Link>
    </div>
  )
}

export default Page
