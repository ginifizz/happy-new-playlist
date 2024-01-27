'use client';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import { SectionContext } from '@/SectionContext';
import clsx from 'clsx';
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useContext,
  useState,
} from 'react';
import SpotifyPlayer from '@/components/SpotifyPlayer';
import tapes from '@/data';
import Logo from './Logo';
import Dots from './Dots';
import Circle from './Circle';
import { useRouter } from 'next/navigation';

export default function SectionLayout({ children }: PropsWithChildren<{}>) {
  const { setSection, currentSection, Player } = useContext(SectionContext);
  const [firstHash, setFirstHash] = useState(true);
  const router = useRouter();

  const isScrolling = useRef(false);
  const touchStartY = useRef(0);
  const delay = useRef(0);

  const movingContainer = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollToPlugin);

  useEffect(() => {
    if (!firstHash) return;
    const hash = window.location.hash?.replace('#', '');
    const playlist = tapes.find((tape) => tape.who === hash);
    if (playlist) {
      const index = tapes.indexOf(playlist) + 1;
      setSection(index);
    }
    setFirstHash(false);
  }, [firstHash, setSection]);

  useEffect(() => {
    if (firstHash) return;
    if (currentSection === 0) {
      router.push('');
      return;
    }
    const playlistOwner = tapes[currentSection - 1]?.who;
    router.push(playlistOwner ? `#${playlistOwner}` : '');
  }, [router, currentSection, firstHash]);

  const scrollUp = useCallback(
    (onScroll?: () => void) => {
      const position = movingContainer.current?.getBoundingClientRect();
      if (!position) return;
      const current = position?.top / window.innerHeight;
      const newSection = Math.abs(current) - 1;
      if (newSection < 0) return;
      if (newSection === currentSection) return;
      setSection(newSection);
      if (onScroll) onScroll();
    },
    [currentSection, setSection]
  );

  const scrollDown = useCallback(
    (onScroll?: () => void) => {
      const position = movingContainer.current?.getBoundingClientRect();
      if (!position) return;
      const current = position.top / window.innerHeight;
      const newSection = Math.abs(current) + 1;
      if (newSection > tapes.length) return;
      if (newSection === currentSection) return;
      setSection(newSection);
      if (onScroll) onScroll();
    },
    [currentSection, setSection]
  );

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (!Player) return;
      const resetWheel = () => {
        window?.removeEventListener('wheel', handleWheel);
      };
      if (isScrolling.current) return;
      delay.current = 800;
      if (event.deltaY >= 1) {
        scrollDown(resetWheel);
      } else if (event.deltaY <= -1) {
        scrollUp(resetWheel);
      } else return;
    },
    [scrollDown, scrollUp, Player]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!touchStartY.current) return;

      const deltaY = e.touches[0].clientY - touchStartY.current;

      if (Math.abs(deltaY) > 20) {
        const direction = deltaY > 0 ? 'down' : 'up';
        if (direction === 'down') {
          window.removeEventListener('touchmove', handleTouchMove);
          scrollUp();
        } else {
          window.removeEventListener('touchmove', handleTouchMove);
          scrollDown();
        }
        // Faites quelque chose en fonction de la direction du swipe
        touchStartY.current = 0; // Réinitialise la position de départ après le swipe
        delay.current = 200;
      }
    },
    [scrollDown, scrollUp]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isScrolling.current) return;
      delay.current = 50;
      if (e.key == 'ArrowUp') {
        scrollUp();
      }
      if (e.key == 'ArrowDown') {
        scrollDown();
      }
    },
    [scrollUp, scrollDown]
  );

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      window.addEventListener('touchmove', handleTouchMove);
      touchStartY.current = e.touches[0].clientY;
    },
    [handleTouchMove]
  );

  useEffect(() => {
    if (firstHash) return;
    let pageHeight = window.innerHeight;
    const to = currentSection * pageHeight * -1;
    if (gsap.getTweensOf(movingContainer.current).length) return;
    gsap.to(movingContainer.current, {
      duration: 0.5,
      y: to,
      onStart: () => {
        isScrolling.current = true;
      },
      onComplete: () => {
        setTimeout(() => {
          isScrolling.current = false;
          window.addEventListener('wheel', handleWheel, { passive: false });
        }, delay.current);
      },
    });
  }, [currentSection, handleWheel, firstHash]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);
    document.body.focus();
    return () => {
      window?.removeEventListener('wheel', handleWheel);
      window?.addEventListener('keydown', handleKeyDown);
      window?.addEventListener('touchstart', handleTouchStart);
    };
  }, [handleWheel, handleTouchStart, handleKeyDown]);

  return (
    <>
      <div className='container fixed z-40 left-1/2 -translate-x-1/2 top-5'>
        <div
          className={clsx(
            'relative transition-all',
            currentSection > 0 &&
              'hidden lg:block lg:-translate-x-8 xl:-translate-x-20'
          )}
        >
          <div className='h-full bg-brown w-screen right-full absolute'></div>
          <div
            className={clsx(
              'w-auto relative z-10 transition-all duration-500',
              currentSection === 0 ? 'h-12 md:h-20' : 'h-12'
            )}
          >
            <Logo />
          </div>
        </div>
      </div>
      <div className='absolute right-0 top-28 text-red w-24 hidden md:block'>
        <Dots />
      </div>
      <div className='absolute left-0 bottom-12 -translate-x-2/3 text-red w-44 opacity-25 hidden lg:block'>
        <Circle />
      </div>
      <SpotifyPlayer />
      <div ref={movingContainer} className='w-full fixed top-0 left-0'>
        {children}
      </div>{' '}
      <button
        onClick={() => setSection(0)}
        aria-label="Scroll to top"
        className={clsx(
          'fixed transition-all flex flex-col items-center gap-1 right-4 md:right-10 z-40 duration-500',
          currentSection === 0 ? 'bottom-0 translate-y-full' : 'bottom-24'
        )}
      >
        <div className='bg-red shadow-floating text-white rounded-full w-12 h-12 relative transition-all hover:brightness-125'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          >
            <path
              fillRule='evenodd'
              d='M10 17a.75.75 0 0 1-.75-.75V5.612L5.29 9.77a.75.75 0 0 1-1.08-1.04l5.25-5.5a.75.75 0 0 1 1.08 0l5.25 5.5a.75.75 0 1 1-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0 1 10 17Z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <span className='hidden md:block text-[10px] uppercase font-bold'>
          Scroll to top
        </span>
      </button>
    </>
  );
}
