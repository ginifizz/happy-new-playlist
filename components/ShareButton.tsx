'use client';
import { SectionContext } from '@/SectionContext';
import clsx from 'clsx';
import { useContext, useMemo, useState, useEffect, useRef } from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  XIcon,
} from 'react-share';

type ShareButtonProps = {
  shareText: string;
  shareTitle: string;
  section: number;
};

export default function ShareButton({ shareText, shareTitle, section }: ShareButtonProps) {
  const { currentSection } = useContext(SectionContext);
  const [shareOpen, setShareOpen] = useState(false);
  const shareContainer = useRef<HTMLDivElement>(null);

  const currentUrl = useMemo(
    () =>
      currentSection && window !== undefined ? `${window.location.href}` : '',
    [currentSection]
  );

  useEffect(() => {
    if (currentSection !== section) setShareOpen(false);
  }, [currentSection, section]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        shareOpen &&
        shareContainer.current &&
        !shareContainer.current.contains(e.target)
      ) {
        setShareOpen(false);
      }
    };
        document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [setShareOpen, shareOpen]);

  return (
    <div className='relative z-40 inline-flex ml-2 bg-white text-brown rounded-full shadow-floating w-10 h-10 items-center justify-center'>
      <button
        className='flex items-center justify-center w-full h-full rounded-full'
        onClick={() => setShareOpen(!shareOpen)}
      >
        {shareOpen ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18 18 6M6 6l12 12'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5'
          >
            <path
              fillRule='evenodd'
              d='M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z'
              clipRule='evenodd'
            />
            <path
              fillRule='evenodd'
              d='M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z'
              clipRule='evenodd'
            />
          </svg>
        )}
      </button>
      <div
        ref={shareContainer}
        className={clsx(
          'absolute right-0 mt-4 top-full w-fit md:top-auto md:bottom-0 bg-white shadow-floating rounded-xl p-4 flex flex-col items-center md:right-auto md:left-full md:mt-0 md:ml-4  md:items-start gap-3 transition-all',
          shareOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'pointer-events-none opacity-0 scale-0 -translate-y-1/2 md:-translate-y-0 md:-translate-x-1/2'
        )}
      >
        <span className='uppercase font-bold text-xs mt-1'>Partager</span>
        <div className='flex flex-row gap-3 items-center'>
          <FacebookShareButton
            url={currentUrl}
            title={shareTitle}
            className='text-brown flex rounded-full overflow-hidden w-8 h-8 md:w-9 md:h-9 items-center justify-center transition-all hover:brightness-125'
          >
            <FacebookIcon />
          </FacebookShareButton>
          <a
            href={`https://mastodonshare.com/?text=${shareText}&url=${currentUrl}`}
            target='_blank'
            rel='noopener noreferrer'
            className='text-white bg-[#6364ff] flex rounded-full overflow-hidden p-2 w-8 h-8 md:w-9 md:h-9 items-center justify-center transition-all hover:brightness-125'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0'
              y='0'
              version='1.1'
              viewBox='0 0 621.9 666.7'
              xmlSpace='preserve'
              className='fill-current'
            >
              <path d='M621.9 218.9c0-144.6-94.8-187-94.8-187C479.3 9.9 397.3.7 312.1 0H310C224.7.7 142.8 9.9 95 31.9c0 0-94.8 42.4-94.8 187 0 33.1-.6 72.7.4 114.7C4 475 26.5 614.4 157.3 649c60.3 16 112.1 19.3 153.7 17 75.6-4.2 118-27 118-27l-2.5-54.9s-54 17-114.7 15c-60.1-2.1-123.6-6.5-133.3-80.3-.9-6.9-1.4-13.8-1.3-20.7 0 0 59 14.4 133.8 17.9 45.7 2.1 88.6-2.7 132.2-7.9 83.5-10 156.3-61.4 165.4-108.5 14.5-74 13.3-180.7 13.3-180.7zM510.1 405.2h-69.4v-170c0-35.8-15.1-54-45.2-54-33.3 0-50 21.6-50 64.2v93h-69v-93c0-42.7-16.7-64.2-50.1-64.2-30.2 0-45.2 18.2-45.2 54v170h-69.4V230.1c0-35.8 9.1-64.2 27.4-85.3 18.9-21 43.6-31.8 74.3-31.8 35.5 0 62.4 13.6 80.2 40.9l17.3 29 17.3-29c17.8-27.3 44.7-40.9 80.2-40.9 30.7 0 55.4 10.8 74.3 31.8 18.3 21 27.4 49.5 27.4 85.3v175.1z'></path>
            </svg>
          </a>
          <TwitterShareButton
            url={currentUrl}
            title={shareText}
            className='text-white bg-brown flex rounded-full overflow-hidden w-8 h-8 md:w-9 md:h-9 items-center justify-center transition-all hover:opacity-70'
          >
            <XIcon />
          </TwitterShareButton>
          <LinkedinShareButton
            className='bg-brown text-white flex rounded-full overflow-hidden w-8 h-8 md:w-9 md:h-9 items-center justify-center transition-all hover:brightness-125'
            url={currentUrl}
            title={shareTitle}
            summary={shareText}
          >
            <LinkedinIcon />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
}
