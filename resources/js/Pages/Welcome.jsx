import React from 'react';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  return (
    <>
      <Head title="Welcome to the Laboratory Information System" />
      <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-blue-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
        <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
          {auth.user ? (
            <Link
              href={route('admin-dashboard')}
              className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href={route('login')}
                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
              >
                Log in
              </Link>

              <Link
                href={route('register')}
                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <div className="max-w-7xl mx-auto p-6 lg:p-8">
          <div className="flex justify-center">
            {/* Replace the SVG and other content with your LIS welcome page content */}
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Welcome to the Laboratory Information System!
            </h1>
          </div>

          {/* Add additional content specific to your LIS */}
          <div className="mt-8">
            <p className="text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat augue in
              sollicitudin lacinia. Fusce a nunc quis eros ultricies euismod vitae non neque.
              Nulla facilisi. Aenean ullamcorper ante nec orci tincidunt, vitae consequat sapien
              gravida. Phasellus tristique fringilla tellus, id dapibus mi. Nunc non posuere ipsum.
              Vivamus volutpat varius massa, sit amet scelerisque nunc iaculis at. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam cursus
              faucibus sapien, id pulvinar enim dapibus a. Curabitur sit amet urna eu lectus
              efficitur posuere.
            </p>
          </div>

          {/* Add more sections or components as needed */}


        </div>
      </div>
    </>
  );
}

