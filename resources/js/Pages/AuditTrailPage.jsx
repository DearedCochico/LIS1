import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/adminAuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SideBar from '../Components/adminSideBar';
import axios from 'axios';

const AuditTrail = ({ auth }) => {
  const [auditTrailLogs, setAuditTrailLogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('id');


  useEffect(() => {
    fetchAuditTrailLogs();
  }, []);

  const fetchAuditTrailLogs = async () => {
    try {
      const response = await axios.get('/api/audit-trail-logs'); // Replace with your API endpoint
      setAuditTrailLogs(response.data);
    } catch (error) {
      console.error('Error fetching audit trail logs:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  const sortedLogs = auditTrailLogs.sort((a, b) => {
    if (sortOption === 'id') {
      return a.id - b.id;
    } else if (sortOption === 'user') {
      return a.user.localeCompare(b.user);
    } else if (sortOption === 'department') {
      return a.department.localeCompare(b.department);
    } else if (sortOption === 'action') {
      return a.action.localeCompare(b.action);
    } else if (sortOption === 'timestamp') {
      return new Date(a.timestamp) - new Date(b.timestamp);
    }
  });

  const filteredLogs = sortedLogs.filter((log) =>
  log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
  log.department.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Admin Dashboard" />
      {/* <SideBar /> */}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Audit Trail</h1>
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 text-sm border border-gray-300 rounded"
            value={searchTerm}
            onChange={handleSearch}
          />
          <select
            className="px-2 py-1 text-sm border border-gray-300 rounded"
            value={sortOption}
            onChange={handleSort}
          >
            <option value="id">Sort by ID</option>
            <option value="user">Sort by User</option>
            <option value="department">Sort by Department</option>
            <option value="action">Sort by Action</option>
            <option value="timestamp">Sort by Timestamp</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border border-black">ID</th>
                <th className="py-2 px-4 border border-black">User</th>
                <th className="py-2 px-4 border border-black">Department</th>
                <th className="py-2 px-4 border border-black">Action</th>
                <th className="py-2 px-4 border border-black">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {filteredLogs.map((log) => (
                <tr key={log.id}>
                  <td className="py-2 px-4 border border-black">{log.id}</td>
                  <td className="py-2 px-4 border border-black">{log.user}</td>
                  <td className="py-2 px-4 border border-black">{log.department}</td>
                  <td className="py-2 px-4 border border-black">{log.action}</td>
                  <td className="py-2 px-4 border border-black">{log.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default AuditTrail;
