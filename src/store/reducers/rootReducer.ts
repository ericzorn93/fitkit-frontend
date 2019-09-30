import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'

import history from '../../router/history/router.history';

// Reducer that combines all Global Application State
const rootReducer = combineReducers({
  router: connectRouter(history)
})

export default rootReducer;
