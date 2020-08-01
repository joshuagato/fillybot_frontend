import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div id="login-container">
        <div className="login-form">
          <form>
            <div className="heading">
              <h2>LOG IN HERE</h2>
            </div>
            <div className="user-icon">
              <FontAwesomeIcon size="3x" icon={faUsers} />
            </div>
            <div className="form-group">
              <input type="text" name="email" autoComplete="off" required />
              <label htmlFor="email">
                <span className="content-name">Email</span>
              </label>
            </div>
            <div className="form-group">
              <input type="password" name="password" autoComplete="off" required />
              <label htmlFor="password">
                <span className="content-name">Password</span>
              </label>
            </div>
            <div className="button-group">
              <button type="submit" className="grow_spin">Log In</button>
            </div>
            <div className="button-group">
              <span className="question">Not a member yet?</span>
              <NavLink to="/register" className="button button--nanuk button--text-thick button--text-upper button--size-s button--border-thick">
                <span>R</span><span>e</span><span>g</span><span>i</span><span>s</span><span>t</span><span>e</span><span>r</span>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

// const styles = {
//   heading: {
//     'text-align': 'center'
//   }
// }

export default Login;
