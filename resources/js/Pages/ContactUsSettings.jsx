import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/adminAuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SideBar from '../Components/adminSideBar';

const ContactUsSettingsPage = ({ auth }) => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'John Wick',
      email: 'joh@example.com',
      phone: '09934421452',
    },
    {
      id: 2,
      name: 'Jane Mary',
      email: 'jane@example.com',
      phone: '099424432113',
    },
    // Add more contacts as needed
  ]);

  const [editingContact, setEditingContact] = useState(null);
  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetForm = () => {
    setEditingContact(null);
    setNewContact({
      name: '',
      email: '',
      phone: '',
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (editingContact) {
      // Update existing contact
      const updatedContacts = contacts.map((contact) =>
        contact.id === editingContact.id ? { ...newContact, id: contact.id } : contact
      );
      setContacts(updatedContacts);
    } else {
      // Create new contact
      const newContactId = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;
      const newContactData = { ...newContact, id: newContactId };
      setContacts([...contacts, newContactData]);
    }

    resetForm();
    closeModal();
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
    setNewContact(contact);
    setIsModalOpen(true); // Open the modal when editing a contact
  };

  const handleDelete = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const openModal = () => {
    setEditingContact(null);
    setNewContact({
      name: '',
      email: '',
      phone: '',
    });
    setIsModalOpen(true); // Open the modal when adding a new contact
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (

        <AuthenticatedLayout
        user={auth.user}
        // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin Dashboard</h2>}
        >
        <Head title="Admin Dashboard" />

        <SideBar/>

    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us Settings</h1>

      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={openModal}
        >
          Add New Contact
        </button>
      </div>

      <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse border border-white">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-white border border-gray-500">Name</th>
            <th className="px-4 py-2 bg-white border border-gray-500">Email</th>
            <th className="px-4 py-2 bg-white border border-gray-500">Phone</th>
            <th className="px-4 py-2 bg-white border border-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td className="px-4 py-2 bg-white border border-gray-500">{contact.name}</td>
              <td className="px-4 py-2 bg-white border border-gray-500">{contact.email}</td>
              <td className="px-4 py-2 bg-white border border-gray-500">{contact.phone}</td>
              <td className="px-4 py-2 bg-white border border-gray-500">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleEdit(contact)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(contact.id)}
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
              <h2 className="text-xl mb-4">{editingContact ? 'Edit Contact' : 'Add New Contact'}</h2>
              <form onSubmit={handleSave}>
                <div className="mb-4">
                  <label className="block mb-2">Name:</label>
                  <input
                    type="text"
                    value={newContact.name}
                    onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Email:</label>
                  <input
                    type="email"
                    value={newContact.email}
                    onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Phone:</label>
                  <input
                    type="text"
                    value={newContact.phone}
                    onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                    className="border border-gray-300 rounded-lg p-2 w-full"
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

export default ContactUsSettingsPage;
