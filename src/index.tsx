import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, ReactReduxContext} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router';
import {ApolloProvider} from '@apollo/react-hooks';
import ReactGA from 'react-ga';

import './index.css';
import * as serviceWorker from './serviceWorker';
import assembleStore from './store';
import history from './router/history/router.history';
import apolloClient from './apollo';
import MainRouter from './router/MainRouter';


const RootComponent = () => {
  const store = assembleStore();

  return (
      <Provider store={store}>
        <ConnectedRouter history={history} context={ReactReduxContext}>
          <ApolloProvider client={apolloClient}>
            <MainRouter/>
          </ApolloProvider>
        </ConnectedRouter>
      </Provider>
  )
}


// Initialize Google Analytics
ReactGA.initialize("UA-132682812-3", {
  debug: false
});
ReactGA.pageview(window.location.pathname + window.location.search);

// Render root of React application
ReactDOM.render(<RootComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
