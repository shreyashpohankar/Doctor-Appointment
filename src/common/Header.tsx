import React, { useState } from 'react';
import reactLogo from '../logos/react-logo.png'
import NavLinkButton from './NavLinkButton';
import { headerLinkType } from './CommonTypes';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { removeUserData } from '../store/useReducer/useReducer';
import { useNavigate } from 'react-router-dom';

const Header: React.FC<{ headerLink: headerLinkType[] }> = ({ headerLink }) => {

           const dispatch = useDispatch();
          const navigate = useNavigate()
           const logOut= () => {
              dispatch(removeUserData(0))
              navigate('/')
           }

  const headerLinkNavs = headerLink.map((link: headerLinkType) => {

    return (

  <NavLinkButton  key={link.btName}
  btPath={link.btPath} btName={link.btName} btType={link.btType}  />

    );
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-red-400 py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center mr-4">

          <img w-4 h-4 src={reactLogo} alt="logo" ></img>

          <a href="/" className="text-white text-xl font-bold">
            Logo
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-gray-300"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16V4H4v2zm0 5h16V9H4v2zm0 5h16v-2H4v2z"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'
            } md:flex md:items-center md:w-auto`}
        >
          <div className="text-sm md:flex-grow">

            {
            headerLinkNavs}
          
                 <Button   btName="logout" btFun={logOut} btType="bt-error"   /  >
             

            
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;