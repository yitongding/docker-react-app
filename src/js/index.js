import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store, { history } from './store';

import Layout from './general/Layout';

import HelloWorld from './HelloWorld';
import Todo from './todo';
import UserPage from './userPage';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Layout>
          <div>
            <Route path="/helloworld" component={HelloWorld} />
            <Route path="/todo" component={Todo} />
            <Route path="/userPage" component={UserPage} />
          </div>
        </Layout>
      </Router>
    </div>
  </Provider>
  , app);
