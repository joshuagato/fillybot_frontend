import React, { Component } from 'react';
import './App.scss';
// import axios from 'axios';

class App extends Component {

  state = {
    productinfo: {
      productname: '',
      productnumber: '',
      productsize: '',
      productquantity: ''
    },
    userinfo: {

    }
  }

  inputHandler = event => {
    // console.log(event.target.name)
    const updatedProductInfo = { ...this.state.productinfo };
    updatedProductInfo[event.target.name] = event.target.value
    this.setState({ productinfo: updatedProductInfo });
  }

  submitForm = event => {
    event.preventDefault();

    console.log('Joshua')
  }

  componentDidUpdate() {
    console.log(this.state.productinfo)
  }

  render() {
    const prod = this.state.productinfo;

    return (
      <div className="App">
        <div id="bot">
          <section id="controls">
            <fieldset>
              <legend>Product Info</legend>
              <form onSubmit={this.submitForm}>
                <label>Target Website
                  <select>
                    <option>Select a website</option>
                    <option>Adidas</option>
                    <option>FootLocker</option>
                  </select>
                </label>
                <label>Product Name <input type="text" placeholder="Product Name" onChange={this.inputHandler} 
                  value={prod.productname} name="productname" />
                </label>
                <label>Product Number <input type="text" placeholder="Product Number" onChange={this.inputHandler} 
                  value={prod.productnumber} name="productnumber" />
                </label>
                <label>Product Size
                  <select value={prod.productsize} onChange={this.inputHandler} name="productsize">
                    <option>Please select size</option>
                    <option value="7.5">Size 4.0</option>
                    <option value="7.5">Size 4.5</option>
                    <option value="8">Size 5</option>
                    <option value="8">Size 5.5</option>
                    <option value="8">Size 6</option>
                    <option value="8">Size 6.5</option>
                    <option value="8">Size 7</option>
                    <option value="8">Size 7.5</option>
                    <option value="8">Size 8</option>
                    <option value="8.5">Size 8.5</option>
                    <option value="9">Size 9</option>
                    <option value="9.5">Size 9.5</option>
                    <option value="10">Size 10</option>
                    <option value="10.5">Size 10.5</option>
                    <option value="11">Size 11</option>
                    <option value="11.5">Size 11.5</option>
                    <option value="12">Size 12</option>
                    <option value="12.5">Size 12.5</option>
                    <option value="13">Size 13</option>
                    <option value="13">Size 13.5</option>
                    <option value="13">Size 14</option>
                    <option value="13">Size 14.5</option>
                  </select>
                </label>
                <label>Product Quantity <input type="text" placeholder="Product Number" onChange={this.inputHandler} 
                  value={prod.productquantity} name="productquantity" />
                </label>
                <label>User Profile
                  <select>
                    <option>Select a profile</option>
                    <option>Lemuel</option>
                    <option>Samuel</option>
                  </select>
                </label>
                <button type="submit">CREATE TASK</button>
              </form>
            </fieldset>

            <fieldset>
              <legend>User Info</legend>
              <form>
                <label>User Profile
                  <select>
                    <option>Select a profile to edit</option>
                    <option>Lemuel</option>
                    <option>Samuel</option>
                  </select>
                </label>
                <button class="profile-btn" type="button">EDIT</button>
                <button class="profile-btn" type="button">NEW</button>
              </form>
            </fieldset>
          </section>
          <section id="tasks">
            <div class="headings">
              <span class="prod-id">PROD_ID</span><span class="size">SIZE</span>
              <span class="site">SITE</span><span>PROFILE</span>
              <span>STATUS</span><span>ACTION</span>
            </div>
            <hr />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
