import React from 'react';
import EmailListSetting from '../EmailListSetting/EmailListSetting';
import EmailType from '../EmailType/EmailType';
import './EmailList.css';

const EmailList = () => {
  return (
    <div className='emailList'>
      <EmailListSetting/>
      <EmailType/>
    </div>
  )
}

export default EmailList
