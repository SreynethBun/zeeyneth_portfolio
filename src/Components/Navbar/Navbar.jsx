import React, { useState } from 'react';
import { NavBarMenu } from '../mockData/Data';
import { RiMenuFold2Line, RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-2">
      <div className="flex mx-auto items-center justify-between">
        <Link
          to="/"
          className="flex justify-start items-center mr-3 md:hidden cursor-pointer"
        >
          <span className="fixed text-blue-001 font-Borel text-2xl left-10 top-10">
            Portfolio
          </span>
        </Link>

        {!isOpen && (
          <div
            onClick={toggleNavbar}
            className="fixed cursor-pointer md:hidden right-10 top-10 text-blue-001"
          >
            <RiMenuFold2Line size={28} />
          </div>
        )}

        {isOpen && (
          <div
            onClick={toggleNavbar}
            className="fixed cursor-pointer md:hidden right-10 top-10 text-blue-001"
          >
            <RiCloseFill size={28} />
          </div>
        )}

        {isOpen ? (
          <div className="relative">
            <div className="fixed mt-25 space-y-8 mr-8 right-1 z-50">
              {NavBarMenu.map((item, index) => (
                <li key={index} className="flex">
                  <Link to={`/${item.path}`} onClick={() => setIsOpen(false)}>
                    <h1 className="text-blue-001 text-3xl">{item.icon}</h1>
                  </Link>
                </li>
              ))}
            </div>
          </div>
        ) : (
          <nav className="top-0 left-0 h-screen items-end justify-end hidden md:flex z-50">
            <div className="fixed top-60 gap-5 items-center right-[-20px]">
              <ul className="text-5xl space-y-5 space-x-3">
                {NavBarMenu.map((item, index) => (
                  <li key={index}>
                    <Link to={`/${item.path}`}>
                      <div className="w-23 h-15 border-0 hover:bg-amber-600 rounded-l-2xl pr-10 pl-5 py-1 hover:border-b-4 hover:border-white transition-all">
                        <p className="text-white">{item.icon}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
