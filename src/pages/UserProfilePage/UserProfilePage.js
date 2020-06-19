import React, { Component } from "react";
import "./UserProfilePage.scss";
import UserProfileCard from "../../components/UserProfileCard/UserProfilCard";
import ProfilePageSideBar from "../../components/ProfilePageSideBar/ProfilPageSideBar";
import AboutCard from "../../components/AboutCard/AboutCard";
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

class UserProfilePage extends Component {
  state = {
    profiles: {},
  };

  componentDidMount() {
    this.fetchList();
  }

  fetchList = async () => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const pathname = this.props.history.location.pathname;
    const response = await fetch(`${baseUrl}${pathname}`);
    const data = await response.json();

    this.setState({ profiles: data });
  };

  goToPosts = () => {
    const pathname = this.props.history.location.pathname;
    this.props.history.push(`${pathname}/posts`);
  };

  goToTodos = () => {
    const pathname = this.props.history.location.pathname;
    this.props.history.push(`${pathname}/todos`);
  };

  render() {
    return (
      <div className="container">
        <div className="profile-page">
          <div className="components">
            <UserProfileCard
              name={this.state.profiles.name}
              location={
                this.state.profiles.address !== undefined
                  ? this.state.profiles.address.city
                  : ""
              }
              onPostsBtnClick={this.goToPosts}
              onTodosBtnClick={this.goToTodos}
            />
            <AboutCard
              name={this.state.profiles.name}
              company={
                this.state.profiles.company !== undefined
                  ? this.state.profiles.company.name
                  : ""
              }
              website={this.state.profiles.website}
            />
            <ProjectsCard></ProjectsCard>
            <ExperienceCard
              companyList={
                this.state.profiles.company !== undefined
                  ? this.state.profiles.company
                  : ""
              }
            />
          </div>
          <ProfilePageSideBar></ProfilePageSideBar>
        </div>
      </div>
    );
  }
}

export default UserProfilePage;
