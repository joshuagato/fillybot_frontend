import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import BotInterface from './components/BotInterface/BotInterface';

class App extends Component {

  componentDidUpdate() {
    // console.log(this.props.authenticated)
  }

  componentDidMount() {
    // console.log(this.props.authenticated)
  }

  render() {
    let routes = (
      <Switch>
        <Route path='/register'><Register /></Route>
        <Route path='/'><Login /></Route>
        <Redirect from="*" to='/' />
      </Switch>
    );

    if (this.props.authenticated) {
      routes = (
        <Switch>
          <Route path='/interface' component={BotInterface} />
          <Redirect from="*" to='/interface' />
        </Switch>
      );
    }
    return (<div>{routes}</div>);
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginReducer.user,
    token: state.loginReducer.token,
    authenticated: state.loginReducer.token !== null && state.loginReducer.user.email !== null
  }
}

export default connect(mapStateToProps)(App);
