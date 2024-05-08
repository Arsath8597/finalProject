import React, { useState } from 'react';

const App = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/dates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, time }),
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      const data = await response.json();
      console.log('Date created:', data);
      setSuccess(true);
      setDate('');
      setTime('');
      setError(null);
    } catch (err) {
      console.error('Error creating date:', err.message);
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Create Date</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p>Error: {error}</p>}
      {success && <p>Date created successfully!</p>}
    </div>
  );
};

export default App;