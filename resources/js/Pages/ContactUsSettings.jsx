import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/adminAuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SideBar from '../Components/adminSideBar';

const ContactUsSettingsPage = ({ auth }) => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [newContact, setNewContact] = useState({
    Type: '',
    Value: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('/api/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const resetForm = () => {
    setEditingContact(null);
    setNewContact({
      Type: '',
      Value: '',
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const updatedContact = {
      ...newContact,
      lastUpdated: new Date().toISOString().split('T')[0],
    };

    if (editingContact) {
      // Update existing contact
      try {
        await axios.put(`/api/contacts/${editingContact.id}`, updatedContact);
        fetchContacts();
      } catch (error) {
        console.error('Error updating contact:', error);
      }
    } else {
      // Create new contact
      try {
        await axios.post('/api/contacts', updatedContact);
        fetchContacts();
      } catch (error) {
        console.error('Error creating contact:', error);
      }
    }

    resetForm();
    closeModal();
  };


  const handleEdit = (contact) => {
    setEditingContact(contact);
    setNewContact({ ...contact });
    setIsModalOpen(true);
  };


  const handleDelete = async (contactId) => {
    try {
      await axios.delete(`/api/contacts/${contactId}`);
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const openModal = () => {
    setEditingContact(null);
    setNewContact({
      Type: '',
      Value: '',
      lastUpdated: '',
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Admin Dashboard" />
      {/* <SideBar /> */}

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
                <th className="px-4 py-2 bg-white border border-gray-500">Type</th>
                <th className="px-4 py-2 bg-white border border-gray-500">Value</th>
                <th className="px-4 py-2 bg-white border border-gray-500">Last Updated</th>
                <th className="px-4 py-2 bg-white border border-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td className="px-4 py-2 bg-white border border-gray-500">{contact.Type}</td>
                  <td className="px-4 py-2 bg-white border border-gray-500">{contact.Value}</td>
                  <td className="px-4 py-2 bg-white border border-gray-500">{contact.lastUpdated}</td>
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
                <label className="block mb-2">Type:</label>
                <input
                type="text"
                value={newContact.Type}
                onChange={(e) => setNewContact({ ...newContact, Type: e.target.value })}
                className="border border-gray-300 rounded-lg p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Value:</label>
                <input
                type="text"
                value={newContact.Value}
                onChange={(e) => setNewContact({ ...newContact, Value: e.target.value })}
                className="border border-gray-300 rounded-lg p-2 w-full"
                />
            </div>
            <div className="flex justify-end">
                <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                type="submit"
                >
                {editingContact ? 'Update' : 'Add'}
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
