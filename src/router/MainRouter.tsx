import React from 'react'
import {Route, Switch} from 'react-router-dom'

import HomePage from '../pages/home/HomePage'
import AboutPage from '../pages/about/AboutPage'
import NotFoundPage from '../pages/404/NotFoundPage'

const MainRouter: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />

        {/* 404 Page if no other routes match */}
        <Route component={NotFoundPage} />
      </Switch>
    </>
  )
}

export default MainRouter;
