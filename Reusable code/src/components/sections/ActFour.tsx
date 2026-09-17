import React from 'react';
import { motion } from 'framer-motion';
import { MEMORY_ARCHIVE, MARGIN_NOTES } from '../../data/memories';
import { MemoryCard } from '../ui/MemoryCard';
import { VideoPlayer } from '../ui/VideoPlayer';
import { MarginNote } from '../ui/MarginNote';

/**
 * ACT IV: THE TURNING POINT (OCTOBER 2025)
 *
 * - 17.10.25: Bus stand, she waited 2 hours, juice as apology
 * - 18.10 → 19.10: All-night conversation, 3:30 AM brownies in an airtight box
 * - 19.10.25: The Walk & Video Artifact (VideoPlayer)
 * - 20.10.25: The Confession (alarm, role reversal)
 * - 21.10.25: First Kiss (first official date walk)
 * - 25.10.25: Delo & the philosophy of roses
 */
export const ActFour: React.FC = () => {
  const photoBusStand = MEMORY_ARCHIVE.find(m => m.id === 'photo-act4-busstand');
  const photoDelo = MEMORY_ARCHIVE.find(m => m.id === 'photo-act4-delo');

  return (
    <section id="act-4" className="relative w-full px-6 md:px-12 py-28 md:py-44">
      <div className="max-w-2xl mx-auto w-full">

        {/* Act Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 2 }}
          className="text-center mb-24 md:mb-36"
        >
          <p className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-ink-faint/40 mb-3">
            ACT IV // OCTOBER 2025
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.15em] text-paper">
            THE TURNING POINT
          </h2>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/35 mt-2">
            WHERE FRIENDSHIP SLOWLY BECAME LOVE
          </p>
        </motion.div>

        {/* Early-Mid October: Maths Project */}
        <div className="mb-28 md:mb-40">
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-right max-w-lg ml-auto mb-8"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/50 mb-2">
              EARLY – MID OCT 2025 // THE MATHS PROJECT
            </p>
            <p className="font-serif text-xl md:text-2xl font-light text-paper leading-relaxed mb-3">
              Staying awake through the night for your maths project.
            </p>
            <p className="font-body text-sm text-paper-dim/55 leading-relaxed">
              Long calls into the early morning hours, keeping company, helping you finish it. I never minded the lost sleep.
            </p>
          </motion.div>

          <MarginNote
            label={MARGIN_NOTES['note-maths'].label}
            text={MARGIN_NOTES['note-maths'].text}
            align="right"
          />
        </div>

        {/* 17.10: Bus Stand */}
        <div className="mb-28 md:mb-40">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-left max-w-lg mb-8"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/50 mb-2">
              17.10.25 // BUS STAND
            </p>
            <p className="font-serif text-xl md:text-2xl font-light text-paper leading-relaxed mb-3">
              You waited for me for almost two hours.
            </p>
            <p className="font-body text-sm text-paper-dim/60 leading-relaxed mb-3">
              You were waiting for me, not for juice. The juice was just my apology when I finally arrived. Then I walked you home.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/40 italic leading-relaxed">
              The realization that someone waited for me like that stayed with me.
            </p>
          </motion.div>

          {photoBusStand && (
            <div className="flex justify-start md:ml-4 my-10">
              <MemoryCard
                memory={photoBusStand}
                rotate={-1.2}
                aspect="4/3"
                style={{ maxWidth: '17rem' }}
              />
            </div>
          )}

          <MarginNote
            label={MARGIN_NOTES['note-busstand'].label}
            text={MARGIN_NOTES['note-busstand'].text}
            align="left"
          />
        </div>

        {/* Night of Oct 18 -> Morning of Oct 19: Brownies */}
        <div className="mb-28 md:mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
            className="text-center max-w-lg mx-auto mb-10"
          >
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-amber/65 mb-3">
              18.10.25 → 19.10.25 // 03:30 AM
            </p>
            <p className="font-serif text-2xl md:text-3xl font-light italic text-paper leading-relaxed mb-4">
              Brownies in an airtight box.
            </p>
            <p className="font-body text-sm md:text-base text-paper-dim/65 leading-relaxed mb-4">
              Staying awake through the entire night. Bullshit music, random conversations, scrolling reels. You occasionally dozed off. At 3:30 AM, you were baking brownies for me.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/45 leading-relaxed">
              I left home in the cold dark, met you at your usual spot. You handed me that small airtight container. I hugged you and thanked you.
            </p>
            <p className="font-body text-xs text-paper-dim/40 italic mt-3">
              If I could take one moment with me after death, this would be one of them.
            </p>
          </motion.div>

          <MarginNote
            label={MARGIN_NOTES['note-brownies'].label}
            text={MARGIN_NOTES['note-brownies'].text}
            align="center"
          />
        </div>

        {/* 19.10.25: Video Artifact */}
        <div className="mb-28 md:mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-center max-w-md mx-auto mb-8"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/45 mb-2">
              RECORDING // 19.10.25
            </p>
            <p className="font-serif text-2xl md:text-3xl font-light text-paper leading-relaxed mb-3">
              The walk where everything felt close.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/45 italic leading-relaxed">
              We walked together. We cuddled. I slept resting on you, and you slept resting on me. Intimate without explanation.
            </p>
          </motion.div>

          {/* Video Player Component */}
          <div className="my-10">
            <VideoPlayer
              src="/video/Oct19.mp4"
              dateStamp="19.10.25"
              location="THE WALK"
              caption="19 October 2025."
              extendedNote="A quiet recording from the day we were closest."
            />
          </div>
        </div>

        {/* 20.10: Confession & 21.10: First Kiss */}
        <div className="mb-28 md:mb-40 space-y-20">
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-right max-w-md ml-auto"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/50 mb-2">
              20.10.25 // THE CONFESSION
            </p>
            <p className="font-serif text-xl md:text-2xl font-light text-paper leading-relaxed mb-3">
              The alarm rang, but we missed the walk.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/45 leading-relaxed">
              You didn’t wake up, so I dozed off. Later you jokingly called me your girlfriend. I decided to reverse the roles and confessed. You admitted you had started feeling it too. Everything we had avoided finally had a name.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-left max-w-md"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/50 mb-2">
              21.10.25 // THE FIRST KISS
            </p>
            <p className="font-serif text-2xl md:text-3xl font-light italic text-paper leading-relaxed mb-3">
              First official date walk. First kiss.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/45 leading-relaxed">
              Wholesome and unforced. Two people who had both been deprived of genuine affection finding something that felt completely right.
            </p>
          </motion.div>
        </div>

        {/* 25.10: Delo & Philosophy of Roses */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
            className="text-left max-w-lg mb-8"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/50 mb-2">
              25.10.25 // DELO // MI&rsquo;AMORE
            </p>
            <p className="font-serif text-2xl md:text-3xl font-light text-paper leading-relaxed mb-3">
              Mi&rsquo;amore, pictures, and the philosophy of roses.
            </p>
            <p className="font-body text-sm text-paper-dim/60 leading-relaxed mb-3">
              Anwesha came along with us. Laughing, eating, taking pictures at Delo.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/45 italic leading-relaxed">
              I thought about how I never liked giving roses — because something that eventually dies shouldn&rsquo;t be a representation of my love. I would rather keep photographs, walks, inside jokes, brownies, conversations, and memories.
            </p>
          </motion.div>

          {photoDelo && (
            <div className="flex justify-start md:ml-4 my-10">
              <MemoryCard
                memory={photoDelo}
                rotate={0.8}
                aspect="4/3"
                style={{ maxWidth: '17rem' }}
              />
            </div>
          )}

          <MarginNote
            label={MARGIN_NOTES['note-roses'].label}
            text={MARGIN_NOTES['note-roses'].text}
            align="left"
          />
        </div>

      </div>
    </section>
  );
};
