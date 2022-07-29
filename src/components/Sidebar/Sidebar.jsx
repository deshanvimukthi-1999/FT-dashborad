import "./sidebar.css";
import {
   List, Receipt
} from '@material-ui/icons';
import { Link } from "react-router-dom";
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DomainIcon from '@material-ui/icons/Domain';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import FaceIcon from '@material-ui/icons/Face';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"><DriveEtaIcon />Vehicle</h3>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"><DomainIcon />Department</h3>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle"><List />Section</h3>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle"><Receipt />Supplires</h3>
          <ul className="sidebarList">
            <Link to="/nopage" className="link">
              <li className="sidebarListItem">
                Invoice Detail
              </li>
            </Link>
        </ul>
       </div> 
       <div className="sidebarMenu">
          <h3 className="sidebarTitle"><AccountTreeIcon />Project</h3>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"><FaceIcon  />Driver</h3>
        </div>

      </div>
    </div>

  );
}