"use client";
import { SectionContext } from '@/SectionContext';
import Arrows from '@/components/Arrows';
import Dots from '@/components/Dots';
import Tape1 from '@/components/tapes/Tape1';
import Tape2 from '@/components/tapes/Tape2';
import { useContext } from 'react';
import ShareButton from '../ShareButton';

type CoverProps = {
  translation: {
    part1: string;
    part2: string;
    part3: string;
    subtitle: string;
    scroll: string;
    happy: string;
  };
  metaDictionary: {
    title: string;
    description: string;
  }
};

export default function Cover({ translation }:CoverProps) {
  const { setSection } = useContext(SectionContext);

  return (
    <div className='w-full h-screen relative'>
      <div className='absolute right-0 top-28 text-red w-24 hidden lg:block'>
        <Dots />
      </div>
      <div className='container relative h-full flex flex-col-reverse landscape:flex-row mx-auto lg:pt-20'>
        <div className='relative w-full landscape:w-1/2 flex flex-col gap-1 flex-1'>
          <div className='flex flex-col gap-1 flex-1 justify-center pt-12'>
            <div className='flex gap-2 items-center'>
              <div className='text-red'>
                <Arrows />
              </div>
            </div>
            <p className='text-xl lg:text-5xl text-brown font-black'>
              {translation.part1}
            </p>
            <div
              className='text-base lg:text-3xl text-brown font-bold leading-snug'
              dangerouslySetInnerHTML={{ __html: translation.part2 }}
            />
            <div
              className='font-title text-5xl lg:text-8xl text-red uppercase'
              dangerouslySetInnerHTML={{ __html: translation.part3 }}
            />

            <div
              className='text-sm lg:text-lg mt-2'
              dangerouslySetInnerHTML={{ __html: translation.subtitle }}
            />
            <button
              className='flex flex-row gap-2 mt-4 lg:mt-12 font-extrabold text-brown uppercase'
              onClick={() => setSection(1)}
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
              <p className="text-xs lg:text-base">{translation.scroll}</p>
            </button>
          </div>
        </div>
        <div className='relative w-full landscape:lg:w-1/2 landscape:w-2/5 h-[30%] mt-20 landscape:mt-0 landscape:h-full'>
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
