import React from "react";
import "./VideosCard.scss";
import Images from "../../Images/Images"

function VideosCard() {
    return (
        <div className="video-card">
            <div className="video-title">
                <h5>YOU MAY LIKE THESE COURSES</h5>
            </div>
            <div className="video-group">
             <div className="video">
                <div className="video-img">
                <Images avatar src="https://picsum.photos/200/300" />
                </div>
                <div className="video-info">
                <h5>Video Name</h5>
                <h6>2156 viewers</h6>
                </div>
             </div>

             <div className="video">
                <div className="video-img">
                <Images avatar src="https://picsum.photos/200/300" />
                </div>
                <div className="video-info">
                <h5>Video Name</h5>
                <h6>2156 viewers</h6>
                </div>
             </div>

             <div className="video">
                <div className="video-img">
                <Images avatar src="https://picsum.photos/200/300" />
                </div>
                <div className="video-info">
                <h5>Video Name</h5>
                <h6>2156 viewers</h6>
                </div>
             </div>
            </div>
        </div>
    );
}

export default VideosCard;