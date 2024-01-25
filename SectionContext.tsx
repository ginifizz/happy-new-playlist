"use client";
import { createContext, PropsWithChildren, useState } from 'react';
import SectionLayout from "./components/SectionLayout";

type SectionContextType = {
  currentSection: number;
  setSection: (section: number) => void;
  Player?: any;
  setPlayer: (player: any) => void;
  playerStatus: 'playing' | 'paused' | 'unready';
  setPlayerStatus: (status: 'playing' | 'paused' | 'unready') => void;
};

export const SectionContext = createContext<SectionContextType>(
  {currentSection: 0, setSection: () => {}, setPlayer: () => {}, playerStatus: "unready", setPlayerStatus: () => {} }
);

export const SectionContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [currentSection, setSection] = useState(0);
  const [Player, setPlayer] = useState();
  const [playerStatus, setPlayerStatus] = useState<
    'paused' | 'playing' | 'unready'
  >('unready');

  return (
    <SectionContext.Provider
      value={{
        currentSection,
        setSection,
        Player,
        setPlayer,
        playerStatus,
        setPlayerStatus,
      }}
    >
      <SectionLayout>
        {children}
        </SectionLayout>
      
    </SectionContext.Provider>
  );
};