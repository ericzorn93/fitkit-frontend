import {compose, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import { PrimaryUtils } from '../utils/primary.utils';
import rootReducer from './reducers/rootReducer';

function assembleStore() {
  const reduxMiddleware: any[] = [thunk]

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
