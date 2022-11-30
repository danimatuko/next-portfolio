import Image from 'next/image';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';

const Project = ({ project }) => {
  return (
    <div className='relative basis-1/3 flex-1'>
      <Image
        className='rounded-lg  object-fill'
        src={project?.src}
        alt='project preview'
        width={600}
        height={450}
      />
      <div className='opacity-0 px-16 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full text-white bg-slate-800 hover:opacity-80  rounded-md transition-all duration-500'>
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
