'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { messageData } from '@/data/message';
import { showToast } from '@/lib/toast';
import Playlist from '@/components/Playlist';
import FlipCards from '@/components/FlipCards';
import TypewriterText from '@/components/TypewriterText';

interface MessageCardProps {
  isRevealed: boolean;
  onRestart?: () => void;
}

export default function MessageCard({
  isRevealed,
  onRestart,
}: MessageCardProps) {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [showFlipCards, setShowFlipCards] = useState(false);
  const [typewriterComplete, setTypewriterComplete] = useState({
    signature: false,
    love: false,
    stamped: false,
  });
  const [stampText, setStampText] = useState({ love: '', stamped: '' });

  const handleEnvelopeClick = () => {
    setIsEnvelopeOpen(true);
    setTimeout(() => {
      setShowLetter(true);
      setTimeout(() => {
        typeText('LOVE', 'love', () =>
          setTypewriterComplete((prev) => ({ ...prev, love: true }))
        );
        setTimeout(() => {
          typeText('STAMPED', 'stamped', () =>
            setTypewriterComplete((prev) => ({ ...prev, stamped: true }))
          );
        }, 800);
      }, 1000);
    }, 400);
  };

  const typeText = (
    fullText: string,
    key: 'love' | 'stamped',
    onComplete: () => void
  ) => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setStampText((prev) => ({
          ...prev,
          [key]: fullText.slice(0, currentIndex),
        }));
        currentIndex++;
      } else {
        clearInterval(interval);
        onComplete();
      }
    }, 100);
  };

  if (!isRevealed) return null;

  if (showFlipCards) {
    return <FlipCards onRestart={onRestart} />;
  }

  if (showPlaylist) {
    return <Playlist onContinue={() => setShowFlipCards(true)} />;
  }

  return (
    <div className="page-container font-display relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6">

      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-6 animate-slideDown">
          <div className="text-center">
            <h2 className="text-[#f04299] text-lg sm:text-xl font-bold leading-tight">
              A Letter For You 💌
            </h2>
            <div className="text-xs text-[#9a4c73] mt-1">
              Something I wanted to tell you
            </div>
          </div>
        </div>

        {/* Envelope */}
        <div className="bg-[#FFF8E7] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-pink-200 shadow-xl animate-fadeIn overflow-hidden">
          <AnimatePresence mode="wait">
            {!isEnvelopeOpen ? (
              <motion.div
                key="closed"
                className="flex flex-col items-center justify-center min-h-[400px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div
                  className="cursor-pointer hover:scale-105 transition"
                  onClick={handleEnvelopeClick}
                >
                  <div className="w-80 h-56 bg-gradient-to-br from-[#FFE4E6] to-[#FFF0F5] rounded-lg shadow-lg border-2 border-pink-200 flex items-center justify-center">
                    <div className="text-4xl animate-pulse">💌</div>
                  </div>

                  <div className="text-center mt-6">
                    <p className="text-sm text-[#9a4c73]">
                      Tap to open
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {showLetter && (
                  <motion.div
                    className="bg-white rounded-xl p-6 sm:p-8 shadow-inner border border-pink-100"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    {/* Letter */}
                    <div className="text-sm sm:text-base text-[#1b0d14] leading-relaxed">

                      <div className="mb-4 text-[#f04299] font-medium">
                        Umishka maya,
                      </div>

                      <div style={{ textIndent: '2rem' }}>
                        I don’t even know when this started… but somehow, you became someone I think about more than I should.

                        It’s not just what you do — it’s you. The way you smile, the way you talk, the way you exist… it all just stays in my mind longer than anything else.

                        Being with you feels easy. No pressure, no pretending… just real. And honestly, that’s rare.

                        I don’t need anything perfect. I don’t need everything figured out.

                        I just know… I like you. A lot more than I planned to.
                      </div>

                      <div className="mt-8 text-right text-[#f04299] font-medium">
                        <TypewriterText
                          text="Always yours 💕"
                          duration={2}
                          delay={0}
                          onComplete={() =>
                            setTypewriterComplete((prev) => ({
                              ...prev,
                              signature: true,
                            }))
                          }
                          showCursor={false}
                        />
                      </div>

                    </div>

                    {typewriterComplete.signature && (
                      <div className="flex justify-center mt-6">
                        <button
                          onClick={() => setShowPlaylist(true)}
                          className="px-6 py-2 bg-[#f04299] text-white rounded-full"
                        >
                          Continue ✨
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}