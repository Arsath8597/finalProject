import React, { useState } from 'react';

const PopUp = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>
      <div className="bg-white p-8 rounded-lg shadow-xl z-50">
        <h2 className="text-2xl font-bold mb-4">User Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
            <input className="border border-gray-300 rounded-md px-4 py-2 w-full" type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="border border-gray-300 rounded-md px-4 py-2 w-full" type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input className="border border-gray-300 rounded-md px-4 py-2 w-full" type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
        </form>
        <button onClick={onClose} className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-md">Close</button>
      </div>
    </div>
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
      <button onClick={togglePopUp} className="px-4 py-2 bg-blue-500 text-white rounded-md">Open Pop-up</button>
      <PopUp isOpen={isOpen} onClose={togglePopUp} />
    </div>
  );
};

export default App;