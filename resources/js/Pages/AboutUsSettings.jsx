import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CKEditor from 'react-ckeditor-component';
import AuthenticatedLayout from '@/Layouts/adminAuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SideBar from '../Components/adminSideBar';

const AboutUsSettingsPage = ({ auth }) => {
  const [aboutUsSections, setAboutUsSections] = useState([]);
  const [editingSection, setEditingSection] = useState(null);
  const [newSection, setNewSection] = useState({
    sectionTitle: '',
    sectionContent: '',
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchAboutUsSections();
  }, []);

  const fetchAboutUsSections = async () => {
    try {
      const response = await axios.get('/api/about-us-sections');
      setAboutUsSections(response.data);
    } catch (error) {
      console.error('Error fetching about us sections:', error);
    }
  };

  const resetForm = () => {
    setEditingSection(null);
    setNewSection({
      sectionTitle: '',
      sectionContent: '',
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (editingSection) {
      // Update existing about us section
      try {
        await axios.put(`/api/about-us-sections/${editingSection.id}`, newSection);
        fetchAboutUsSections();
      } catch (error) {
        console.error('Error updating about us section:', error);
      }
    } else {
      // Create new about us section
      try {
        await axios.post('/api/about-us-sections', newSection);
        fetchAboutUsSections();
      } catch (error) {
        console.error('Error creating about us section:', error);
      }
    }

    resetForm();
    setShowModal(false);
  };

  const handleEdit = (section) => {
    setEditingSection(section);
    setNewSection(section);
    setShowModal(true);
  };

  const handleDelete = async (sectionId) => {
    try {
      await axios.delete(`/api/about-us-sections/${sectionId}`);
      fetchAboutUsSections();
    } catch (error) {
      console.error('Error deleting about us section:', error);
    }
  };

  const handleChange = (e) => {
    setNewSection({ ...newSection, [e.target.name]: e.target.value });
  };

  const handleEditorChange = (event) => {
    const content = event.editor.getData();
    setNewSection({ ...newSection, sectionContent: content });
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Admin Dashboard" />

      {/* <SideBar /> */}

      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-4">About Us Settings</h1>

        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowModal(true)}
          >
            Add Section
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-300 mt-4 bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border border-gray-500">Section Title</th>
                <th className="py-2 px-4 border border-gray-500">Section Content</th>
                <th className="py-2 px-4 border border-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {aboutUsSections.map((section) => (
                <tr key={section.id}>
                  <td className="py-2 px-4 border border-gray-500">{section.sectionTitle}</td>
                  <td
                    className="py-2 px-4 border border-gray-500"
                    dangerouslySetInnerHTML={{ __html: section.sectionContent }}
                  ></td>
                  <td className="py-2 px-4 border border-gray-500">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-2"
                      onClick={() => handleEdit(section)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                      onClick={() => handleDelete(section.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
            <div className="bg-white rounded-lg p-8 w-full max-w-3xl relative">
              <h2 className="text-2xl font-bold mb-4">Section Editor</h2>
              <form onSubmit={handleSave}>
                <div className="mb-4">
                  <label className="block mb-2">Section Title:</label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                    name="sectionTitle"
                    value={newSection.sectionTitle}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Section Content:</label>
                  <CKEditor
                    activeClass="editor"
                    content={newSection.sectionContent}
                    events={{ change: handleEditorChange }}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AuthenticatedLayout>
  );
};

export default AboutUsSettingsPage;
