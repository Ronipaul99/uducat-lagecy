import React from 'react'
import './Sidebar.css';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';

const Sidebar = () => {
  return (
    <div className='main'>
      <div className="li">
        <li><button><WidgetsOutlinedIcon fontSize='medium' />Dashboard</button></li>
        <li><button> <CreateNewFolderOutlinedIcon fontSize='medium' />Create Courses</button></li>
        <li><button><DateRangeIcon fontSize='medium' />Schedule</button></li>
        <li><button>< TaskOutlinedIcon fontSize='medium' />Documents</button></li>
        <li><button>< PeopleOutlineOutlinedIcon fontSize='medium' />Account</button></li>
      </div>
    </div>
  )
}

export default Sidebar;
