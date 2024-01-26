'use client';
import { SectionContext } from '@/SectionContext';
import Arrows from '@/components/Arrows';
import clsx from 'clsx';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import tapes from '@/data';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  XIcon
} from "react-share";
import ShareButton from '../ShareButton';

type TapeSectionProps = {
  section: number;
  title: string;
  subtitle: string;
  description: string;
  playlistId: string;
  metaDictionary: {
    title: string;
    description: string;
  };
  tape: React.ComponentType<Tape>;
  rotateClassName: string;
  playerStatus?: boolean;
  dictionary: {
    spotify: string;
    scroll: string;
    share: string;
  };
};

export default function TapeSection({
  section,
  title,
  subtitle,
  description,
  metaDictionary,
  playlistId,
  tape: Tape,
  rotateClassName,
  dictionary,
}: TapeSectionProps) {
  const { setSection, Player, playerStatus, currentSection } =
    useContext(SectionContext);
  const [shareOpen, setShareOpen] = useState(false);
  const tapeElement = useRef<HTMLDivElement>(null);
  const textElement = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentSection === section) {
      gsap.set(tapeElement.current, {
        transformOrigin: 'center center',
        x: '+200',
        scale: 0.2,
        opacity: 0,
      });
      gsap.fromTo(
        tapeElement.current,
        {
          transformOrigin: 'center center',
          x: '+200',
          scale: 0.2,
          opacity: 0,
          duration: 0.5,
        },
        {
          transformOrigin: 'center center',
          x: '+0',
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 0.2,
        }
      );
      gsap.set(textElement.current, { scale: 0 });
      gsap.fromTo(
        textElement.current,
        { scale: 0 },
        { scale: 1, duration: 0.5, delay: 0.2 }
      );
    }
  }, [currentSection, section]);

  if (section > currentSection + 2 || section < currentSection - 2) return (<div ref={container} className='w-full h-screen relative overflow-hidden'></div>)
  return (
    <div ref={container} className='w-full h-screen relative overflow-hidden'>
      <div className='container relative h-full flex flex-col-reverse gap-12 md:flex-row items-center md:gap-6 mx-auto lg:pt-20 pb-20'>
        <div
          ref={textElement}
          className='relative flex flex-col flex-1 gap-1 pb-4 md:pb-0'
        >
          <div className='text-red'>
            <Arrows />
          </div>
          <div className='text-xl md:text-2xl text-brown font-black'>
            <span>{subtitle}</span>
            <ShareButton section={section} shareButton={dictionary.share} shareText={metaDictionary.description} shareTitle={metaDictionary.title} />
          </div>
          <div
            className='font-title text-5xl md:text-7xl text-red uppercase'
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            className='text-sm md:text-lg mt-2'
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className='flex flex-row flex-wrap gap-4 text-beige my-4'>
            <button
              aria-label="Toggle the player status"
              className={clsx(
                'flex flex-row items-center gap-2 bg-red py-1 px-2 md:py-2 md:px-3 rounded-3xl transition-all hover:brightness-125',
                !Player && 'opacity-30 pointer-events-none'
              )}
              onClick={() => {
                if (!Player) return;
                switch (playerStatus) {
                  case 'unready':
                    Player.play();
                    break;
                  case 'playing':
                    Player.pause();
                    break;
                  case 'paused':
                    Player.togglePlay();
                    break;
                }
              }}
            >
              {playerStatus === 'playing' ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    fillRule='evenodd'
                    d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM9 8.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H9Zm5.25 0a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-.75Z'
                    clipRule='evenodd'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    fillRule='evenodd'
                    d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z'
                    clipRule='evenodd'
                  />
                </svg>
              )}

              <span className='hidden md:block text-sm md:text-base uppercase font-black'>
                {playerStatus === 'playing' ? 'Pause' : 'Preview'}
              </span>
            </button>
            <a
              href={`https://open.spotify.com/playlist/${playlistId}`}
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-row items-center gap-2 bg-green py-1 px-2 md:py-2 md:px-3 rounded-3xl transition-all hover:brightness-125'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='100'
                height='100'
                viewBox='0 0 50 50'
                className='w-6 h-6'
                fill='currentColor'
              >
                <path d='M25.009,1.982C12.322,1.982,2,12.304,2,24.991S12.322,48,25.009,48s23.009-10.321,23.009-23.009S37.696,1.982,25.009,1.982z M34.748,35.333c-0.289,0.434-0.765,0.668-1.25,0.668c-0.286,0-0.575-0.081-0.831-0.252C30.194,34.1,26,33,22.5,33.001 c-3.714,0.002-6.498,0.914-6.526,0.923c-0.784,0.266-1.635-0.162-1.897-0.948s0.163-1.636,0.949-1.897 c0.132-0.044,3.279-1.075,7.474-1.077C26,30,30.868,30.944,34.332,33.253C35.022,33.713,35.208,34.644,34.748,35.333z M37.74,29.193 c-0.325,0.522-0.886,0.809-1.459,0.809c-0.31,0-0.624-0.083-0.906-0.26c-4.484-2.794-9.092-3.385-13.062-3.35 c-4.482,0.04-8.066,0.895-8.127,0.913c-0.907,0.258-1.861-0.272-2.12-1.183c-0.259-0.913,0.272-1.862,1.184-2.12 c0.277-0.079,3.854-0.959,8.751-1c4.465-0.037,10.029,0.61,15.191,3.826C37.995,27.328,38.242,28.388,37.74,29.193z M40.725,22.013 C40.352,22.647,39.684,23,38.998,23c-0.344,0-0.692-0.089-1.011-0.275c-5.226-3.068-11.58-3.719-15.99-3.725 c-0.021,0-0.042,0-0.063,0c-5.333,0-9.44,0.938-9.481,0.948c-1.078,0.247-2.151-0.419-2.401-1.495 c-0.25-1.075,0.417-2.149,1.492-2.4C11.729,16.01,16.117,15,21.934,15c0.023,0,0.046,0,0.069,0 c4.905,0.007,12.011,0.753,18.01,4.275C40.965,19.835,41.284,21.061,40.725,22.013z'></path>
              </svg>
              <span className='text-sm md:text-base uppercase font-black'>
                {dictionary.spotify}
              </span>
            </a>
          </div>
          <button
            className={clsx(
              'flex flex-row gap-2 mt-6 font-extrabold text-sm md:text-base text-brown uppercase',
              section === tapes.length && 'hidden'
            )}
            onClick={() => setSection(section + 1)}
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
            <p>{dictionary.scroll}</p>
          </button>
        </div>
        <div
          ref={tapeElement}
          className='flex items-center relative h-auto w-2/3 md:w-1/2 md:h-full mt-24 md:mt-0'
        >
          <Tape
            title={title}
            subtitle={subtitle}
            animated={playerStatus === 'playing'}
            className={clsx(
              'md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 drop-shadow-floating w-[90%]',
              rotateClassName
            )}
          />
        </div>
      </div>
    </div>
  );
}
