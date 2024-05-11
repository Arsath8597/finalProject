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

  const handleJoinMeeting = (event, email, password) => {
    event.preventDefault(); 
  
    console.log('Joining meeting with ID:', email, 'and password:', password);
  
    window.location.href = `Meet?id=${email}&password=${password}`;
  };

  return (
    <div className='w-full h-full bg-gradient-to-br from-rose-400 to-white'>
      <div>
        <Navbar />
      </div>
      <div className=']'>
        <h1 className='text-transparent'>fdd</h1>
        <h2 className='font-bold text-3xl text-center mt-20 underline '>Meeting Schedule</h2>
        <div className='grid grid-cols-1 w-[100px sm:grid-cols-2 md:grid-cols-3 gap-4 px-8'>
  {dates.map(date => (
    <form className='mt-20 w-[200px' key={date._id} onSubmit={(event) => handleJoinMeeting(event, date.id, date.password)}>
      <div className=' rounded-lg shadow-3xl bg-white bg-opacity-20 backdrop-blur-lg shadow-3xl font-semibold text-xl p-4'>
      <ul>
  <li className='mb-4 text-3xl text-center underline'>{date.title}</li>
  <li className='mb-2 ml-5 bg-slate-500 py-2 rounded-xl text-center text-2xl shadow-2xl text-white'>{new Date(date.date).toLocaleDateString()},  {date.time}</li>
  <li className='mb-2 ml-5'></li>
  <li className='mb-2 ml-5'>Meeting ID: <p>{date.id}</p></li>
  <li className='mb-2 ml-5'>Meeting Password: <p>{date.password}</p></li>
  <button type='submit' className='bg-blue-600 flex items-center justify-center w-full hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline mt-4'>
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