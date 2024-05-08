import React, { useState, useEffect } from 'react';

const Meeting = () => {
  const [meetingId, setMeetingId] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Get the meeting ID and password from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const idFromUrl = urlParams.get('id');
    const passwordFromUrl = urlParams.get('password');
    
    // Set the meeting ID and password in the component state
    if (idFromUrl) {
      setMeetingId(idFromUrl);
    }
    if (passwordFromUrl) {
      setPassword(passwordFromUrl);
    }
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

  const handleJoinMeeting = (event) => {
    event.preventDefault();
    // Add your logic here to join the meeting using the provided meeting ID and password
    console.log('Joining meeting with ID:', meetingId, 'and password:', password);
    // For demonstration purposes, let's just display a message
    alert(`Joining meeting with ID: ${meetingId} and password: ${password}`);
  };

  return (
    <div className='w-full h-full bg-gradient-to-br from-rose-400 to-white'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold text-center mt-8'>Join Meeting</h1>
        <form onSubmit={handleJoinMeeting} className='max-w-md mx-auto mt-8'>
          <div className='mb-4'>
            <label htmlFor='meetingId' className='block text-gray-700 font-bold mb-2'>Meeting ID</label>
            <input
              type='text'
              id='meetingId'
              value={meetingId}
              onChange={(e) => setMeetingId(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter meeting ID'
              required
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='password' className='block text-gray-700 font-bold mb-2'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter password'
              required
            />
          </div>
          <button
            type='submit'
            className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Join Meeting
          </button>
        </form>
      </div>
    </div>
  );
};

export default Meeting;