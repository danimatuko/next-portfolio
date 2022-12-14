import Image from 'next/image';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { IProject } from '../../interface/IProject';

type projectProps = {
  key: string;
  project: IProject;
};

const Project = ({ project }: projectProps) => {
  return (
    <div className='relative basis-1/3 flex-1 mb-8'>
      <div className='small-screens lg:hidden dark:text-white'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-3xl'>{project?.name}</h3>
          <div className='inline-flex gap-4 justify-center text-teal-700'>
            <a
              target='_blank'
              rel='noreferrer'
              href={project?.repoURL}
              className='text-3xl flex justify-center items-center gap-1  border-none rounded-full '>
              <BsGithub />
            </a>
          </div>
        </div>
        <p className='mb-4'>{project?.description}</p>
      </div>
      <a
        target='_blank'
        rel='noreferrer'
        href={project?.demoURL}
        className='text-2xl inline-flex justify-center items-center gap-1  border-none rounded-full'>
        <Image
          className='rounded-lg  object-fill'
          src={project?.src}
          alt='project preview'
          width={600}
          height={450}
        />{' '}
      </a>
      <div className='hidden opacity-0 px-16 lg:flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full text-white bg-slate-800 hover:opacity-80  rounded-md transition-all duration-500'>
        <h3 className='text-center text-3xl mb-4'>{project?.name}</h3>
        <p className='mb-4'>{project?.description}</p>
        <div className='flex gap-4'>
          <a
            target='_blank'
            rel='noreferrer'
            href={project?.demoURL}
            className='flex justify-center items-center gap-1 bg-gradient-to-r from-cyan-500 font-bold to-teal-700 text-white px-6 py-2 border-none rounded-md '>
            <span>Demo</span>
            <AiOutlineSend />
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href={project?.repoURL}
            className='flex justify-center items-center gap-1 bg-gradient-to-r from-cyan-500 font-bold to-teal-700 text-white px-6 py-2 border-none rounded-md '>
            <span>Github</span> <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
