import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
// router
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

// page
import Auth from './Auth'
import Dashboard from './Dashboard'

// redux
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './store/index'
const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Auth}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Redirect to='/dashboard' />
        </Switch>
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'));
registerServiceWorker();
