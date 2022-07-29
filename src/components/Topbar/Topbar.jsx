import React from 'react';
import "./topbar.scss";



export default function Topbar() {
    return (
        <div className="topbar">
        {/* <div className="topLeft">
            <img src="../assets/Group 537.png" alt="navbarImage1" className="navbarImage1"/>
        </div> */}
        <div className="topbarWrapper">
        <div className="navbar-brand1">MONITER</div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <button type="button" class="btn btn-secondary">MESSAGE</button> 
                </div>
                </div>
                <img src="../assets/Group 323.png"  className='topAvatar' alt="avatar"  />
            </div>
        </div>
    
    );
}
