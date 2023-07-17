import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
// import SideBar from '../Components/adminSideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolderTree, faMicroscope, faNewspaper, faHandshake, faAddressBook, faPeopleGroup, faTimes, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ url }) => {
    return (
      <div className="lg:w-64 bg-darkBlue text-white h-screen fixed top-0 left-0 lg:overflow-y-auto">
        {/* Sidebar Content */}
        <div className="p-4 lg:py-8">
          <Link href={route('admin-dashboard')}>
            <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">
              Admin Dashboard
            </h1>
          </Link>
          <hr className="menu-divider" />

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
      </div>
    );
  };


export default function adminAuthenticated({ user, header, children, url }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(
        false
      );
      const [showingSidebar, setShowingSidebar] = useState(true);

      const toggleSidebar = () => {
        setShowingSidebar(!showingSidebar);
      };

  return (
    <div className="min-h-screen bg-whiteBlue-1 flex">
        {showingSidebar && (
        <div className="lg:w-64 flex-shrink-0">
          <Sidebar url={url} />
        </div>
      )}

    <div className={`flex-grow ${showingSidebar ? '' : ''}`}>
      <nav className="bg-whiteBlue-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
          <div className="flex items-center">
          <button
                  onClick={toggleSidebar}
                  className={`inline-flex items-center justify-center w-12 h-12 bg-darkBlue text-white fixed top-2 left-0 z-10 transition-all duration-300 ${
                    showingSidebar
                      ? 'transform translate-x-64'
                      : 'transform translate-x-0'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={showingSidebar ? faTimes : faChevronRight}
                    className={`w-6 h-6`}
                  />
                </button>
            </div>

            {/* <div className={`lg:w-64 ${showingSidebar ? 'isSidebarOpen' : ''}`}>
              <Sidebar url={url} />
            </div> */}

            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <div className="ml-3 relative">
                <Dropdown>
                  <Dropdown.Trigger>
                    <span className="inline-flex rounded-md">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-black bg-whiteBlue hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                      >
                        {user.name}
                        <svg
                          className="ml-2 -mr-0.5 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  </Dropdown.Trigger>

                  <Dropdown.Content>
                    <Dropdown.Link href={route('profile.edit')}>
                      Profile
                    </Dropdown.Link>
                    <Dropdown.Link
                      href={route('logout')}
                      method="post"
                      as="button"
                    >
                      Log Out
                    </Dropdown.Link>
                  </Dropdown.Content>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            (showingNavigationDropdown ? 'block' : 'hidden') +
            ' sm:hidden'
          }
        >
          <div className="pt-2 pb-3">
            <ResponsiveNavLink
              href={route('admin-dashboard')}
              active={route().current('admin-dashboard')}
            >
              Admin
            </ResponsiveNavLink>
          </div>

          <div className="pt-4 pb-1 border-t border-gray-200">
            <div className="px-4">
              <div className="font-medium text-base text-gray-800">
                {user.name}
              </div>
              <div className="font-medium text-sm text-gray-500">
                {user.email}
              </div>
            </div>

            <div className="mt-3 space-y-1">
              <ResponsiveNavLink href={route('profile.edit')}>
                Profile
              </ResponsiveNavLink>
              <ResponsiveNavLink
                method="post"
                href={route('logout')}
                as="button"
              >
                Log Out
              </ResponsiveNavLink>
            </div>
          </div>
        </div>


      </nav>

      {/* {showingSidebar && (
        <div className="lg:w-64">
          <Sidebar url={url} />
        </div>
      )} */}



            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
            {/* <div className={`lg:w-64 ${showingSidebar ? 'isSidebarOpen' : ''}`}>
                <Sidebar url={url} />
            </div> */}
            </div>
        </div>
    );
}
