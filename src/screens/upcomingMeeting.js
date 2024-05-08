import React, { useState, useEffect } from 'react';
import Navbar from '../userHome/Navbar';

const DateList = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetch('http://localhost:5000/api/dates', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setDates(data);
      })
      .catch(error => {
        console.error('Error fetching dates:', error);
    
      });
  }, []); 

  const handleJoinMeeting = (event, meetingId, password) => {
    event.preventDefault(); 
  
    console.log('Joining meeting with ID:', meetingId, 'and password:', password);
  
    window.location.href = `Meet?id=${meetingId}&password=${password}`;
  };

  return (
    <div className='w-full h-full bg-gradient-to-br from-rose-400 to-white'>
      <div>
        <Navbar />
      </div>
      <div>
        <h1 className='text-transparent'>fdd</h1>
        <h2 className='font-bold text-3xl text-center mt-20 '>Meeting Schedule</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-8'>
  {dates.map(date => (
    <form className='mt-20' key={date._id} onSubmit={(event) => handleJoinMeeting(event, date.id, date.password)}>
      <div className=' rounded-lg shadow-3xl bg-white bg-opacity-20 backdrop-blur-lg shadow-3xl font-semibold text-xl p-4'>
        <ul>
          <li className='mb-2 text-3xl'>{date.title}</li>
          <li className='mb-2'>{date.date}</li>
          <li className='mb-2'>{date.time}</li>
          <li className='mb-2'>Meeting ID: {date.id}</li>
          <li className='mb-2'>Meeting Password: {date.password}</li>
          <button type='submit' className='bg-blue-600 flex items-center justify-center w-full  hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline mt-4'>
            Join Meeting
          </button>
        </ul>
      </div>
    </form>
  ))}
</div>
      </div>
    </div>
  );
};

export default DateList;