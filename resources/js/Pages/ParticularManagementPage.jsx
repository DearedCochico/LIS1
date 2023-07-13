import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/adminAuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SideBar from '../Components/adminSideBar';
import axios from 'axios';

const ParticularManagement = ({ auth }) => {
  const [particulars, setParticulars] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingParticular, setEditingParticular] = useState(null);
  const [newParticular, setNewParticular] = useState({ name: '', description: '', price: 0 });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchParticulars();
  }, []);

  const fetchParticulars = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/particulars');
      setParticulars(response.data);
    } catch (error) {
      console.error('Error fetching particulars:', error);
    }
  };

  const createParticular = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/particulars', newParticular);
      setParticulars([...particulars, response.data]);
      closeModal();
    } catch (error) {
      console.error('Error creating particular:', error);
    }
  };

  const updateParticular = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/particulars/${editingParticular.id}`, newParticular);
      const updatedParticulars = particulars.map((particular) => {
        if (particular.id === editingParticular.id) {
          return { ...particular, name: newParticular.name, description: newParticular.description, price: newParticular.price };
        }
        return particular;
      });
      setParticulars(updatedParticulars);
      closeModal();
    } catch (error) {
      console.error('Error updating particular:', error);
    }
  };

  const deleteParticular = async (particularId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/particulars/${particularId}`);
      setParticulars(particulars.filter((particular) => particular.id !== particularId));
    } catch (error) {
      console.error('Error deleting particular:', error);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingParticular(null);
    setNewParticular({ name: '', description: '', price: 0 });
  };

  const handleEdit = (particular) => {
    setEditingParticular(particular);
    setNewParticular({ name: particular.name, description: particular.description, price: particular.price });
    openModal();
  };

  const handleDelete = async (particularId) => {
    if (window.confirm('Are you sure you want to delete this particular?')) {
      await deleteParticular(particularId);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredParticulars = particulars.filter((particular) =>
    particular.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSave = () => {
    if (editingParticular) {
      updateParticular();
    } else {
      createParticular();
    }
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Admin Dashboard" />
      <SideBar />
      <div className="p-4">
        <h1 className="text-2xl mb-4">Particular Management</h1>
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
            Add New Particular
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-white">
            <thead>
              <tr>
                <th className="px-4 py-2 border bg-white">ID</th>
                <th className="px-4 py-2 border bg-white">Name</th>
                <th className="px-4 py-2 border bg-white">Description</th>
                <th className="px-4 py-2 border bg-white">Price</th>
                <th className="px-4 py-2 border bg-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredParticulars.map((particular) => (
                <tr key={particular.id}>
                  <td className="px-4 py-2 border bg-white">{particular.id}</td>
                  <td className="px-4 py-2 border bg-white">{particular.name}</td>
                  <td className="px-4 py-2 border bg-white">{particular.description}</td>
                  <td className="px-4 py-2 border bg-white">{particular.price}</td>
                  <td className="px-4 py-2 border bg-white">
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => handleEdit(particular)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDelete(particular.id)}
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
                <h2 className="text-xl mb-4">{editingParticular ? 'Edit Particular' : 'Add New Particular'}</h2>
                <label className="block mb-4">
                  Name:
                  <input
                    type="text"
                    value={newParticular.name}
                    onChange={(e) => setNewParticular({ ...newParticular, name: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                </label>
                <label className="block mb-4">
                  Description:
                  <textarea
                    value={newParticular.description}
                    onChange={(e) => setNewParticular({ ...newParticular, description: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                </label>
                <label className="block mb-4">
                  Price:
                  <input
                    type="number"
                    value={newParticular.price}
                    onChange={(e) => setNewParticular({ ...newParticular, price: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                </label>
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

export default ParticularManagement;
