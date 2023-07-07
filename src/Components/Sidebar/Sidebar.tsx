import React from 'react'
import './Sidebar.css';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import { useNavigate } from 'react-router';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='main'>
      <div className="li">
        <li><button onClick={() => navigate("/")}><WidgetsOutlinedIcon fontSize='medium' />Dashboard</button></li>
        <li><button onClick={() => navigate("/create-course")}>  <CreateNewFolderOutlinedIcon fontSize='medium' />Create Courses</button></li>
        <li><button onClick={() => navigate("/schedule")}><DateRangeIcon fontSize='medium' />Schedule</button></li>
        <li><button onClick={() => navigate("/documents")}>< TaskOutlinedIcon fontSize='medium' />Documents</button></li>
        <li><button onClick={() => navigate("/account")}>< PeopleOutlineOutlinedIcon fontSize='medium' />Account</button></li>
      </div>
    </div>
  )
}

export default Sidebar;
