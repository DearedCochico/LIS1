import React from 'react';
import AuthenticatedLayout from '@/Layouts/adminAuthenticatedLayout';
import { Head } from '@inertiajs/react';
import SideBar from '../Components/adminSideBar';
// import NavLink from '@/Components/NavLink';
// import ResponsiveNavLink from '@/Components/ResponsiveNavLink';



export default function AdminDashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin Dashboard</h2>}
        >
            <Head title="Admin Dashboard" />

            {/* <div className="flex h-screen"> */}
      {/* Sidebar */}
      {/* <div className="w-1/4 bg-darkBlue text-white p-4">
        <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>
        <ul className="space-y-2">
          <li className="p-2 rounded-md hover:bg-gray-700">
          <a href="/user-management" className="">User Management</a>
          </li>

          <li className="p-2 rounded-md hover:bg-gray-700">Audit Trail</li>
          <li className="p-2 rounded-md hover:bg-gray-700">Particular Management</li>
          <li className="p-2 rounded-md hover:bg-gray-700">News Settings</li>
          <li className="p-2 rounded-md hover:bg-gray-700">Services Settings</li>
          <li className="p-2 rounded-md hover:bg-gray-700">Contact Us Settings</li>
          <li className="p-2 rounded-md hover:bg-gray-700">About Us Settings</li>
        </ul>
      </div> */}

      {/* <SideBar/> */}

      {/* Content */}
      <div className=" w-3/4 p-10">
        {/* Placeholder content */}
        <h1 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard!</h1>
        <p>Click on a menu item on the left to manage different settings.</p>
        {/* <img src={user.profilePicture} alt="Profile" /> */}
      {/* <p>{user.name}</p> */}
      </div>
    {/* </div> */}
        </AuthenticatedLayout>
    );
}
