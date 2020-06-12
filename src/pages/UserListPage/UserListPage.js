import React, { Component, useState } from "react";
import UserListCard from "../../components/UserListCard/UserListCard";
import "./UserListPage.scss";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";

class UserListPage extends Component {

  state = {
    userList: [],
  };

  componentDidMount() {
    this.fetchList();
  }

  fetchList = async () => {
    const baseUrl = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(`${baseUrl}`);
    const data = await response.json();

    this.setState({ userList: data });
  };

  goDetails = (user) => {
    // todo: this.state.setShowLink(true) 
    const id = user;
    this.props.history.push(`/user/${id}`);
  }


  render() {
    return (
      <div className="container">
        <div className="userList-grid">
          <LeftSideBar></LeftSideBar>
          <div className="user-list">
            {this.state.userList.map((user,key) => (
              <UserListCard
              key={key}
                id={user.id}
                title={user.name}
                company={user.company.name}
                src="https://picsum.photos/60/60"
                onButtonClick={() => this.goDetails(user.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default UserListPage;
