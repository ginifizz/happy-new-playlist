
"use client";
import { SectionContext } from "@/SectionContext";
import Script from "next/script";
import { useCallback, useContext, useEffect, useRef } from "react";
import tapes from "@/data";

export default function SpotifyPlayer() {
    const { setPlayer, setPlayerStatus, playerStatus, currentSection, Player,  } = useContext(SectionContext);
    
    const playerStatusRef = useRef(playerStatus);

    // update playerStatus reference (useful for the widget callbacks)
    useEffect(() => {
      playerStatusRef.current = playerStatus;
    }, [playerStatus]);
    
    const onPlayerUpdate = useCallback((e: Event) => {
      if (playerStatusRef.current === 'unready') return;
      // @ts-ignore
      if (e.data.position === e.data.duration) { // if the player is at the end of the playlist: force pause
        setPlayerStatus('paused');
        playerStatusRef.current = 'paused';
      }
      // @ts-ignore
      else if (!e.data.isPaused) {
        setPlayerStatus('playing');
        playerStatusRef.current = 'playing';
      } else {
        setPlayerStatus('paused');
        playerStatusRef.current = 'paused';
      }
    }, [setPlayerStatus]);

    useEffect(() => {
      // @ts-ignore
      window.onSpotifyIframeApiReady = (IFrameAPI) => {
        // @ts-ignore
        const element = document.getElementById('embed-iframe');
        const options = {
          theme: 'dark',
          title: "Spotify Player"
        };
        if (!Player) {
          const callback = (EmbedController: any) => {
            setPlayer(EmbedController);

            EmbedController.addListener('playback_update', onPlayerUpdate);
            EmbedController.addListener('ready', () => {
              playerStatusRef.current = 'paused';
              setPlayerStatus('paused');
            });
          };
          IFrameAPI.createController(element, options, callback);
        }
      };
    }, [Player, setPlayer, setPlayerStatus, onPlayerUpdate]);

    useEffect(() => {
      const tape = tapes[currentSection - 1];
      // if not tape: reset the player
      if (!tape) {
        setPlayerStatus('unready');
        Player?.loadUri(null);
        return;
      }
      Player?.removeListener('playback_update', onPlayerUpdate);
      Player?.loadUri(`spotify:playlist:${tape.playlistId}`);
      playerStatusRef.current = "unready";
      setPlayerStatus('unready');
    }, [currentSection, Player, setPlayerStatus, onPlayerUpdate]);

    useEffect(() => {
      if (playerStatus === "unready") document.body.classList.add("hidden-iframe");
      else document.body.classList.remove('hidden-iframe');
    }, [playerStatus]);

    return (
      <>
        <Script
          src='https://open.spotify.com/embed/iframe-api/v1'
          async
        ></Script>
        <div>
        <div
          className='fixed bottom-0 w-full h-40 left-0 z-20'
          id='embed-iframe'
          title="Spotify Player"
        ></div>
        </div>
      </>
    );
}