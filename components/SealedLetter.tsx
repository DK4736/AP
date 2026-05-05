'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SealedLetterProps {
  onExperienceAgain?: () => void;
  onSendKiss?: () => void;
}

interface KissParticle {
  id: number;
  x: number;
  driftX: number;
  rotation: number;
}

export default function SealedLetter({
  onExperienceAgain,
  onSendKiss,
}: SealedLetterProps) {
  const [kissParticles, setKissParticles] = useState<KissParticle[]>([]);

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleSendKiss = () => {
    const particles: KissParticle[] = [];
    for (let i = 0; i < 15; i++) {
      particles.push({
        id: Date.now() + i,
        x: 50 + (Math.random() - 0.5) * 30,
        driftX: (Math.random() - 0.5) * 50,
        rotation: Math.random() * 360,
      });
    }
    setKissParticles(particles);

    if (onSendKiss) {
      onSendKiss();
    }

    setTimeout(() => {
      setKissParticles([]);
    }, 1600);
  };

  return (
    <div className="page-container">
      <div className="font-display min-h-screen flex items-center justify-center py-10 px-4 bg-[#FFF4F8] relative overflow-hidden">

        <div className="relative z-10 w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-[#FFF8E7] rounded-3xl p-8 sm:p-10 shadow-2xl border border-pink-100 text-center"
          >
            {/* Icon */}
            <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-gradient-to-br from-[#ffbcd2] to-[#ffd1dc] flex items-center justify-center shadow-inner">
              <div className="text-4xl">💝</div>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-black text-[#f04299] mb-2">
              Sealed Just For You
            </h2>

            <p className="text-sm sm:text-base text-[#9a4c73] mb-5">
              For you, my princess 👸
            </p>

            {/* Hearts */}
            <div className="flex justify-center gap-2 mb-5">
              {[0, 140, 280, 420, 560, 700, 840].map((delay, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#ffb6c1] animate-pulse-heart"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              ))}
            </div>

            {/* Final line */}
            <div className="text-lg sm:text-xl font-semibold text-[#1b0d14] mb-1">
              <span className="text-[#c0396f]">
                Always yours, Умишкам мая 💕
              </span>
            </div>

            {/* Date */}
            <div className="text-xs text-[#9a4c73] mb-6">{currentDate}</div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 relative">
              <AnimatePresence>
                {kissParticles.map((particle) => (
                  <motion.div
                    key={particle.id}
                    className="kiss-particle"
                    style={{
                      left: `${particle.x}%`,
                      // @ts-ignore
                      '--driftX': `${particle.driftX}px`,
                      // @ts-ignore
                      '--rot': `${particle.rotation}deg`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <span className="text-2xl">💋</span>
                  </motion.div>
                ))}
              </AnimatePresence>

              {onExperienceAgain && (
                <button
                  onClick={onExperienceAgain}
                  className="rounded-full bg-[#f04299] text-white px-5 py-2.5 text-sm sm:text-base font-semibold shadow hover:scale-105 transition cursor-pointer"
                >
                  See It Again ✨
                </button>
              )}

              <button
                onClick={handleSendKiss}
                className="rounded-full bg-[#9be7c4] px-5 py-2.5 text-sm sm:text-base font-medium shadow hover:brightness-95 transition cursor-pointer"
              >
                Send You a Kiss 💋 and I hope it will be real one day 😘
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}