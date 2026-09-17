import React from 'react';
import { motion } from 'framer-motion';
import { MEMORY_ARCHIVE, MARGIN_NOTES } from '../../data/memories';
import { MemoryCard } from '../ui/MemoryCard';
import { MarginNote } from '../ui/MarginNote';

/**
 * CHAPTER II — PLACES (THE GEOGRAPHY OF MEMORY)
 *
 * Distinct location memory clusters:
 * - DURPIN
 * - MANGALDHAM
 * - BUS STAND (17.10)
 * - INDUSTRIAL PARK (26.09)
 * - SUNRISE
 */
export const Places: React.FC = () => {
  const photoDurpin = MEMORY_ARCHIVE.find(m => m.id === 'photo-durpin');
  const photoBusStand = MEMORY_ARCHIVE.find(m => m.id === 'photo-busstand');
  const photoIndustrial = MEMORY_ARCHIVE.find(m => m.id === 'photo-industrial');
  const photoSunrise = MEMORY_ARCHIVE.find(m => m.id === 'photo-sunrise');

  return (
    <section id="places" className="relative w-full px-6 md:px-12 py-28 md:py-44">
      <div className="max-w-2xl mx-auto w-full">

        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 2 }}
          className="text-center mb-24 md:mb-36"
        >
          <p className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-ink-faint/40 mb-3">
            CHAPTER II
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.15em] text-paper">
            PLACES
          </h2>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/35 mt-2">
            THE GEOGRAPHY OF MEMORY
          </p>
        </motion.div>

        {/* ==========================================
            1. DURPIN
           ========================================== */}
        <div className="mb-28 md:mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-left mb-10"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/45 mb-2">
              LOCATION 01 // DURPIN
            </p>
            <p className="font-serif text-2xl md:text-3xl font-light text-paper leading-relaxed mb-3">
              The wind at the ridge.
            </p>
            <p className="font-body text-sm md:text-base text-paper-dim/50 leading-relaxed max-w-md">
              You stood there with your jacket pulled tight against the cold. Tired, but quietly proud you had made it to the top.
            </p>
          </motion.div>

          {photoDurpin && (
            <div className="flex justify-start my-10 md:my-14 md:ml-4">
              <MemoryCard
                memory={photoDurpin}
                rotate={-0.8}
                aspect="4/3"
                style={{ maxWidth: '16rem' }}
              />
            </div>
          )}
        </div>

        {/* ==========================================
            2. MANGALDHAM
           ========================================== */}
        <div className="mb-28 md:mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
            className="text-center max-w-lg mx-auto mb-10"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-amber/60 mb-3">
              LOCATION 02 // MANGALDHAM
            </p>
            <p className="font-serif text-2xl md:text-3xl font-light italic text-paper leading-relaxed mb-4">
              I remember what I wished for there.
            </p>
            <p className="font-body text-sm md:text-base text-paper-dim/60 leading-relaxed mb-6">
              I had asked for someone who would love me for who I actually was. And then, moments later, a guard nearly threw us out because he thought we were a couple.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/40 italic leading-relaxed">
              Looking back, it felt almost like the universe answering before I had even finished asking.
            </p>
          </motion.div>

          <MarginNote
            label={MARGIN_NOTES['places-01'].label}
            text={MARGIN_NOTES['places-01'].text}
            align="center"
          />
        </div>

        {/* ==========================================
            3. BUS STAND (17.10)
           ========================================== */}
        <div className="mb-28 md:mb-40">
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-right max-w-md ml-auto mb-10"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/50 mb-2">
              LOCATION 03 // 17.10 // BUS STAND
            </p>
            <p className="font-serif text-xl md:text-2xl font-light text-paper leading-relaxed mb-3">
              You waited for me at the bus stand.
            </p>
            <p className="font-body text-sm text-paper-dim/50 leading-relaxed">
              You were waiting for me, not for juice. The juice was just my apology when I finally arrived.
            </p>
          </motion.div>

          {photoBusStand && (
            <div className="flex justify-end my-10 md:my-14 md:mr-4">
              <MemoryCard
                memory={photoBusStand}
                rotate={1.5}
                aspect="4/3"
                style={{ maxWidth: '17rem' }}
              />
            </div>
          )}

          <MarginNote
            label={MARGIN_NOTES['places-02'].label}
            text={MARGIN_NOTES['places-02'].text}
            align="right"
          />
        </div>

        {/* ==========================================
            4. INDUSTRIAL PARK (26.09)
           ========================================== */}
        <div className="mb-28 md:mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-left max-w-md mb-8"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/45 mb-2">
              LOCATION 04 // 26.09 // INDUSTRIAL PARK
            </p>
            <p className="font-serif text-xl md:text-2xl font-light italic text-paper leading-relaxed mb-2">
              We looked ridiculous.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/40 italic">
              I don&rsquo;t remember what we were laughing about anymore. Just that we couldn&rsquo;t stop.
            </p>
          </motion.div>

          {photoIndustrial && (
            <div className="flex justify-start my-8 md:my-12">
              <MemoryCard
                memory={photoIndustrial}
                rotate={-1.4}
                aspect="3/4"
                style={{ maxWidth: '14rem' }}
              />
            </div>
          )}
        </div>

        {/* ==========================================
            5. SUNRISE
           ========================================== */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
            className="text-center max-w-lg mx-auto mb-10"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/45 mb-2">
              LOCATION 05 // DAWN
            </p>
            <p className="font-serif text-2xl md:text-3xl font-light text-paper leading-relaxed mb-3">
              You were filming the sunrise.
            </p>
            <p className="font-body text-sm md:text-base text-paper-dim/60 leading-relaxed">
              I remember gently holding your elbow so the shot wouldn&rsquo;t shake. Such a tiny thing. I don&rsquo;t think either of us knew we&rsquo;d remember things like that.
            </p>
          </motion.div>

          {photoSunrise && (
            <div className="flex justify-center my-10 md:my-14">
              <MemoryCard
                memory={photoSunrise}
                rotate={0.5}
                aspect="16/9"
                style={{ maxWidth: '22rem' }}
              />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
