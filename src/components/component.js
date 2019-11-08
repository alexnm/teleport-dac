import PropTypes from 'prop-types'

import styles from './component.css'

const AppComponent = (props) => {
  return (
    <div class={styles.container}>
      <h1 class={styles.heading1}>Heading Level 1</h1>
      <h2 class={styles.heading2}>Heading Level 2</h2>
      <h3 class={styles.heading3}>Heading Level 3</h3>
      <h5 class={styles.heading5}>Heading Level 5</h5>
      <h6 class={styles.heading6}>Heading Level 6</h6>
      <div class={styles.container1}>
        <h1 class={styles.heading11}>Heading Level 1</h1>
        <p class={styles.textblock}>Paragraph</p>
      </div>
      <a href="#" target="_blank" class={styles.link}>
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
