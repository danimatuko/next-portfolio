import Link from 'next/link';
import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';

const Nav = ({ darkMode, setDarkMode }) => {
  return (
    <nav className='py-10 mb-12 flex justify-between dark:text-white'>
      <Link href='/'>
        <h1 className='font-burtons text-xl hover:cursor-pointer'>
          Dani Matuko
        </h1>
      </Link>
      <ul className='flex items-center'>
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className=' cursor-pointer text-2xl'
          />
        </li>
        <li>
          <a
            className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8'
            href='/Dani Matuko - Resume.pdf'
            download>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
