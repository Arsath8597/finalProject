import React, { useEffect, useState } from 'react';
import Profile from './sample'
import img1 from '../image/th.jpg'
import Create from '../image/dashboard1.png'
import Mymeeting from '../image/dashboard2.png'
import Meeting from '../image/dashboard3.png'


export const Userdetails = () => {
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
    <div className='bg-gradient-to-r from-blue-500 to-green-500 w-[100vw]
    h-[100vh]'>
       
        

<div>
  <h1>User List</h1>
  <table className="table-auto">
    <thead>
      <tr>
        <th className="px-4 py-2">First Name</th>
        <th className="px-4 py-2">Last Name</th>
        <th className="px-4 py-2">Email</th>
        <th className="px-4 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr key={user._id}>
          <td className="border px-4 py-2">
            {editingUser && editingUser._id === user._id ? (
              <input
                type="text"
                name="fname"
                value={editingUser.fname}
                onChange={handleChange}
              />
            ) : (
              user.fname
            )}
          </td>
          <td className="border px-4 py-2">
            {editingUser && editingUser._id === user._id ? (
              <input
                type="text"
                name="lname"
                value={editingUser.lname}
                onChange={handleChange}
              />
            ) : (
              user.lname
            )}
          </td>
          <td className="border px-4 py-2">
            {editingUser && editingUser._id === user._id ? (
              <input
                type="text"
                name="email"
                value={editingUser.email}
                onChange={handleChange}
              />
            ) : (
              user.email
            )}
          </td>
          <td className="border px-4 py-2">
            {editingUser && editingUser._id === user._id ? (
              <button onClick={handleSave}>Save</button>
            ) : (
              <>
                <button className='bg-black text-red-50 px-4 py-2 mr-4 rounded-xl' onClick={() => handleEdit(user)}>Edit</button>
                <button className='bg-red-400 text-red-50 px-4 py-2 mr-4 rounded-xl' onClick={() => handleDelete(user._id)}>Delete</button>
              </>
            )}
          </td>
          
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  )
}

export default Userdetails