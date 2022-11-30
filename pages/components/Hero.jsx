import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import avatar from '../../public/me.png';

const Hero = () => {
  return (
    <div className='text-center pt-0 pb-10'>
      <h2 className='font-burtons text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>
        Dani Matuko
      </h2>
      <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>
        Web Developer
      </h3>
      <p className='text-left text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl'>
        I love exploring different technologies and frameworks that catch my
        interest. If you want to know more
        <Link href='#about'>
          <a className='text-teal-500 px-1.5'>about me</a>
        </Link>
        Keep reading.
      </p>
      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
        <a
          className='hover:text-teal-700 transition-all duration-500'
          target='_blank'
          rel='noreferrer'
          href='https://github.com/danimatuko'>
          <BsGithub />
        </a>
        <a
          className='hover:text-teal-700 transition-all duration-500'
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/dani-matuko/'>
          <AiFillLinkedin />
        </a>
        <a
          className='hover:text-teal-700 transition-all duration-500'
          target='_blank'
          rel='noreferrer'
          href='mailto:matuko305@gmail.com'>
          <AiOutlineMail />
        </a>
      </div>
      <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96'>
        <Image
          src={avatar}
          alt='Dani Matuko'
          layout='fill'
          objectFit='contain'
        />
      </div>
    </div>
  );
};

export default Hero;
