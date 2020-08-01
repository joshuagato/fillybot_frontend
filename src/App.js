import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import BotInterface from './components/BotInterface/BotInterface';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/interface' component={BotInterface} />
        <Route path='/' component={Login} />
        <Redirect to='/login' />
        {/* <Route component={Login} /> */}
      </Switch>
    )

    if (!true) {
      routes = (
        <Route path='/bot-interface' component={BotInterface} />
      )
    }
    return (<div>{routes}</div>);
  }
}

export default App;
