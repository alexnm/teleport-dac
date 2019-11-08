import { Router } from 'preact-router'

import Page from '../routes/page/index'
import Page2 from '../routes/page2/index'

const App = () => {
  return (
    <Router>
      <Page path="/" />
      <Page2 path="/page2" />
    </Router>
  )
}

export default App
