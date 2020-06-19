import React from 'react'
import './ProfilePageSideBar.scss'
import Dashboard from "../SideBarCards/Dashboard/Dashboard"
import VisitorsCard from '../SideBarCards/VisitorsCard/VisitorsCard';
import VideosCard from '../SideBarCards/VideosCard/VideosCard';

function ProfilePageSideBar() {


    return (
        <div className="profile-sidebar">
           <Dashboard></Dashboard>
           <VisitorsCard></VisitorsCard>
           <VideosCard></VideosCard>
            </div>
    )
}

export default ProfilePageSideBar;