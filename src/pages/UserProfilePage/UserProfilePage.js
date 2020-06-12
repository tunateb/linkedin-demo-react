import React, { Component } from 'react'
import "./UserProfilePage.scss"
import UserProfileCard from "../../components/UserProfileCard/UserProfilCard"
import ProfilePageSideBar from '../../components/ProfilePageSideBar/ProfilPageSideBar'
import AboutCard from '../../components/AboutCard/AboutCard'
import ProjectsCard from '../../components/ProjectsCard/ProjectsCard'
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard'

class UserProfilePage extends Component {

    state = {
        profiles: [],
        id: this.props.match.params ? this.props.match.params.id.replace(":", "") : 0,
    }

    componentDidMount() {
        this.fetchList();
    }

    fetchList = async () => {
        const baseUrl = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(`${baseUrl}/${this.state.id}`);
        const data = await response.json();

        this.setState({ profiles: data });
    };

    render() {
        return (
            <div className="container">
                <div className="profile-page">
                    <div className="components">
                        <UserProfileCard
                            name={this.state.profiles.name}
                            location={this.state.profiles.address != undefined ? this.state.profiles.address.city : ""}
                        />
                        <AboutCard
                        name={this.state.profiles.name}
                        company={this.state.profiles.company != undefined ? this.state.profiles.company.name : ""}
                        website={this.state.profiles.website}
                        
                        />
                        <ProjectsCard></ProjectsCard>
                        <ExperienceCard
                        companyList={this.state.profiles.company != undefined ? this.state.profiles.company : ""}
                        />
                        
                        
                    </div>
                    <ProfilePageSideBar></ProfilePageSideBar>
                </div>
            </div>
        )
    }
}


export default UserProfilePage;