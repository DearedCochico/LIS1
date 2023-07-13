import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/adminAuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SideBar from '../Components/adminSideBar';
import axios from 'axios';

const UserManagementPage = ({ auth }) => {
  const [users, setUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    profilePicture: '',
    birthDate: '',
    contactNumber: '',
    address: '',
    roleName: '',
  });

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const createUser = async () => {
    try {
      console.log('Creating user:', newUser); // Add this console.log statement
      const response = await axios.post('/users', newUser);
      setUsers([...users, response.data]);
      closeModal();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };


//   const createUser = async () => {
//     try {
//       const response = await axios.post('/users', {
//         name: 'John Doe',
//         email: 'johndoe@example.com',
//         password: 'password123',
//         address: '123 Street, City',
//         roleName: 'Admin',
//         profilePicture: 'path/to/profile-picture.jpg',
//         birthDate: '1990-01-01',
//         contactNumber: '1234567890',
//       });
//       console.log('New user created:', response.data);
//     } catch (error) {
//       console.error('Error creating user:', error);
//     }
//   };

//   const updateUser = async () => {
//     try {
//       await axios.put(`/users/${editingUser.id}`, newUser);
//       const updatedUsers = users.map((user) => {
//         if (user.id === editingUser.id) {
//           return { ...user, name: newUser.name, email: newUser.email };
//         }
//         return user;
//       });
//       setUsers(updatedUsers);
//       closeModal();
//     } catch (error) {
//       console.error('Error updating user:', error);
//     }
//   };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingUser(null);
    setNewUser({
      name: '',
      email: '',
      password: '',
      profilePicture: '',
      birthDate: '',
      contactNumber: '',
      address: '',
      roleName: '',
    });
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setNewUser({
      name: user.name,
      email: user.email,
      password: '',
      profilePicture: user.profilePicture,
      birthDate: user.birthDate || '',
      contactNumber: user.contactNumber,
      address: user.address || '',
      roleName: user.roleName,
    });
    openModal();
  };

  const handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await deleteUser(userId);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSave = async () => {
    if (editingUser) {
      // If editingUser is true, update the existing user
      try {
        const updatedUser = {
          ...editingUser,
          ...newUser
        };
        await axios.put(`/users/${editingUser.id}`, updatedUser);
        const updatedUsers = users.map((user) => {
          if (user.id === editingUser.id) {
            return { ...user, ...updatedUser };
          }
          return user;
        });
        setUsers(updatedUsers);
        closeModal();
      } catch (error) {
        console.error('Error updating user:', error);
      }
    } else {
      // If editingUser is false, create a new user
      try {
        await createUser(); // Call the createUser function here
        closeModal();
      } catch (error) {
        console.error('Error creating user:', error);
      }
    }
  };



  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Admin Dashboard" />
      <SideBar />
      <div className="p-4">
        <h1 className="text-2xl mb-4">User Management</h1>
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 text-sm border border-gray-300 rounded"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button
            className="px-2 py-1 ml-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={openModal}
          >
            Add New User
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-white">
            <thead>
              <tr>
                <th className="px-4 py-2 border bg-white">ID</th>
                <th className="px-4 py-2 border bg-white">Name</th>
                <th className="px-4 py-2 border bg-white">Email</th>
                <th className="px-4 py-2 border bg-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-4 py-2 border bg-white">{user.id}</td>
                  <td className="px-4 py-2 border bg-white">{user.name}</td>
                  <td className="px-4 py-2 border bg-white">{user.email}</td>
                  <td className="px-4 py-2 border bg-white">
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50"></div>
            <div className="relative w-full">
              <div className="bg-white rounded-lg shadow-lg p-4 mx-4 md:mx-auto md:max-w-sm lg:max-w-md">
                <h2 className="text-xl mb-4">{editingUser ? 'Edit User' : 'Add New User'}</h2>
                <div className="max-h-96 overflow-y-auto">
                <label className="block mb-2">
                Name:
                <input
                    type="text"
                    value={newUser.name || ''}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                />
                </label>

                <label className="block mb-2">
                Email:
                <input
                    type="email"
                    value={newUser.email || ''}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                />
                </label>

                <label className="block mb-2">
                Password:
                <input
                    type="password"
                    value={newUser.password || ''}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                />
                </label>

                <label className="block mb-2">
                Profile Picture:
                <input
                    type="file"
                    value={newUser.profilePicture || ''}
                    onChange={(e) => setNewUser({ ...newUser, profilePicture: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                />
                </label>

                <label className="block mb-2">
                Birth Date:
                <input
                    type="date"
                    value={newUser.birthDate || ''}
                    onChange={(e) => setNewUser({ ...newUser, birthDate: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                />
                </label>


                <label className="block mb-2">
                Contact Number:
                <input
                    type="text"
                    value={newUser.contactNumber || ''}
                    onChange={(e) => setNewUser({ ...newUser, contactNumber: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                />
                </label>

                <label className="block mb-2">
                Address:
                <input
                    type="text"
                    value={newUser.address || ''}
                    onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                />
                </label>

                <label className="block mb-2">
                Role Name:
                <select
                value={newUser.roleName || ''}
                onChange={(e) => setNewUser({ ...newUser, roleName: e.target.value })}
                className="border border-gray-300 rounded-lg p-2 w-full"
                >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Cashier">Cashier</option>
                <option value="Lab Tech">Lab Tech</option>
                </select>
                </label>

                {/* <label className="block mb-2">
                Profile Picture:
                <input
                    type="text"
                    value={newUser.profilePicture || ''}
                    onChange={(e) => setNewUser({ ...newUser, profilePicture: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                />
                </label> */}

                {/* <label className="block mb-2">
                Birth Date:
                <input
                    type="text"
                    value={newUser.birthDate || ''}
                    onChange={(e) => setNewUser({ ...newUser, birthDate: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                />
                </label>

                <label className="block mb-2">
                Contact Number:
                <input
                    type="text"
                    value={newUser.contactNumber || ''}
                    onChange={(e) => setNewUser({ ...newUser, contactNumber: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                />
                </label> */}
                </div>


                {/* <button onClick={handleAddUser} className="bg-blue-500 text-white rounded-lg px-4 py-2">
                Add User
                </button> */}

                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
};

export default UserManagementPage;
