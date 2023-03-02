import React from 'react'
import './EmailType.css';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const EmailType = () => {
    return (
        <div className='emailType'>
            <div className='emailType-options emailType-options--active'>
                <InboxIcon />
                <p>Primary</p>
            </div>
            <div className='emailType-options'>
                <PeopleIcon />
                <p>Social</p>
            </div>
            <div className='emailType-options'>
                <LocalOfferIcon />
                <p>Promotions</p>
            </div>
        </div>
    )
}

export default EmailType
