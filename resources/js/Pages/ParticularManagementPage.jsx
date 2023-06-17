import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/adminAuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SideBar from '../Components/adminSideBar';

const ParticularManagement = ({ auth }) => {
  const [particulars, setParticulars] = useState([
    { id: 1, name: 'Particular 1', description: 'Description 1', price: 10.99 },
    { id: 2, name: 'Particular 2', description: 'Description 2', price: 19.99 },
    { id: 3, name: 'Particular 3', description: 'Description 3', price: 5.99 },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingParticular, setEditingParticular] = useState(null);
  const [newParticular, setNewParticular] = useState({ name: '', description: '', price: 0 });
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleDelete = (particularId) => {
    setParticulars(particulars.filter((particular) => particular.id !== particularId));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the particular list based on the search term
  const filteredParticulars = particulars.filter((particular) =>
    particular.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSave = () => {
    if (editingParticular) {
      // Update particular
      const updatedParticulars = particulars.map((particular) => {
        if (particular.id === editingParticular.id) {
          return { ...particular, name: newParticular.name, description: newParticular.description, price: newParticular.price };
        }
        return particular;
      });
      setParticulars(updatedParticulars);
    } else {
      // Create new particular
      const newParticularId = Math.max(...particulars.map((particular) => particular.id)) + 1;
      const newParticularData = { ...newParticular, id: newParticularId };
      setParticulars([...particulars, newParticularData]);
    }

    closeModal();
  };



  return (

    <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin Dashboard</h2>}
        >
            <Head title="Admin Dashboard" />

            <SideBar/>

    <div className="p-4">
      <h1 className="text-2xl mb-4">Particular Management</h1>

      {/* <div className="flex justify-end mb-4">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={openModal}
      >
        Add New Particular
      </button>
    </div>

    <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div> */}

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
          {particulars.map((particular) => (
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
          {/* <div
            className="fixed inset-0 bg-black opacity-50"

          ></div> */}
          </div>
        </div>
      )}
    </div>

    </AuthenticatedLayout>
  );
};

export default ParticularManagement;
