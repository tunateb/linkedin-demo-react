import React from "react";
import "./Dashboard.scss";

function UserListCard() {
    return (
        <div className="dashboard-card">
            <div className="dashboard-title">
                <h5>YOUR DASHBOARD</h5>
                <a href="#"><h5>GO TO STATS</h5></a>
            </div>
            <div className="dashboard-numbers">
                <div className="views-today">
                    <h1>367</h1>
                    <h6>views today</h6>
                </div>
                <div className="posts-views">
                    <h1>15</h1>
                    <h6>posts views</h6>
                </div>
                <div className="search-appereances">
                    <h1>9</h1>
                    <h6>search appereances</h6>
                </div>
            </div>
        </div>
    );
}

export default UserListCard;
