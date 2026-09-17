import React, { useState, useCallback, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { AppProvider, useApp } from './lib/appState';
import { audioManager } from './lib/audio';
import { AmbientEnvironment, getGrainOpacity } from './components/ui/AmbientEnvironment';
import { FilmGrain } from './components/ui/FilmGrain';
import { useScrollProgress } from './lib/useScrollProgress';

import { Cover } from './components/sections/Cover';
import { ActOne } from './components/sections/ActOne';
import { ActTwo } from './components/sections/ActTwo';
import { ActThree } from './components/sections/ActThree';
import { ActFour } from './components/sections/ActFour';
import { TimeCapsule } from './components/sections/TimeCapsule';
import { ActFive } from './components/sections/ActFive';
import { ActSix } from './components/sections/ActSix';
import { TheDistance } from './components/sections/TheDistance';
import { Birthday } from './components/sections/Birthday';
import { TheLetter } from './components/sections/TheLetter';
import { Ending } from './components/sections/Ending';
import { BlueJEpilogue } from './components/sections/BlueJEpilogue';

/** Section IDs in chronological scroll order */
const SECTION_IDS = [
  'act-1',
  'act-2',
  'act-3',
  'act-4',
  'time-capsule',
  'act-5',
  'act-6',
  'the-distance',
  'birthday',
  'the-letter',
  'ending',
  'bluej-epilogue',
];

/**
 * EXPERIENCE — The complete chronological memory archive.
 * Cover → (soundtrack selection) → Acts I–VI & Artifacts → Letter → Ending.
 */
const Experience: React.FC = () => {
  const { state, dispatch } = useApp();
  const [started, setStarted] = useState(false);

  // Only observe sections once they are mounted in DOM
  const sectionIds = useMemo(() => (started ? SECTION_IDS : []), [started]);
  const { activeSection: scrollSection } = useScrollProgress(sectionIds, started);

  const activeSection = started ? (scrollSection || SECTION_IDS[0]) : 'cover';
  const grainOpacity = getGrainOpacity(activeSection);

  const handleBegin = useCallback(() => {
    dispatch({ type: 'INIT_AUDIO' });
    window.scrollTo(0, 0);
    setStarted(true);
  }, [dispatch]);

  const handleToggleMute = useCallback(() => {
    audioManager.toggleMute();
    dispatch({ type: 'TOGGLE_MUTE' });
  }, [dispatch]);

  return (
    <div className="relative w-full min-h-[100dvh] overflow-x-hidden">
      {/* Atmospheric background — transitions between act environments */}
      <AmbientEnvironment activeSection={activeSection} />

      {/* Film grain — always present, opacity modulated per section */}
      <FilmGrain opacity={grainOpacity} />

      <AnimatePresence>
        {!started ? (
          <motion.div
            key="cover"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Cover onBegin={handleBegin} />
          </motion.div>
        ) : (
          <motion.main
            key="experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative z-10"
          >
            <ActOne />
            <ActTwo />
            <ActThree />
            <ActFour />
            <TimeCapsule />
            <ActFive />
            <ActSix />
            <TheDistance />
            <Birthday />
            <TheLetter />
            <Ending />
            <BlueJEpilogue />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Audio toggle — appears after experience begins */}
      {started && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={handleToggleMute}
          className="fixed bottom-5 right-5 z-50 p-2.5 rounded-full bg-black/30 backdrop-blur-sm border border-white/5 text-paper-dim/40 hover:text-paper-dim/70 transition-colors duration-500"
          aria-label={state.audioMuted ? 'Unmute' : 'Mute'}
        >
          {state.audioMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </motion.button>
      )}
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <Experience />
    </AppProvider>
  );
}

export default App;
