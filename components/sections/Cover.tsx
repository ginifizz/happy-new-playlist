"use client";
import { SectionContext } from '@/SectionContext';
/* eslint-disable @next/next/no-img-element */
import Arrows from '@/components/Arrows';
import Dots from '@/components/Dots';
import Tape1 from '@/components/tapes/Tape1';
import Tape2 from '@/components/tapes/Tape2';
import { useContext } from 'react';

type CoverProps = {
  translation: {
    part1: string;
    part2: string;
    part3: string;
    subtitle: string;
    scroll: string;
    happy: string;
  };
};

export default function Cover({ translation }:CoverProps) {
  const { scrollDown } = useContext(SectionContext);

  return (
    <div className='w-full h-screen relative'>
      <div className='absolute right-0 top-28 text-red w-24'>
        <Dots />
      </div>
      <div className='container relative h-full flex flex-col-reverse md:flex-row items-center mx-auto'>
        <div className='relative w-full md:w-1/2 flex flex-col gap-1 flex-1'>
          <div className='text-red'>
            <Arrows />
          </div>
          <p className='text-3xl md:text-5xl text-brown font-black'>{translation.part1}</p>
          <div
            className='text-xl md:text-3xl text-brown font-bold'
            dangerouslySetInnerHTML={{ __html: translation.part2 }}
          />
          <p className='font-title text-6xl md:text-8xl text-red uppercase'>{translation.part3}</p>
          <p className='text-md md:text-lg mt-2'>
            {translation.subtitle}
          </p>
          <button
            className='flex flex-row gap-2 mt-12 font-extrabold text-brown uppercase'
            onClick={() => scrollDown()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 animate-bounce'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3'
              />
            </svg>
            <p>{translation.scroll}</p>
          </button>
        </div>
        <div className='relative w-full md:w-1/2 h-2/5 md:h-full'>
          <Tape1 className='drop-shadow-floating w-2/5 absolute left-1/2 top-1/2 -translate-x-[120%] -translate-y-[150%] -rotate-12' />
          <Tape2
            title={translation.happy}
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] drop-shadow-floating w-3/4 rotate-6'
          />
        </div>
      </div>
    </div>
  );
}
