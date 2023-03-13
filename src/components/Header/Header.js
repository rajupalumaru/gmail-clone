import React from 'react';
import './Header.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar, IconButton } from '@mui/material';
import './Header.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';
import firebase from 'firebase';

const Header = () => {
    const user=useSelector(selectUser);
    console.log(user.photoURL);
    return (
        <div className='header'>
            <div className='header-left'>
                <IconButton>
                    <ReorderIcon />
                </IconButton>
                <img src='https://www.vectorlogo.zone/logos/gmail/gmail-ar21.png' alt='' />
            </div>
            <div className='header-middile'>
                <div className='search-mail'>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input type='text' placeholder='search mail' />
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </div>
            <div className='header-right'>
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <Avatar src={user.photoURL} onClick={()=>firebase.auth().signOut()} ></Avatar>
            </div>
        </div>
    )
}

export default Header
