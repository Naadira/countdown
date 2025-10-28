import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';

const Birthday = ({ name, day, month }) => {
  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    isItBday: false,
  });

  if (name === undefined || day === undefined || month === undefined) {
    name = 'My Irfee';
    month = 10;
    day = 4;
  }

  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      let birthdayDate = new Date(currentYear, month - 1, day);

      // Check if it's birthday
      if (
        now.getDate() === birthdayDate.getDate() &&
        now.getMonth() === birthdayDate.getMonth()
      ) {
        setState({
          seconds: 0,
          hours: 0,
          minutes: 0,
          days: 0,
          isItBday: true,
        });
        clearInterval(interval);
        return;
      }

      // Countdown
      const timeRemaining = birthdayDate.getTime() - now.getTime();
      if (timeRemaining <= 0) {
        setState({
          seconds: 0,
          hours: 0,
          minutes: 0,
          days: 0,
          isItBday: true,
        });
        clearInterval(interval);
        return;
      }

      let seconds = Math.floor(timeRemaining / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);

      seconds %= 60;
      minutes %= 60;
      hours %= 24;

      setState({
        seconds,
        minutes,
        hours,
        days,
        isItBday: false,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentYear, day, month]);

  // const monthNames = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'November',
  //   'December',
  // ];

  // const birth = new Date(currentYear, month - 1, day);
  // const monthBday = monthNames[birth.getMonth()];

  return (
    <div className="page">
      {/* Show countdown or wish dynamically */}
      <Countdown countdownData={state} name={name} />

      {/* Only show birthdate if it's not birthday */}
    
    </div>
  );
};

export default Birthday;
