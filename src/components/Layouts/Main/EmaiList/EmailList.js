import React, { useEffect, useState } from 'react';
import db from '../../../../firebase';
import EmailBody from '../EmailBody/EmailBody';
import EmailListSetting from '../EmailListSetting/EmailListSetting';
import EmailType from '../EmailType/EmailType';
import './EmailList.css';

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    db.collection('emails').onSnapshot(snapshot => {
      setEmails(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()

      })))
    })

  }, [])
  console.log("emails", emails);

  return (
    <div className='emailList'>
      <EmailListSetting />
      <EmailType />
      {
        emails.map(({ id, data }) => {
          const date = new Date(data.timestamp.seconds * 1000 + data.timestamp.nanoseconds / 100000);
          return <EmailBody key={id} name={data.fromName} email={data.from} subject={data.subject}
            message={data.message} time={date.toLocaleTimeString()} />
        })
      }
    </div>
  )
}

export default EmailList
