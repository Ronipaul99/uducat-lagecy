import React, { useState } from 'react';
import './Header.css';
import logo from './logo2 1.png';
import Badge from '@mui/material/Badge';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import CancelIcon from '@mui/icons-material/Cancel';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useCookies } from 'react-cookie';

const Header = () => {
    const [User, setUser] = useCookies(['UserData']);

    const currencies = [
        {
            value: 'ALL',
            label: 'ALL',
        },
        {
            value: 'NEET',
            label: 'NEET',
        }
    ];

    const [active, setActive] = useState('options');

    const showNav = () => {
        setActive('options activeNavbar')
    };
    const closeNav = () => {
        setActive('options')
    }
    return (
        <div className='header'>
            <div className="logo">
                <img src={logo} alt="img" />
            </div>


            <div className={active}>
                <div onClick={closeNav} className='closeNavbar'>
                    < CancelIcon className='icon' fontSize='medium' />

                </div>
                <div className="search">
                    <TextField
                        id="outlined-select-currency"
                        select
                        defaultValue="ALL"
                        sx={{ width: "15ch" }}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <input type="text" placeholder='Search...' />
                    <SearchOutlinedIcon fontSize='large' className='icon' />
                </div>
                <div className="account">
                    <div className="icons">
                        <div className='icon1'>
                            <Badge color="primary" badgeContent={99}>
                                <NotificationsOutlinedIcon fontSize='large' />
                            </Badge>
                        </div>
                        <HelpOutlineOutlinedIcon fontSize='large' className='icon2' />
                    </div>
                    <div className="useraccount">
                        <Avatar className='avtar' sx={{ height: "50px", width: "50px" }}>{User.UserData.first_name.slice(0,1)}</Avatar>
                        <div className="uid">
                            <div className="user">
                                <h1>{User.UserData.first_name} {User.UserData.last_name}</h1>
                                <p>{User.UserData.email}</p>
                            </div>
                            <KeyboardArrowDownIcon fontSize='medium' />
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={showNav} className='toddleNavbar'>
                <MenuIcon className="icon" />
            </div>

        </div>
    )
}

export default Header;
