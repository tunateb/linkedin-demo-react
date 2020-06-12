import React,{ Component, useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "../../img/navLogo.png";
import "./Navbar.scss";
import Images from "../../components/Images/Images";


class Navbar extends Component {

  render() {
    let _showLink =  true;
    return (
      <div className="navbar">
        <div className="navbar-brand">
          <img className="brand-img" src={navLogo} />
        </div>
        <div className="nav-links">
          <Link className="nav-link" to="/">
            <i className="fas fa-home" />
            <span>HomePage</span>
          </Link>
          <Link className="nav-link" to="/user">
            <i className="far fa-user" />
            <span>User list</span>
          </Link>
          <Link style={{ display: _showLink ? "" : "none" }} className="nav-link" to="/post">
            <i className="far fa-edit"></i>
            <span>POSTS</span>
          </Link>
          <Link style={{ display: _showLink  ? "" : "none" }} className="nav-link" to="/user">
            <i className="far fa-clipboard"></i>
            <span>TODOS</span>
          </Link>
        </div>

        <div className="search">
          <form>
            <button type="submit">
              <i className="fa fa-search" />
            </button>
            <input type="text" placeholder="Search" name="search2" />
          </form>
        </div>
        <div className="nav-userCard">
          <Images avatar circle src="https://picsum.photos/200/300" />
          <div className="card-content">
            <div className="card-title">
              <h4>NAME</h4>
              <p>YOU</p>
            </div>
            <div className="card-info">
              <h4>549 views today</h4>
              <p>32+</p>
            </div>
          </div>
        </div>
        <div className="nav-links">
          <Link className="nav-link" to="/">
            <i className="fas fa-ellipsis-h"></i>
            <span>OTHER</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;