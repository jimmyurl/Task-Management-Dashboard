import {thunk} from 'redux-thunk';

// Then apply the middleware in the store configuration:
import { createStore, applyMiddleware } from 'redux';
import taskReducer from './reducers/taskReducer';

const store = createStore(
  taskReducer,
  applyMiddleware(thunk)
);

export default store;
