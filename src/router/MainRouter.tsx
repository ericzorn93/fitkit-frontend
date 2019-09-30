import React from 'react'
import {Route, Switch} from 'react-router-dom'

import HomePage from '../pages/HomePage'

const MainRouter: React.FC = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </React.Fragment>
  )
}

export default MainRouter;
