import { IconButton, Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react';
import './EmailDetails.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedMail } from '../../../redux/mailSilce';

const EmailDetail = () => {

    const [data,setData]=useState('');
    const mail = useSelector(selectedMail);

    useEffect(()=>{
        setData(mail);
    },[data])

    console.log(data,'data');

    const history = useHistory();

    return (
        <div className='email-deatils'>
            <div className='emailList-Settings'>
                <div className='emailList-settingsLeft'>
                    <IconButton>
                        <ArrowBackIcon onClick={() => history.push('/')} />
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className='emailList-settingsRight'>
                    <p>1-50 of 10,234</p>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
            </div>
            <div className='emailDetail-message'>
                <div className='emailDetails-header'>
                    <div className='emailDetails-headerLeft'>
                        <h4>{data.subject}</h4>
                        <LabelImportantIcon />

                    </div>
                    <div className='emailDetails-headerRight'>
                        <IconButton>
                            <LocalPrintshopIcon />
                        </IconButton>
                        <IconButton>
                            <LaunchIcon />
                        </IconButton>
                    </div>
                </div>
                <div className='emailDetails-middleHeader'>
                    <div className='emailDetails-middleHeaderLeft'>
                        <IconButton>
                            <Avatar />
                        </IconButton>
                        <h4>{data.name}</h4>
                        <p>{data.email}</p>
                       

                    </div>
                    <div className='emailDetails-middleHeaderRight'>
                        <p>{data.time}</p>
                        <IconButton>
                            <StarIcon />
                        </IconButton>
                        <IconButton>
                            <ReplyIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>

                </div>
                <div className='emaildetails-body'>
                    <p>{data.message}</p>
                </div>
            </div>

        </div>
    )
}

export default EmailDetail
