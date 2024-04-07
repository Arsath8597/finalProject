import React, { useState } from 'react';
import img1 from '../image/generic-user-icon-13.jpg'

const UserProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logged out');
  };
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";
  };

  return (
    <div className='flex justify-end'>
    <div className="relative inline-block text-left ml-40">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
          id="user-menu"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <img
            src={img1} // Path to your user profile icon
            alt="User Profile"
            className="h-5 w-5"
          />
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <div className="py-1" role="none">
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
            >
              Profile
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
            >
              Settings
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
              onClick={logOut}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div></div>
  );
};

export default UserProfileDropdown;
