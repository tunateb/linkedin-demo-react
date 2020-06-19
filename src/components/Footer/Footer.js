import React from "react";
import navLogo from "../../img/navLogo.png";
import textLogo from "../../img/textLogo.png";
import "./Footer.scss";
import { Link } from "react-router-dom";

import Buttons from "../Buttons/Buttons"

export default function Footer() {
    return (
        <div className="footer">

            <div className='container'>
              <div className="footer-grid">
              <div className='logos'>
                    <img className='logo1' src={navLogo} alt="linkedIn-logo-icon"></img>
                    <img className='logo2' src={textLogo} alt="linkedIn-logo-text"></img>
                </div>
                <div className='footer-nav'>
                    <ul>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/careers">Careers</Link>
                        <Link className="nav-link" to="/careers">Advertising</Link>
                        <Link className="nav-link" to="/careers">Small Business</Link>
                    </ul>
                    <ul>
                        <Link className="nav-link" to="/about">Talent Solutions</Link>
                        <Link className="nav-link" to="/careers">Marketing Solutions</Link>
                        <Link className="nav-link" to="/careers">Sales Solutions</Link>
                        <Link className="nav-link" to="/careers">Safery Center</Link>
                    </ul>
                    <ul>
                        <Link className="nav-link" to="/about">Community Guidelines</Link>
                        <Link className="nav-link" to="/careers">Privacy & Terms</Link>
                        <Link className="nav-link" to="/careers">Mobile App</Link>
                    </ul>
                </div>
                <div className='fast-access'>
                    <h6>Fast Access</h6>
                    <Buttons color='blue' footer>QUESTIONS ?</Buttons>
                    <Buttons color='transparent' footer>SETTINGS</Buttons>
                </div>

                <div className='language'>
                    <h6>Language</h6>
                    <select className="language-form" name="language" id="language">
                        <option className="option1" value="eng">English</option>
                        <option className="option2" value="tr">Türkçe</option>
                    </select>

                </div>
              </div>

            </div>
        </div>
    );
}