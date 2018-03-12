import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SignupPage from './containers/SignupPage'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/onboarding" component={SignupPage}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();