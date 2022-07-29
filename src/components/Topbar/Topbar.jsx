import React from 'react';
import "./topbar.css";
import { NotificationsNone, MailOutline, SearchSharp } from '@material-ui/icons';


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                        
                    </span>
                </div>
                <div className="topRight">
                  
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <MailOutline />
                        <span className="topIconBadge">2</span>
                    </div>
                    <img src="http://slidesigma.nyc/templatemonster/react/foodtech/static/media/customer-1.41c0170d.jpg"
                        alt="avatar" className="topAvatar" />
                </div>
            </div>
        </div>
    );
}
