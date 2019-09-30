import {compose, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

import { PrimaryUtils } from '../utils/primary.utils';
import rootReducer from './reducers/rootReducer';
import history from '../router/history/router.history';

function assembleStore() {
  const reduxMiddleware: any[] = [thunk, routerMiddleware(history)]

  let composedContent;
  if(PrimaryUtils.isDevelopment) {
    const composeEnhancers = composeWithDevTools({})
    composedContent = composeEnhancers(applyMiddleware(...reduxMiddleware))
  } else {
    composedContent = compose(applyMiddleware(...reduxMiddleware))
  }

  return createStore(rootReducer, composedContent)
}

export default assembleStore;
