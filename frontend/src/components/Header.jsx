import { useState } from 'react';
import { RiSearch2Line } from "react-icons/ri";
import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import ProfileDropdown from './common/ProfileDropdown';
import Sidebar from './common/Sidebar';

const Header = ({ dashboard }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector(state => state.user.userId)
  const { name, role } = user
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const userName = name?.replace('.', '').slice(0, 2).toUpperCase()

  return (
    <>
      {dashboard ?
        <div className="navbar bg-primary justify-between border">
          <div className="flex gap-2">
          <Sidebar mobileView />
            <a className="text-lg md:text-3xl text-secandory px-2">{name.toUpperCase()}</a>
          </div>
          <div className='max-sm:hidden'>
            <div className="flex justify-between items-center bg-secandory input max-w-80 px-0">
              <input type="text" placeholder="Search" className="w-full pl-3" />
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <button className="btn btn-ghost btn-circle text-secandory">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
          <ProfileDropdown userName={userName} />
        </div>
        :
        <nav className="bg-primary text-secandory shadow-md">
          <div className="px-3 py-4 flex items-center justify-between gap-3 w-full">
            {/* Hamburger menu for mobile */}
            <div className="flex gap-3">
              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  className="btn p-2"
                  aria-label="Toggle Menu"
                >
                  <div className={`space-y-2`}>
                    <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[10px]' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></span>
                  </div>
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/" className="max-sm:text-lg text-3xl font-bold text-secandory flex flex-col">BLOG <span className='text-sm font-light tracking-[6px] max-sm:tracking-[2px] px-1 max-sm:px-0'>buster</span></Link>
              </div>
            </div>
            <div className="hidden md:flex space-x-6 items-center">
              <Link to="/" className="hover:text-indigo-300">Home</Link>
              <Link to="/blog-list" className="hover:text-indigo-300">Blogs</Link>
              <Link to="/about" className="hover:text-indigo-300">About</Link>
              <Link to="/contact" className="hover:text-indigo-300">Contact</Link>

            </div>
            {/* Search bar*/}
            <div className="flex gap-1 items-center mx-1 bg-secandory rounded-md">
              <input type="text" placeholder="Search" className="text-gray-600 w-full outline-none p-2" />
              <button className='btn text-3xl px-1 '>
                <RiSearch2Line />
              </button>
            </div>
            <div className={`${!user && 'max-mobile:hidden'}`}>
              {user ?
                <ProfileDropdown userName={userName} /> :
                <Link to='/auth/sign-in' className='btn max-mobile:hidden'>
                  Sign in
                </Link>
              }
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && <div
            className={'bg-blue-500 p-4 space-y-4 '}
          >
            <Link to="/" className="block text-secandory hover:text-indigo-300" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/blog-list" className="block text-secandory hover:text-indigo-300" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
            <Link to="/about" className="block text-secandory hover:text-indigo-300" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block text-secandory hover:text-indigo-300" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            {!user && <Link to="/auth/sign-in" className="hidden max-mobile:flex text-secandory hover:text-indigo-300" onClick={() => setIsMenuOpen(false)}>Sign In</Link>}
          </div>}
        </nav>}
    </>
  );
};

export default Header;
