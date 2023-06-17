import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/adminAuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SideBar from '../Components/adminSideBar';
import CKEditor from 'react-ckeditor-component';

const ServicesSettingsPage = ({ auth }) => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: 'Service 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Service 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Add more services as needed
  ]);

  const [editingService, setEditingService] = useState(null);
  const [newService, setNewService] = useState({
    title: '',
    description: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetForm = () => {
    setEditingService(null);
    setNewService({
      title: '',
      description: '',
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (editingService) {
      // Update existing service
      const updatedServices = services.map((service) =>
        service.id === editingService.id ? { ...newService, id: service.id } : service
      );
      setServices(updatedServices);
    } else {
      // Create new service
      const newServiceId = services.length > 0 ? services[services.length - 1].id + 1 : 1;
      const newServiceData = { ...newService, id: newServiceId };
      setServices([...services, newServiceData]);
    }

    resetForm();
    closeModal();
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setNewService(service);
    setIsModalOpen(true); // Open the modal when editing a service
  };

  const handleDelete = (serviceId) => {
    setServices(services.filter((service) => service.id !== serviceId));
  };

  const openModal = () => {
    setEditingService(null);
    setNewService({
      title: '',
      description: '',
    });
    setIsModalOpen(true); // Open the modal when adding a new service
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Admin Dashboard" />

      <SideBar />

      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4">Services Settings</h1>

        <div className="flex justify-end mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={openModal}
          >
            Add New Service
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-white">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-white border border-gray-500">Title</th>
                <th className="px-4 py-2 bg-white border border-gray-500">Description</th>
                <th className="px-4 py-2 bg-white border border-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id}>
                  <td className="px-4 py-2 bg-white border border-gray-500">{service.title}</td>
                  <td className="px-4 py-2 bg-white border border-gray-500">{service.description}</td>
                  <td className="px-4 py-2 bg-white border border-gray-500">
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => handleEdit(service)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDelete(service.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50"></div>
            <div className="relative w-full max-w-sm mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h2 className="text-xl mb-4">
                  {editingService ? 'Edit Service' : 'Add New Service'}
                </h2>
                <form onSubmit={handleSave}>
                  <div className="mb-4">
                    <label className="block mb-2">Title:</label>
                    <input
                      type="text"
                      value={newService.title}
                      onChange={(e) =>
                        setNewService({ ...newService, title: e.target.value })
                      }
                      className="border border-gray-300 rounded-lg p-2 w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Description:</label>
                    <CKEditor
                      activeClass="p10"
                      content={newService.description}
                      events={{
                        change: (e) =>
                          setNewService({ ...newService, description: e.editor.getData() }),
                      }}
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                      type="submit"
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
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
};

export default ServicesSettingsPage;
