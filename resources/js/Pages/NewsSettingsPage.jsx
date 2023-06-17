import React, { useState } from 'react';
import CKEditor from 'react-ckeditor-component';
import AuthenticatedLayout from '@/Layouts/adminAuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SideBar from '../Components/adminSideBar';

const NewsSettingsPage = ({ auth }) => {
  const [news, setNews] = useState([
    {
        id: 1,
        title: "News 1",
        content: "<p>This is the content of News 1.</p>",
        publishDate: "2023-06-01",
      },
      {
        id: 2,
        title: "News 2",
        content: "<p>This is the content of News 2.</p>",
        publishDate: "2023-06-03",
      },
      {
        id: 3,
        title: "News 3",
        content: "<p>This is the content of News 3.</p>",
        publishDate: "2023-06-05",
      },
      // Add more news items with their publish dates
    ]);

  const [editingNews, setEditingNews] = useState(null);
  const [newNews, setNewNews] = useState({
    title: '',
    content: '',
    publishDate: '',
  });
  const [showModal, setShowModal] = useState(false);

  const resetForm = () => {
    setEditingNews(null);
    setNewNews({
      title: '',
      content: '',
      publishDate: '',
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    const currentDate = new Date().toISOString().slice(0, 10);

    if (editingNews) {
      // Update existing news
      const updatedNews = news.map((item) =>
        item.id === editingNews.id ? { ...newNews, publishDate: currentDate, id: item.id } : item
      );
      setNews(updatedNews);
    } else {
      // Create new news
      const newId = Math.max(...news.map((item) => item.id)) + 1;
      const newNewsItem = { ...newNews, publishDate: currentDate, id: newId };
      setNews([...news, newNewsItem]);
    }

    resetForm();
    setShowModal(false);
  };

  const handleEdit = (item) => {
    setEditingNews(item);
    setNewNews(item);
    setShowModal(true);
  };

  const handleDelete = (itemId) => {
    setNews(news.filter((item) => item.id !== itemId));
  };

  const handleChange = (e) => {
    setNewNews({ ...newNews, [e.target.name]: e.target.value });
  };

  const handleEditorChange = (event) => {
    const content = event.editor.getData();
    setNewNews({ ...newNews, content });
  };

  return (

    <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin Dashboard</h2>}
        >
            <Head title="Admin Dashboard" />

            <SideBar/>

    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-4">News Settings</h1>

      <div className="flex justify-end mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowModal(true)}
        >
          Add News
        </button>
      </div>

      <div className="overflow-x-auto">
      <table className="w-full table-auto border border-gray-300 mt-4 bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border border-gray-500">Title</th>
            <th className="py-2 px-4 border border-gray-500">Content</th>
            <th className="py-2 px-4 border border-gray-500">Publish Date</th>
            <th className="py-2 px-4 border border-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {news.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border border-gray-500">{item.title}</td>
              <td className="py-2 px-4 border border-gray-500" dangerouslySetInnerHTML={{ __html: item.content }}></td>
              <td className="py-2 px-4 border border-gray-500">{item.publishDate}</td>
              <td className="py-2 px-4 border border-gray-500">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-2"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                  onClick={() => handleDelete(item.id)}
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
            <h2 className="text-2xl font-bold mb-4">News Editor</h2>
            <form onSubmit={handleSave}>
              <div className="mb-4">
                <label className="block mb-2">Title:</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  name="title"
                  value={newNews.title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Content:</label>
                <CKEditor
                  activeClass="editor"
                  content={newNews.content}
                  events={{ change: handleEditorChange }}
                />
              </div>
              {/* <div className="mb-4">
                <label className="block mb-2">Publish Date:</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  name="publishDate"
                  value={newNews.publishDate}
                  onChange={handleChange}
                />
              </div> */}
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

export default NewsSettingsPage;
