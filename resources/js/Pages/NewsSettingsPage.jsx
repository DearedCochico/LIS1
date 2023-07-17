import React, { useState, useEffect } from 'react';
import CKEditor from 'react-ckeditor-component';
import AuthenticatedLayout from '@/Layouts/adminAuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SideBar from '../Components/adminSideBar';
import axios from 'axios';

const NewsSettingsPage = ({ auth }) => {
  const [news, setNews] = useState([]);
  const [editingNews, setEditingNews] = useState(null);
  const [newNews, setNewNews] = useState({
    title: '',
    content: '',
    publishDate: '',
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/news-settings');
        setNews(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);


//   const resetForm = () => {
//     setEditingNews(null);
//     setNewNews({
//       title: '',
//       content: '',
//       publishDate: '',
//     });
//   };

const createNews = async () => {
    try {
      const currentDate = new Date().toISOString().slice(0, 10);
      const response = await axios.post('http://127.0.0.1:8000/api/news-settings', {
        title: newNews.title,
        content: newNews.content,
        publish_date: currentDate, // Update the field name to 'publish_date'
      });
      setNews(prevNews => [...prevNews, response.data]);
      setNewNews({
        title: '',
        content: '',
        publishDate: '',
      });
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };



  // Update the updateNews() function:
  const updateNews = async () => {
    try {
      const currentDate = new Date().toISOString().slice(0, 10);
      await axios.put(`http://127.0.0.1:8000/api/news-settings/${editingNews.id}`, {
        ...newNews,
        publishDate: currentDate,
      });
      setNews(prevNews => {
        const updatedNews = prevNews.map((item) => {
          if (item.id === editingNews.id) {
            return { ...item, ...newNews };
          }
          return item;
        });
        return updatedNews;
      });
      setEditingNews(null); // Reset editingNews directly
      setNewNews({
        title: '',
        content: '',
        publishDate: '',
      });
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteNews = async (itemId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/news-settings/${itemId}`);
      setNews(news.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingNews) {
      updateNews();
    } else {
      createNews();
    }
  };


  const handleEdit = (item) => {
    setEditingNews(item);
    setNewNews(item);
    setShowModal(true);
  };

  const handleDelete = async (itemId) => {
    if (window.confirm('Are you sure you want to delete this news?')) {
      await deleteNews(itemId);
    }
  };

  const handleChange = (e) => {
    setNewNews({ ...newNews, [e.target.name]: e.target.value });
  };

  // Update the handleEditorChange function
  const handleEditorChange = (event) => {
    const content = event.editor.getData();
    setNewNews({ ...newNews, content });
  };

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Admin Dashboard" />
      {/* <SideBar /> */}

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
                  <td
                    className="py-2 px-4 border border-gray-500"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></td>
                  <td className="py-2 px-4 border border-gray-500">{item.publish_date}</td>
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
              <form onSubmit={handleSubmit}>
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
