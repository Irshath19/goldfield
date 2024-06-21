import React, { useEffect, useState,useContext } from 'react';
import logo from '../assets/logo1.png';
import {Link} from 'react-scroll';
import {FaBars, FaXmark} from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Navbar = () => {
  const { user, updateUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'Service', path: 'service' },
    { link: 'Schemes', path: 'scheme' },
    { link: 'About', path: 'about' },
    { link: 'Contact Us', path: 'contact' },
  ];

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleButtonClick = () => {
    navigate('/signup');
  };

  const handleLogout = () => {
    updateUser('');
    navigate('/');
  };

  const handlePendingClick = () => {
    navigate('/pending');
  };

  return (
    <header className={`w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 ${isSticky ? 'sticky' : ''}`}>
      <nav className="py-4 1g:px-14 px-4">
        <div className="flex justify-between items-center text-base gap-8">
          <a href="/" className="text-2xl font-semibold flex items-center space-x-3" onClick={handleLogoClick}>
            <span className="text-[#263238]" onClick={handleLogoClick}>
              GOLDFIELD
            </span>
          </a>
          <ul className="md:flex space-x-12 hidden">
            
{navItems.map(({ link, path }) => (
  <Link
    key={path}
    to={path}
    spy={true}
    smooth={true}
    offset={-100}
    duration={100} 
    className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'
  >
    {link}
  </Link>
))}

            {user && (
              <li className="block text-base text-gray900 hover:text-brandPrimary first:font-medium" onClick={handlePendingClick}>
                Payment Pending
              </li>
            )}
          </ul>
          <div className="space-x-12 hidden lg:flex items-center">
            {user ? (
              <>
                <li>
                  <span>Welcome, {user}!</span>
                </li>
                <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <a href="/adminlogin" className="hidden lg:flex items-center text-brandPrimary hover:text-gray900" onClick={() => navigate('/adminlogin')}>
                  Admin
                </a>
                <a href="/login" className="hidden lg:flex items-center text-brandPrimary hover:text-gray900" onClick={() => navigate('/login')}>
                  Login
                </a>
                <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey" onClick={handleButtonClick}>
                  Sign up
                </button>
              </>
            )}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-neutralDGrey focus:outline-none focus:text-gray-500">
              {isMenuOpen ? <FaXmark className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
          {navItems.map(({ link, path }) => (
            <li key={path} className="block text-base text-white hover:text-brandPrimary first:font-medium" onClick={() => navigate(path)}>
              {link}
            </li>
          ))}
          {user && (
            <li className="block text-base text-white hover:text-brandPrimary first:font-medium" onClick={handlePendingClick}>
              Payment Pending
            </li>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
