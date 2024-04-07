import React, { useEffect, useState } from 'react';
import Profile from './sample'
import img1 from '../image/th.jpg'
import Create from '../image/dashboard1.png'
import Mymeeting from '../image/dashboard2.png'
import Meeting from '../image/dashboard3.png'


export const AdminHome = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/getAlluser');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/deleteUser/${userId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      // Refresh user list after successful deletion
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:5000/updateUser/${editingUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingUser),
      });
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      // Refresh user list after successful update
      fetchUsers();
      setEditingUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleChange = (e) => {
    setEditingUser({ ...editingUser, [e.target.name]: e.target.value });
  };

  return (
    <>
  
    <div className='overflow-hidden bg-gradient-to-r flex flex-col items-center from-blue-500 to-green-500 w-[100vw]
    h-[100vh]'>
       

        <div className=' flex overflow-hidden flex-wrap'>
        <div className="w-[150px] h-[200px] p-10 bg-white rounded-xl m-20 ">
          <a href='/Meeting'>
            <img src={Create} alt='' className="w-full " />
            <h2 className="text-xl font-semibold mb-2">Create instant Meeting</h2>
            </a>
          </div>
          <a href='/calender'>
          <div className="w-[150px] h-[200px] rounded-xl p-10 bg-white m-20 ">
            <img src={Mymeeting} alt='' className="w-full mb-" />
            <h2 className="text-xl font-semibold mb-2">create Meeting schedule</h2>
           
          </div></a>
          <div className="w-[150px] h-[200px] rounded-xl p-10 bg-white m-20 ">
            <img src={Mymeeting} alt='' className="w-full mb-4" />
            <h2 className="text-xl font-semibold mb-2">Meeting schedule</h2>
           
          </div>
          <div className="w-[150px] h-[200px] rounded-xl p-10 bg-white m-20 ">
            <img src={Meeting} alt=''className="w-full mb-4" />
            <h2 className="text-xl font-semibold mb-2"> Meeting Histry</h2>
           
          </div><a href='/userdetails'>
          <div className="w-[150px] h-[200px] rounded-xl p-10 bg-white m-20 ">
            <img src={Meeting} alt=''className="w-full mb-4" />
            <h2 className="text-xl font-semibold mb-2"> User Details</h2>
           
          </div></a>
          </div>
    </div>
    </>
  );
};

export default AdminHome;
