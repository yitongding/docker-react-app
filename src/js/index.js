import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
// import { Router, Route } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import store, { history } from "./store"

import Layout from "./general/Layout"
// import DevTools from "./general/DevTools"

import HelloWorld from "./HelloWorld"
import Todo from "./todo"
import UserPage from "./userPage"

const app = document.getElementById('app')

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
, app)
