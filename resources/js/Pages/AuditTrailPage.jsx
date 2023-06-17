import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/adminAuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SideBar from '../Components/adminSideBar';

const AuditTrail = ({ auth }) => {

  const [auditTrailLogs, setAuditTrailLogs] = useState([
    { id: 1, user: 'John Wick', action: 'Login', timestamp: '2022-01-01 10:30:00' },
    { id: 2, user: 'Jomar Valenzuela', action: 'Nagsurrender', timestamp: '2023-06-09 10:00:00' },
    { id: 3, user: 'Jonh Paul', action: 'Update Settings', timestamp: '2022-01-03 09:45:00' },
  ]);

  return (

    <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin Dashboard</h2>}
        >
            <Head title="Admin Dashboard" />

            <SideBar />

            <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Audit Trail</h1>
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
            {auditTrailLogs.map((log) => (
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
