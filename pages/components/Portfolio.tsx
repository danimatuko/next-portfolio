import React from 'react';
import { projects } from '../../data/projects';
import Project from './Project';

const Portfolio = () => {
  return (
    <section
      id='portfolio'
      className='lg:px-48 py-20'>
      <div>
        <h2 className='text-4xl py-1 dark:text-white'>Portfolio</h2>
        <p className='text-xl py-2 leading-8 text-gray-800 dark:text-gray-200'>
          Since the beginning of my journey as a web developer, I&apos;ve
          continuously worked on projects to challenge myself and explore new
          technologies and frameworks. Here are some of the latest.
        </p>
      </div>
      <div className='flex flex-col gap-y-10 gap-x-4 py-10 lg:flex-row lg:flex-wrap'>
        {projects?.map((project) => (
          <Project
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
