import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface EntryEffectProps {
  onComplete: () => void;
}

const EntryEffect: React.FC<EntryEffectProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Play subtle entry sound
    const playEntrySound = () => {
      try {
        // Create a subtle, professional chime sound using Web Audio API
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        
        // Create a gentle bell-like sound
        const oscillator1 = audioContext.createOscillator();
        const oscillator2 = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator1.connect(gainNode);
        oscillator2.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Set frequencies for a pleasant chord
        oscillator1.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
        oscillator2.frequency.setValueAtTime(659.25, audioContext.currentTime); // E5
        
        oscillator1.type = 'sine';
        oscillator2.type = 'sine';
        
        // Very gentle volume
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.5);
        
        oscillator1.start(audioContext.currentTime);
        oscillator2.start(audioContext.currentTime);
        oscillator1.stop(audioContext.currentTime + 1.5);
        oscillator2.stop(audioContext.currentTime + 1.5);
      } catch (error) {
        // Silently fail if audio context is not supported
        console.log('Audio context not supported');
      }
    };

    const timer1 = setTimeout(() => {
      setAnimationPhase(1);
      playEntrySound();
    }, 200);

    const timer2 = setTimeout(() => {
      setAnimationPhase(2);
    }, 1200);

    const timer3 = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 flex items-center justify-center transition-opacity duration-300 ${
      !isVisible ? 'opacity-0' : 'opacity-100'
    }`}>
      <div className="text-center text-white">
        {/* Logo Animation */}
        <div className={`mb-6 transform transition-all duration-1000 ${
          animationPhase >= 1 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}>
          <div className="relative">
            <img 
              src="/humo_logo.png" 
              alt="Humo Agency" 
              className="w-24 h-24 mx-auto rounded-2xl shadow-2xl"
            />
            <div className={`absolute -inset-4 rounded-3xl bg-white/20 transition-all duration-1000 ${
              animationPhase >= 1 ? 'animate-pulse' : ''
            }`}></div>
          </div>
        </div>

        {/* Text Animation */}
        <div className={`transform transition-all duration-1000 delay-300 ${
          animationPhase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h1 className="text-2xl font-bold mb-2">Humo Agency</h1>
          <p className="text-lg opacity-90">Your Dreams, Our Mission</p>
        </div>

        {/* Sparkle Effects */}
        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
          animationPhase >= 2 ? 'opacity-100' : 'opacity-0'
        }`}>
          {[...Array(6)].map((_, i) => (
            <Sparkles
              key={i}
              className={`absolute w-6 h-6 text-white/60 animate-pulse`}
              style={{
                left: `${20 + (i * 12)}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EntryEffect;