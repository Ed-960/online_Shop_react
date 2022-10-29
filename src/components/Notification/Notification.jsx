import React, { useEffect, useState } from "react";
import './notification.css';
import { MdDownloadDone } from 'react-icons/md';

const Notification = (props) => {
   const [exit, setExit] = useState(false);
   const [width, setWidth] = useState(0);
   const [intervalId, setntervalId] = useState(null);

   const handleStartTimer = () => {
      const id = setInterval(() => {
         setWidth((prev) => {
            if (prev < 100) {
               return prev + 0.5
            } else {
               clearInterval(id);
               return prev;
            }
         })
      }, 20);
      setntervalId(id);
   };

   const handlePauseTimer = () => {
      clearInterval(intervalId)
   };

   const handleCloseNotification = () => {
      handlePauseTimer();
      setExit(true);
      setTimeout(() => {
         props.dispatch({
            type: 'REMOVE_NOTIFICATION',
            id: props.id
         })
      }, 400)
   }

   useEffect(() => {
      if (width === 100) {
         handleCloseNotification();
      }
   })

   useEffect(() => {
      handleStartTimer();
   }, [])

   return (
      <div onMouseEnter={handlePauseTimer} onMouseLeave={handleStartTimer} className={`notification-item ${props.type === 'SUCCESS' ? 'success' : 'error'
         } ${exit ? 'exit' : ''}`}>
         <p>{props.message} <MdDownloadDone
         /></p>
         <div className={'bar'} style={{ width: `${width}%` }}></div>
      </div>

   )
}

export default Notification;