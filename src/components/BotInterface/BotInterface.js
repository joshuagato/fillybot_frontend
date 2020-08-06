import React, { Component } from 'react';
import './BotInterface.scss';
import { connect } from 'react-redux';
import * as actions from './../../store/actions/index';

import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class BotInterface extends Component {

  state = {
    productinfo: {
      user: '',
      productsite: '0',
      productname: '',
      productnumber: '',
      productsize: '0',
      productquantity: '',
      profile: '0'
    },
    createTaskDisabled: true,
    profileinfo: {}
  }

  inputHandler = event => {
    const updatedProductInfo = { ...this.state.productinfo };
    updatedProductInfo[event.target.name] = event.target.value
    this.setState({ productinfo: updatedProductInfo });
  }

  submitForm = event => {
    event.preventDefault();

    this.props.onAddTask(this.state.productinfo);
  }

  purchase = (productDetails, userDetails) => {
    const { user, prod_name, prod_number, prod_qty, prod_size } = productDetails;
    const details = { ...userDetails, user, prod_number, prod_name, prod_qty, prod_size };

    if (productDetails.website === 'adidas') {
      this.props.onPurchaseAdidas(details);
    }
  }

  deleteTask = productId => {
    swal({
      title: "Are you sure?", text: "Once deleted, you will not be able to recover this task",
      icon: "warning", buttons: true, dangerMode: true,
    })
    .then(willDelete => {
      if (willDelete) this.props.onDeleteTask(productId, this.props.user.id);        
    });
  }

  fetchProfile = id => {
    return this.props.profiles.find(profile => parseInt(profile.id) === parseInt(id));
  }

  profileHandler = event => {
    const profileId = event.target.value;
    const profileinfo = this.fetchProfile(profileId);
    this.setState({ profileId, profileinfo });
  }

  isEmpty = obj => {
    return Object.keys(obj).length === 0;
  }

  setUser = () => {
    const updatedProductInfo = { ...this.state.productinfo };
    updatedProductInfo['user'] = this.props.user.id
    this.setState({ productinfo: updatedProductInfo });
  }

  getProfileName = id => {
    const matchedProfile = this.props.profiles.find(profile => parseInt(profile.id)  === parseInt(id))
    return matchedProfile.profile_name;
  }

  getProfileData = id => {
    return this.props.profiles.find(profile => parseInt(profile.id)  === parseInt(id))
  }

  logout = () => {
    this.props.onLogout();
  }

  componentDidMount() {
    this.props.onFetchAllProfiles(this.props.user.id);
    this.props.onFetchAllTasks(this.props.user.id);
    this.setUser();
  }

  componentDidUpdate(prevProps, prevState, _) {
    const i = this.state.productinfo;
    const p = prevState.productinfo;

    if (p.productsite !== i.productsite || p.productname !== i.productname || 
      p.productsize !== i.productsize || p.productquantity !== i.productquantity ||
      p.profile !== i.profile) {
        
      if (i.productsite && i.productsite !== "0" && i.productname && i.productnumber && 
        parseInt(i.productsize) >= 1 && i.productquantity && parseInt(i.productquantity) >= 1 &&
        parseInt(i.profile) >= 1)
          this.setState({ createTaskDisabled: false });

      else this.setState({ createTaskDisabled: true });
    }

    if (this.props.tasks.length !== prevProps.tasks.length) this.props.onFetchAllTasks(this.props.user.id);
  }

  render() {
    const prod = this.state.productinfo;

    return (
      <div className="bot-interface">
        <div id="bot">
          <section id="controls">
            <fieldset className="moveFromTop">
              <legend>Product Info</legend>
              <form onSubmit={this.submitForm}>
                <label>Target Website
                  <select value={this.state.productsite} onChange={this.inputHandler} name="productsite">
                    <option value="0">Select a website</option>
                    <option value="adidas">Adidas</option>
                    {/* <option value="footlocker">Footlocker</option> */}
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
                <label>Product Quantity<input type="number" placeholder="Product Number" onChange={this.inputHandler} 
                  value={prod.productquantity} name="productquantity" />
                </label>
                <label>User Profile
                  <select value={prod.profile} onChange={this.inputHandler} name="profile">
                    <option value="0">Select a profile</option>
                    {this.props.profiles.map(profile => (
                      <option value={profile.id} key={profile.id}>{profile.profile_name}</option>
                    ))}
                  </select>
                </label>
                <button id="create-task" type="submit" disabled={this.state.createTaskDisabled}>CREATE TASK</button>
              </form>
            </fieldset>

            <fieldset className="moveFromBottom">
              <legend>User Info</legend>
              <form>
                <label>User Profile
                  <select>
                    <option value="0">Select a profile to edit</option>
                    {this.props.profiles.map(profile => (
                      <option value={profile.id} key={profile.id}>{profile.profile_name}</option>
                    ))}
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
                <span className="site">{task.website}</span><span className="profile">
                  {this.getProfileName(task.profile)}</span>
                <span className="status">{'IDLE'}</span>
                <span className="action">
                  <span id="start" onClick={() => this.purchase(task, this.getProfileData(task.profile))} title="Purchase">
                    <FontAwesomeIcon icon={faPlay} />
                  </span>
                  <span id="delete" onClick={this.deleteTask.bind(this, task.id)} title="Delete">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </span>
                </span>
              </div>
            ))}
          </section>
          <section id="user-specific-data">
            <div className="username">{this.props.user.firstname}</div>
            <button onClick={this.logout} className="logout">Logout</button>
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
    profiles: state.profilesReducer.profiles,
    user: state.loginReducer.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTask: data => dispatch(actions.addTask(data)),
    onFetchAllTasks: id => dispatch(actions.fetchAllTasks(id)),
    onDeleteTask: (prodid, userid) => dispatch(actions.deleteTask(prodid, userid)),
    onPurchaseAdidas: details => dispatch(actions.purchaseAdidas(details)),
    onFetchAllProfiles: id => dispatch(actions.fetchAllProfiles(id)),
    onLogout: () => dispatch(actions.logout())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BotInterface);
