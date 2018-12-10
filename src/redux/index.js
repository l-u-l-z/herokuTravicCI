import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import test from './modules/test';

// combine reducers
const reducers = combineReducers({
  test
});

/* enable Chrome Redux-DevTools if extension is installed */
// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export store
export default createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));
