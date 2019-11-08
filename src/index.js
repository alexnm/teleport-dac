import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Page from './views/page'
import Page2 from './views/page2'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Page} path="/" />
        <Route exact component={Page2} path="/page2" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
