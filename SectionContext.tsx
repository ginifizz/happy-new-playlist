"use client";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { createContext, PropsWithChildren, useState, useCallback, useEffect, useRef } from 'react';
import SpotifyPlayer from '@/components/SpotifyPlayer';

type SectionContextType = {
  currentSection: number;
  scrollDown: () => void;
  scrollUp: () => void;
  Player?: any;
  setPlayer: (player: any) => void;
  playerStatus: 'playing' | 'paused' | 'unready';
  setPlayerStatus: (status: 'playing' | 'paused' | 'unready') => void;
};

export const SectionContext = createContext<SectionContextType>(
  {currentSection: 0, scrollDown: () => {}, scrollUp: () => {}, setPlayer: () => {}, playerStatus: "unready", setPlayerStatus: () => {} }
);

export const SectionContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [currentSection, setSection] = useState(0);
  const [Player, setPlayer] = useState();
  const [playerStatus, setPlayerStatus] = useState<
    'paused' | 'playing' | 'unready'
  >('unready');

  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  const movingContainer = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollToPlugin);


  const scrollUp = useCallback((onScroll?: () => void) => {
    const position = movingContainer.current?.getBoundingClientRect();
    if(!position) return;
    const current = position?.top / window.innerHeight;
    const newSection = Math.abs(current) - 1;
    if (newSection < 0) return;
    if (newSection === currentSection) return;
    setSection(newSection);
    if (onScroll) onScroll();
  }, [currentSection]);

  
  const scrollDown = useCallback((onScroll?: () => void) => {
    const position = movingContainer.current?.getBoundingClientRect();
    if(!position) return;
    const current = position.top / window.innerHeight;
    const newSection = Math.abs(current) + 1;
    if (newSection > 11) return;
    if (newSection === currentSection) return;
    setSection(newSection);
    if (onScroll) onScroll();
  }, [currentSection]);

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (!Player) return;
    const resetWheel = () => {
      window?.removeEventListener('wheel', handleWheel);
    }
    if (isScrolling.current) return;

      if (event.deltaY >= 1) {
        scrollDown(resetWheel);
      } else if (event.deltaY <= -1) {
        scrollUp(resetWheel);
      } else return;
    },
    [scrollDown, scrollUp, Player]
  );

  const handleTouchMove = useCallback((e:TouchEvent) => {
    if (!touchStartY.current) return;

    const deltaY = e.touches[0].clientY - touchStartY.current;

    if (Math.abs(deltaY) > 20) {
      const direction = deltaY > 0 ? 'down' : 'up';
      if (direction === 'down'){
        window.removeEventListener("touchmove", handleTouchMove);
         scrollUp();
      }
      else {
         window.removeEventListener('touchmove', handleTouchMove);
        scrollDown();
      }
      // Faites quelque chose en fonction de la direction du swipe
      touchStartY.current = 0; // Réinitialise la position de départ après le swipe
    }
  }, [scrollDown, scrollUp]);

    const handleTouchStart = useCallback(
      (e: TouchEvent) => {
        window.addEventListener('touchmove', handleTouchMove);
        touchStartY.current = e.touches[0].clientY;
      },
      [handleTouchMove]
    );

  useEffect(() => {
    let pageHeight = window.innerHeight;
    const to = currentSection * pageHeight * -1;
    if (gsap.getTweensOf(movingContainer.current).length) return;
    gsap.to(movingContainer.current, {
      duration: 0.5,
      y: to,
      onStart: () => {isScrolling.current = true;},
      onComplete: () => {
        setTimeout(() => {
          isScrolling.current = false;
          window.addEventListener('wheel', handleWheel, { passive: false });
        }, 800)
      },
    });
  }, [currentSection, handleWheel]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    //window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchstart', handleTouchStart);
    return () => {
      window?.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel, handleTouchStart]);

  return (
    <SectionContext.Provider
      value={{
        currentSection,
        scrollDown,
        scrollUp,
        Player,
        setPlayer,
        playerStatus,
        setPlayerStatus
      }}
    >
      <SpotifyPlayer />
      <div ref={movingContainer} className='w-full fixed top-0 left-0'>
        {children}
      </div>
    </SectionContext.Provider>
  );
};