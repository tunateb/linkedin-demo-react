import React from "react";
import "./VisitorsCard.scss";
import Images from "../../Images/Images"

function VisitorsCard() {
    return (
        <div className="visitors-card">
            <div className="visitorsCard-title">
                <h5>VISITORS</h5>
                <a href="#"><h5>VIEW ALL</h5></a>
            </div>
            <div className="visitorsCard-peopleGroup">
             <div className="visitorsCard-people">
                <div className="people-img">
                <Images circle avatar src="https://picsum.photos/200/300" />
                </div>
                <div className="people-info">
                <h5>User Name</h5>
                <h6>Job</h6>
                </div>
             </div>

             <div className="visitorsCard-people">
                <div className="people-img">
                <Images circle avatar src="https://picsum.photos/200/300" />
                </div>
                <div className="people-info">
                <h5>User Name</h5>
                <h6>Job</h6>
                </div>
             </div>

             <div className="visitorsCard-people">
                <div className="people-img">
                <Images circle avatar src="https://picsum.photos/200/300" />
                </div>
                <div className="people-info">
                <h5>User Name</h5>
                <h6>Job</h6>
                </div>
             </div>

             <div className="visitorsCard-people">
                <div className="people-img">
                <Images circle avatar src="https://picsum.photos/200/300" />
                </div>
                <div className="people-info">
                <h5>User Name</h5>
                <h6>Job</h6>
                </div>
             </div>

             <div className="visitorsCard-people">
                <div className="people-img">
                <Images circle avatar src="https://picsum.photos/200/300" />
                </div>
                <div className="people-info">
                <h5>User Name</h5>
                <h6>Job</h6>
                </div>
             </div>
            </div>
        </div>
    );
}

export default VisitorsCard;