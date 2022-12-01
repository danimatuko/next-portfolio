import React from 'react';
import { IProject } from '../../interface/Project';
import Project from './Project';

const projects: IProject[] = [
  {
    name: 'Topicks',
    description: 'Blog about anything',
    src: 'https://res.cloudinary.com/matuko-cloud/image/upload/v1669908394/danimatuko/topicks_dg4jdl.png',
    demoURL: 'https://dm-topicks.herokuapp.com/',
    repoURL: 'https://github.com/danimatuko/topicks',
  },
  {
    name: 'Firetask',
    description: 'Task mangement system for teams',
    src: 'https://res.cloudinary.com/matuko-cloud/image/upload/v1669908394/danimatuko/firetask_qmqhmh.png',
    demoURL: 'https://firetask-danimatuko.web.app/',
    repoURL: 'https://github.com/danimatuko/firetask',
  },

  {
    name: 'Gocamp',
    description: 'eCommerce platform for camping products',
    src: 'https://res.cloudinary.com/matuko-cloud/image/upload/v1669908394/danimatuko/gocamp_ms9qyg.png',
    demoURL: 'https://app-gocamp.herokuapp.com/',
    repoURL: 'https://github.com/danimatuko/gocamp',
  },
  {
    name: 'edgeLdger',
    description: 'Agancey landing page',
    src: 'https://res.cloudinary.com/matuko-cloud/image/upload/v1669908660/danimatuko/edgeLdger_yixxc0.png',
    demoURL: 'https://eledger.netlify.app/',
    repoURL: 'https://github.com/DaniMatuko/EdgeLedger',
  },
];

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
