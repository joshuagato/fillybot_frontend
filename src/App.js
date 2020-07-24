import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class App extends Component {

  state = {
    productinfo: {
      user: '1',
      productsite: '',
      productname: '',
      productnumber: '',
      productsize: '',
      productquantity: '',
      profile: '3'
    },
    userinfo: {

    },
    tasks: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    // tasks: [1,2,3,4,5,6,7,8,9,10],
    createTaskDisabled: true
  }

  inputHandler = event => {
    // console.log(event.target.name)
    const updatedProductInfo = { ...this.state.productinfo };
    updatedProductInfo[event.target.name] = event.target.value
    this.setState({ productinfo: updatedProductInfo });
  }

  submitForm = event => {
    event.preventDefault();

    const inputData = this.state.productinfo;

    if (inputData.productsite === 'adidas') {
      // delete inputData.productsite;

      // axios.post('fillybot.fillycoder.com/adidas', inputData).then(response => {
      // axios.post('http://127.0.0.1:5000/adidas', inputData).then(response => {
      // axios.post('http://127.0.0.1:5000/addtask', inputData).then(response => {
      // axios.get('http://127.0.0.1:5000/fetchalltasks').then(response => {
        // console.log(response)
      // })
      // .catch(error => console.log(error))
      this.props.onAddTask(inputData);
    }
  }

  deleteTask = productId => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this task",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.props.onDeleteTask(productId);        
      }
    });
  }

  componentDidMount() {
    this.props.onFetchAllTasks();
  }

  componentDidUpdate(prevProps, prevState, _) {
    // console.log(this.state.productinfo)
    console.log(this.props.tasks)

    const i = this.state.productinfo;
    const p = prevState.productinfo;

    if (p.productsite !== i.productsite || p.productname !== i.productname || 
      p.productsize !== i.productsize || p.productquantity !== i.productquantity) {
        
      if (i.productsite !== "0" && i.productname && i.productnumber && 
        i.productsize !== "0" && i.productquantity && i.productquantity !== "0")
        this.setState({ createTaskDisabled: false });

      else this.setState({ createTaskDisabled: true });
    }

    if (this.props.tasks.length !== prevProps.tasks.length) this.props.onFetchAllTasks()

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
                  <select value={this.state.productsite} onChange={this.inputHandler} name="productsite">
                    <option value="0">Select a website</option>
                    <option value="adidas">Adidas</option>
                    <option value="footlocker">Footlocker</option>
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
                    <option value="0">Please select size</option>
                    <option value="4.0">Size 4.0</option>
                    <option value="4.5">Size 4.5</option>
                    <option value="5">Size 5</option>
                    <option value="5.5">Size 5.5</option>
                    <option value="6">Size 6</option>
                    <option value="6.5">Size 6.5</option>
                    <option value="7">Size 7</option>
                    <option value="7.5">Size 7.5</option>
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
                    <option value="13.5">Size 13.5</option>
                    <option value="14">Size 14</option>
                    <option value="14.5">Size 14.5</option>
                  </select>
                </label>
                <label>Product Quantity <input type="number" placeholder="Product Number" onChange={this.inputHandler} 
                  value={prod.productquantity} name="productquantity" />
                </label>
                <label>User Profile
                  <select>
                    <option value="0">Select a profile</option>
                    <option>Lemuel</option>
                    <option>Samuel</option>
                  </select>
                </label>
                <button id="create-task" type="submit" disabled={this.state.createTaskDisabled}>CREATE TASK</button>
              </form>
            </fieldset>

            <fieldset>
              <legend>User Info</legend>
              <form>
                <label>User Profile
                  <select>
                    <option value="0">Select a profile to edit</option>
                    <option>Lemuel</option>
                    <option>Samuel</option>
                  </select>
                </label>
                <button className="profile-btn" type="button">EDIT</button>
                <button className="profile-btn" type="button">NEW</button>
              </form>
            </fieldset>
          </section>
          <section id="tasks">
            <section id="fixed-section">
              <div className="headings">
                <span className="prod-id">ID</span><span className="size">SIZE</span>
                <span className="site">WEBSITE</span><span className="profile">PROFILE</span>
                <span className="status">STATUS</span><span className="action">ACTION</span>
              </div>
              <hr />
            </section>
            <section id="padding-section"></section>
            {this.props.tasks.map(task => (
              <div key={task.id} className="task-items">
                <span className="prod-id">{task.prod_number}</span><span className="size">{task.prod_size}</span>
                <span className="site">{task.website}</span><span className="profile">{'Lemuel'}</span>
                <span className="status">{'IDLE'}</span>
                <span className="action">
                  <span id="start"><FontAwesomeIcon icon={faPlay} /></span>
                  <span id="delete" onClick={() => this.deleteTask(task.id)}><FontAwesomeIcon icon={faTrashAlt} /></span>
                </span>
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks:  state.tasksReducer.tasks,
    failureMessage:  state.tasksReducer.failureMessage,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTask: data => dispatch(actions.addTask(data)),
    onFetchAllTasks: message => dispatch(actions.fetchAllTasks(message)),
    onDeleteTask: id => dispatch(actions.deleteTask(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
