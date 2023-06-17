import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolderTree, faMicroscope, faNewspaper, faHandshake, faAddressBook, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';


const Sidebar = ({}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { url } = usePage()
    const { user } = usePage().props;

    // if (!user) {
    //     // Render loading state or return null
    //     return <div>Loading...</div>;
    //   }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


  return (
    <div className="lg:w-64 bg-darkBlue text-white h-screen fixed top-0 left-0 lg:overflow-y-auto">
        {/* Hamburger Menu */}
        <div className="lg:hidden p-4">
        <div className={`menu-icon ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

            {/* <button
            className="text-white focus:outline-none"
            onClick={toggleSidebar}
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
            >
                <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
            </button> */}
        </div>
      {/* Sidebar Content */}
      <div
        className={`${
          isSidebarOpen ? 'block' : 'hidden'
        } lg:block p-4 lg:py-8`}
      >
        <Link href={route('admin-dashboard')}>
        <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">Admin Dashboard</h1>
        </Link>

        {/* <img src={user.profilePicture} alt="Profile" />
      <p>{user.name}</p> */}

      {/* {user.profilePicture && <img src={user.profilePicture} alt="Profile" />} */}
      {/* {user.name && <p>{user.name}</p>} */}
{/* <div>
      {user && (
        <div>
          <h2>{user.name}</h2>
          <img src={user.profilePicture} alt="Profile Picture" />
        </div>
      )}
</div> */}
        <hr className="menu-divider" />
        {/* Add menu divider line */}

        <ul className="space-y-2">
          <li>
            <Link href={route('user-management')} className={url === '/user-management' ? 'active' : 'flex items-center py-2 hover:bg-gray-700 transition-colors duration-200'}>
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  {/* User Management Icon */}
                </svg>
              </span>
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              User Management
            </Link>
          </li>
          <li>
            <Link href={route('audit-trail')} className={url === '/audit-trail' ? 'active' : 'flex items-center py-2 hover:bg-gray-700 transition-colors duration-200'}>
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  {/* Audit Trail Icon */}
                </svg>
              </span>
              <FontAwesomeIcon icon={faFolderTree} className="mr-2" />
              Audit Trail
            </Link>
          </li>
          <li>
            <Link href={route('particular-management')} className={url === '/particular-management' ? 'active' : 'flex items-center py-2 hover:bg-gray-700 transition-colors duration-200'}>
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  {/* Particular Management Icon */}
                </svg>
              </span>
              <FontAwesomeIcon icon={faMicroscope} className="mr-2" />
              Particular Management
            </Link>
          </li>
          <li>
            <Link href={route('news-settings')} className={url === '/news-settings' ? 'active' : 'flex items-center py-2 hover:bg-gray-700 transition-colors duration-200'}>
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  {/* News Settings Icon */}
                </svg>
              </span>
              <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
              News Settings
            </Link>
          </li>
          <li>
            <Link href={route('services-settings')} className={url === '/services-settings' ? 'active' : 'flex items-center py-2 hover:bg-gray-700 transition-colors duration-200'}>
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  {/* Services Settings Icon */}
                </svg>
              </span>
              <FontAwesomeIcon icon={faHandshake} className="mr-2" />
              Services Settings
            </Link>
          </li>
          <li>
            <Link href={route('contact-settings')} className={url === '/contact-settings' ? 'active' : 'flex items-center py-2 hover:bg-gray-700 transition-colors duration-200'}>
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  {/* Contact Us Settings Icon */}
                </svg>
              </span>
              <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
              Contact Us Settings
            </Link>
          </li>
          <li>
            <Link href={route('about-settings')} className={url === '/about-settings' ? 'active' : 'flex items-center py-2 hover:bg-gray-700 transition-colors duration-200'}>
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  {/* About Us Settings Icon */}
                </svg>
              </span>
              <FontAwesomeIcon icon={faPeopleGroup} className="mr-2" />
              About Us Settings
            </Link>
          </li>
        </ul>
      </div>
      {/* Sidebar Footer */}
      {/* <div className="mt-auto p-4 border-t border-gray-800">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Admin Dashboard. All rights reserved.
        </p>
      </div> */}
    </div>
  );
};

export default Sidebar;
