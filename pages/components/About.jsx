import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <section
      id='about'
      className='lg:px-48 py-20'>
      <h2 className='text-4xl py-1 dark:text-white '>About Me</h2>
      <p className='text-xl py-2 leading-8 text-gray-800 dark:text-gray-200'>
        I am a <strong className='text-bold px-1.5'>web developer</strong>
        with a
        <strong className='text-bold px-1.5'>
          practical engineer diploma.
        </strong>
        I always keep learning new things and apply my knowledge by building
        projects and adding them to my{' '}
        <Link href='#portfolio'>
          <a className='text-teal-500'>portfolio</a>
        </Link>
        . I enjoy building interactive, responsive, and scalable fullstack
        applications, as well as learning and exploring new technologies. I have
        <strong className='text-bold px-1.5'>
          2 years of industry expreicne as a front-end developer
        </strong>
        and nowadays I am looking for me next challenge.
      </p>
    </section>
  );
};

export default About;
