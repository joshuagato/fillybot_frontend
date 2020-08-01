import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Register.scss';

class Register extends Component {
  render() {
    return (
      <div id="register-container">
        <div className="register-form">
          <form>
            <div className="heading">
              <h2>REGISTER HERE</h2>
            </div>
            <div className="form-group">
              <input type="text" name="firstname" autoComplete="off" required />
              <label htmlFor="firstname">
                <span>First Name</span>
              </label>
            </div>
            <div className="form-group">
              <input type="text" name="lastname" autoComplete="off" required />
              <label htmlFor="lastname">
                <span>Last Name</span>
              </label>
            </div>
            <div className="form-group">
              <input type="email" name="email" autoComplete="off" required />
              <label htmlFor="email">
                <span>Email</span>
              </label>
            </div>
            <div className="form-group">
              <input type="password" name="password" autoComplete="off" required />
              <label htmlFor="password">
                <span>Password</span>
              </label>
            </div>
            <div className="form-group">
              <input type="password" name="repassword" autoComplete="off" required />
              <label htmlFor="repassword">
                <span>Confirm Password</span>
              </label>
            </div>
            <div className="button-group">
              <button type="submit" className="grow_ellipse">JOIN US</button>
            </div>
            <div className="button-group">
              <span className="question">Already with us?</span>
              <NavLink to="/login" className="button button--nanuk button--text-thick button--text-upper button--size-s button--border-thick">
                <span>L</span><span>o</span><span>g</span><span>i</span><span>n</span>
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

export default Register;
