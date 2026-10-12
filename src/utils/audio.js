/**
 * Procedural Horological Audio Engine using Web Audio API
 * Generates realistic mechanical watch escapement ticks and ratchet winding sounds.
 * Zero external audio files required. Safe, responsive, and muted by default.
 */

class HorologyAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = true; // Always start muted as specified
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized && this.ctx) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
        this.isInitialized = true;
      }
    } catch {
      // Audio not supported in environment
    }
  }

  toggleMute() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isMuted = !this.isMuted;
    return !this.isMuted;
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (!muted) {
      this.init();
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }
  }

  /**
   * Mechanical Escapement Tick
   * Mimics pallet fork jewel hitting escape wheel tooth
   */
  playTick(pitchOffset = 0) {
    if (this.isMuted || !this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') return;

      const now = this.ctx.currentTime;

      // Primary metallic transient
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Sharp bandpass to emulate small bronze/steel lever resonance
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(3200 + pitchOffset, now);
      filter.Q.setValueAtTime(12, now);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(3800 + pitchOffset, now);
      osc.frequency.exponentialRampToValueAtTime(1200 + pitchOffset, now + 0.015);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.03);

      // Micro echo / second escapement jewel tooth bounce
      setTimeout(() => {
        if (this.isMuted || !this.ctx || this.ctx.state === 'suspended') return;
        const now2 = this.ctx.currentTime;
        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(2400 + pitchOffset, now2);
        gain2.gain.setValueAtTime(0.03, now2);
        gain2.gain.exponentialRampToValueAtTime(0.0001, now2 + 0.012);
        osc2.connect(gain2);
        gain2.connect(this.ctx.destination);
        osc2.start(now2);
        osc2.stop(now2 + 0.015);
      }, 16);
    } catch {
      // Silently ignore if blocked
    }
  }

  /**
   * Mechanical Ratchet / Crown Click
   * Played when selecting a navigation number or opening complication
   */
  playRatchet() {
    if (this.isMuted || !this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') return;
      const now = this.ctx.currentTime;

      // Ratchet clicks sequence
      for (let i = 0; i < 3; i++) {
        const t = now + i * 0.035;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        filter.type = 'highpass';
        filter.frequency.setValueAtTime(2000, t);

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(1400 + i * 180, t);
        osc.frequency.exponentialRampToValueAtTime(800, t + 0.02);

        gain.gain.setValueAtTime(0.07, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.025);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t);
        osc.stop(t + 0.03);
      }
    } catch {
      // Silently ignore
    }
  }

  /**
   * Elegant Chime / Sonnerie Tone
   * Played when returning to dial or activating easter egg
   */
  playChime() {
    if (this.isMuted || !this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1174.66, now); // D6 note

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.3);
    } catch {
      // Silently ignore
    }
  }
}

export const horologyAudio = new HorologyAudioEngine();
