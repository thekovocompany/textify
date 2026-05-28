import React, { useState, useEffect, useRef } from 'react';
import { 
  Smile, 
  Zap, 
  Ghost, 
  Keyboard, 
  Flame, 
  Sparkles, 
  RotateCcw,
  Feather,
  Monitor,
  Moon,
  ArrowUpCircle,
  Lightbulb,
  Download,
  Video,
  FileCode2,
  Image as ImageIcon,
  RefreshCw,
  Heart,
  Minimize2,
  Waves,
  Star,
  Activity,
  Palette,
  Music,
  Cloud,
  Box,
  Wind,
  Droplets,
  Tornado,
  Clock,
  Anchor,
  Bell,
  Cpu,
  Infinity as InfinityIcon,
  Target,
  Shield,
  ZapOff
} from 'lucide-react';

// Store raw CSS in a variable so we can inject it into the app AND our exported files
const STYLE_CONTENT = `
  @keyframes anim-joyful {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-15px) scale(1.1); color: #10b981; }
  }
  @keyframes anim-nervous {
    0%, 100% { transform: translateX(0) rotate(0); }
    25% { transform: translateX(-2px) rotate(-3deg); }
    75% { transform: translateX(2px) rotate(3deg); }
  }
  @keyframes anim-ghostly {
    0%, 100% { opacity: 0.2; filter: blur(4px); transform: translateY(5px) scale(0.95) skew(-5deg); color: #94a3b8; }
    50% { opacity: 0.9; filter: blur(0px); transform: translateY(-5px) scale(1.05) skew(5deg); color: #f8fafc; }
  }
  @keyframes anim-typing {
    0% { opacity: 0; transform: translateY(10px) scale(0.9); }
    100% { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes anim-angry {
    0%, 100% { transform: scale(1); }
    20% { transform: scale(1.1) rotate(-2deg); color: #ef4444; text-shadow: 0px 0px 8px rgba(239, 68, 68, 0.6); }
    40% { transform: scale(1.1) rotate(2deg); color: #dc2626; text-shadow: 0px 0px 12px rgba(220, 38, 38, 0.8); }
    60% { transform: scale(1.15) rotate(-1deg); color: #b91c1c; text-shadow: 0px 0px 16px rgba(185, 28, 28, 0.9); }
    80% { transform: scale(1.1) rotate(1deg); color: #ef4444; }
  }
  @keyframes anim-magical {
    0% { color: #8b5cf6; filter: hue-rotate(0deg) drop-shadow(0 0 2px #8b5cf6); transform: translateY(0); }
    50% { color: #ec4899; filter: hue-rotate(180deg) drop-shadow(0 0 6px #ec4899); transform: translateY(-5px); }
    100% { color: #8b5cf6; filter: hue-rotate(360deg) drop-shadow(0 0 2px #8b5cf6); transform: translateY(0); }
  }
  @keyframes anim-float {
    0%, 100% { transform: translateY(0) rotate(0); }
    50% { transform: translateY(-10px) rotate(2deg); }
  }
  @keyframes anim-glitch {
    0% { transform: translate(0); text-shadow: none; }
    20% { transform: translate(-2px, 1px); text-shadow: 2px 0 #06b6d4, -2px 0 #d946ef; }
    40% { transform: translate(2px, -1px); text-shadow: -2px 0 #06b6d4, 2px 0 #d946ef; }
    60% { transform: translate(0); text-shadow: none; }
    80% { transform: translate(1px, 2px); text-shadow: 2px 0 #06b6d4, -2px 0 #d946ef; }
    100% { transform: translate(0); text-shadow: none; }
  }
  @keyframes anim-sleepy {
    0%, 100% { transform: translateY(0) rotate(0) scale(1); opacity: 1; }
    50% { transform: translateY(5px) rotate(-6deg) scale(0.95); opacity: 0.6; color: #64748b; }
  }
  @keyframes anim-bounce {
    0%, 100% { transform: translateY(0); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
    50% { transform: translateY(-25px); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); color: #f59e0b; }
  }
  @keyframes anim-neon {
    0%, 100% { color: #fff; text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #0ea5e9, 0 0 40px #0ea5e9, 0 0 80px #0ea5e9; }
    50% { color: #e0f2fe; text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 10px #0ea5e9, 0 0 20px #0ea5e9, 0 0 40px #0ea5e9; }
  }
  @keyframes anim-dizzy {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(0.8); color: #f472b6; }
    100% { transform: rotate(360deg) scale(1); }
  }
  @keyframes anim-pulse {
    0%, 100% { transform: scale(1); }
    30% { transform: scale(1.2); color: #fb7185; }
    50% { transform: scale(1); }
    70% { transform: scale(1.2); color: #fb7185; }
  }
  @keyframes anim-squeeze {
    0%, 100% { transform: scale(1, 1); }
    50% { transform: scale(0.6, 1.2); color: #34d399; }
  }
  @keyframes anim-wave {
    0%, 100% { transform: translateY(0); }
    25% { transform: translateY(-15px); }
    75% { transform: translateY(15px); }
  }
  
  /* --- MASSIVE NEW EFFECTS BUNDLE --- */
  @keyframes anim-jello { 0%,100%{transform:scale3d(1,1,1)} 30%{transform:scale3d(1.25,.75,1)} 40%{transform:scale3d(.75,1.25,1)} 50%{transform:scale3d(1.15,.85,1)} 65%{transform:scale3d(.95,1.05,1)} 75%{transform:scale3d(1.05,.95,1)} }
  @keyframes anim-rubberband { 0%,100%{transform:scale3d(1,1,1)} 30%{transform:scale3d(1.25,.75,1)} 40%{transform:scale3d(.75,1.25,1)} 50%{transform:scale3d(1.15,.85,1)} 65%{transform:scale3d(.95,1.05,1)} 75%{transform:scale3d(1.05,.95,1)} } 
  @keyframes anim-spin { 100% { transform: rotate(360deg); } }
  @keyframes anim-spin-reverse { 100% { transform: rotate(-360deg); } }
  @keyframes anim-spin-x { 100% { transform: rotateX(360deg); } }
  @keyframes anim-spin-y { 100% { transform: rotateY(360deg); } }
  @keyframes anim-swing { 20% { transform: rotate3d(0, 0, 1, 15deg); } 40% { transform: rotate3d(0, 0, 1, -10deg); } 60% { transform: rotate3d(0, 0, 1, 5deg); } 80% { transform: rotate3d(0, 0, 1, -5deg); } 100% { transform: rotate3d(0, 0, 1, 0deg); } }
  @keyframes anim-tada { 0%,100%{transform:scale3d(1,1,1)} 10%,20%{transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)} 30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)} 40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)} }
  @keyframes anim-rainbow { 0%{color:#ef4444} 14%{color:#f97316} 28%{color:#eab308} 42%{color:#22c55e} 57%{color:#3b82f6} 71%{color:#6366f1} 85%{color:#a855f7} 100%{color:#ef4444} }
  @keyframes anim-rainbow-bg { 0%{background-color:#ef4444; color:white;} 14%{background-color:#f97316;} 28%{background-color:#eab308; color:black;} 42%{background-color:#22c55e;} 57%{background-color:#3b82f6; color:white;} 71%{background-color:#6366f1;} 85%{background-color:#a855f7;} 100%{background-color:#ef4444; color:white;} }
  @keyframes anim-shake-x { 0%,100%{transform:translate3d(0,0,0)} 10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)} 20%,40%,60%,80%{transform:translate3d(10px,0,0)} }
  @keyframes anim-shake-y { 0%,100%{transform:translate3d(0,0,0)} 10%,30%,50%,70%,90%{transform:translate3d(0,-10px,0)} 20%,40%,60%,80%{transform:translate3d(0,10px,0)} }
  @keyframes anim-dance { 0%,100%{transform:translateY(0)} 25%{transform:translateY(-10px) rotate(5deg)} 75%{transform:translateY(10px) rotate(-5deg)} }
  @keyframes anim-blur-pulse { 0%,100%{filter:blur(0px); opacity:1;} 50%{filter:blur(6px); opacity:0.4;} }
  @keyframes anim-matrix { 0%,100%{color:#22c55e; text-shadow:0 0 5px #22c55e; transform:translateY(0)} 50%{color:#166534; text-shadow:none; transform:translateY(3px)} }
  @keyframes anim-earthquake { 0%,100%{transform:translate(0,0) rotate(0)} 10%{transform:translate(-2px,-2px) rotate(-1deg)} 20%{transform:translate(2px,2px) rotate(1deg)} 30%{transform:translate(-2px,2px) rotate(0)} 40%{transform:translate(2px,-2px) rotate(1deg)} 50%{transform:translate(-2px,0) rotate(-1deg)} 60%{transform:translate(2px,0) rotate(0)} 70%{transform:translate(0,2px) rotate(-1deg)} 80%{transform:translate(0,-2px) rotate(1deg)} 90%{transform:translate(2px,2px) rotate(0)} }
  @keyframes anim-shiver { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-2px)} 75%{transform:translateX(2px)} }
  @keyframes anim-melt { 0%,100%{transform:scaleY(1); transform-origin:bottom; filter:blur(0)} 50%{transform:scaleY(0.4); transform-origin:bottom; filter:blur(2px); color:#38bdf8} }
  @keyframes anim-twister { 0%{transform:rotate(0) scale(1)} 50%{transform:rotate(180deg) scale(0.5)} 100%{transform:rotate(360deg) scale(1)} }
  @keyframes anim-pendulum { 0%,100%{transform:rotate(20deg); transform-origin:top} 50%{transform:rotate(-20deg); transform-origin:top} }
  @keyframes anim-seesaw { 0%,100%{transform:rotate(15deg); transform-origin:bottom} 50%{transform:rotate(-15deg); transform-origin:bottom} }
  @keyframes anim-zoom { 0%,100%{transform:scale(1)} 50%{transform:scale(1.8); color:#a855f7} }
  @keyframes anim-shrink { 0%,100%{transform:scale(1)} 50%{transform:scale(0.3); opacity:0.2} }
  @keyframes anim-flip-in { 0%{transform:perspective(400px) rotateY(90deg); opacity:0} 100%{transform:perspective(400px) rotateY(0); opacity:1} }
  @keyframes anim-slide-up { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-35px)} }
  @keyframes anim-slide-down { 0%,100%{transform:translateY(0)} 50%{transform:translateY(35px)} }
  @keyframes anim-letter-spacing { 0%,100%{letter-spacing:normal} 50%{letter-spacing:15px; color:#f43f5e} }
  @keyframes anim-stretch-y { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(2.2); color:#10b981} }
  @keyframes anim-stretch-x { 0%,100%{transform:scaleX(1)} 50%{transform:scaleX(2.2); color:#8b5cf6} }
  @keyframes anim-pop { 0%,100%{transform:scale(1)} 50%{transform:scale(1.3); color:#ef4444} }
  @keyframes anim-fade { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes anim-glow-red { 0%,100%{text-shadow:0 0 5px #f87171, 0 0 10px #f87171} 50%{text-shadow:0 0 20px #ef4444, 0 0 40px #ef4444; color:#fff} }
  @keyframes anim-glow-blue { 0%,100%{text-shadow:0 0 5px #60a5fa, 0 0 10px #60a5fa} 50%{text-shadow:0 0 20px #3b82f6, 0 0 40px #3b82f6; color:#fff} }
  @keyframes anim-glow-green { 0%,100%{text-shadow:0 0 5px #4ade80, 0 0 10px #4ade80} 50%{text-shadow:0 0 20px #22c55e, 0 0 40px #22c55e; color:#fff} }
  @keyframes anim-yoyo { 0%,100%{transform:translateY(0)} 25%{transform:translateY(-25px)} 75%{transform:translateY(25px)} }
  @keyframes anim-zigzag { 0%,100%{transform:translate(0,0)} 25%{transform:translate(15px,-15px)} 50%{transform:translate(30px,0)} 75%{transform:translate(15px,15px)} }
  @keyframes anim-float-x { 0%,100%{transform:translateX(0)} 50%{transform:translateX(20px)} }
  @keyframes anim-breathe { 0%,100%{transform:scale(1)} 50%{transform:scale(1.08)} }
  @keyframes anim-color-cycle { 0%{color:#ef4444} 25%{color:#3b82f6} 50%{color:#10b981} 75%{color:#f59e0b} 100%{color:#ef4444} }
  @keyframes anim-shadow-drop { 0%,100%{text-shadow:0 0 0 rgba(0,0,0,0); transform:translate(0,0)} 50%{text-shadow:10px 10px 15px rgba(139,92,246,0.6); transform:translate(-5px,-5px)} }
  @keyframes anim-wobble-bottom { 0%,100%{transform:rotate(0); transform-origin:bottom} 25%{transform:rotate(12deg); transform-origin:bottom} 75%{transform:rotate(-12deg); transform-origin:bottom} }
  @keyframes anim-wobble-top { 0%,100%{transform:rotate(0); transform-origin:top} 25%{transform:rotate(12deg); transform-origin:top} 75%{transform:rotate(-12deg); transform-origin:top} }
  @keyframes anim-jump { 0%,100%{transform:translateY(0)} 40%{transform:translateY(-40px)} 50%{transform:translateY(-40px) scale(1.1,0.9)} }
  @keyframes anim-skate { 0%,100%{transform:translateX(0) skewX(0)} 25%{transform:translateX(25px) skewX(-20deg)} 75%{transform:translateX(-25px) skewX(20deg)} }
  @keyframes anim-hiccup { 0%,100%{transform:scale(1) translateY(0)} 10%{transform:scale(1.2) translateY(-15px)} 20%{transform:scale(1) translateY(0)} }
  @keyframes anim-squabble { 0%,100%{transform:translateX(0) scale(1)} 25%{transform:translateX(-6px) scale(1.1)} 75%{transform:translateX(6px) scale(0.9)} }
  @keyframes anim-float-away { 0%{opacity:1; transform:translateY(0) scale(1)} 100%{opacity:0; transform:translateY(-60px) scale(1.5)} }
  @keyframes anim-sink { 0%{opacity:1; transform:translateY(0) scale(1)} 100%{opacity:0; transform:translateY(60px) scale(0.5)} }
  @keyframes anim-vibrate { 0%,100%{transform:translate(0)} 20%{transform:translate(-3px,3px)} 40%{transform:translate(-3px,-3px)} 60%{transform:translate(3px,3px)} 80%{transform:translate(3px,-3px)} }
  @keyframes anim-sonar { 0%{transform:scale(1); opacity:1} 100%{transform:scale(2.5); opacity:0} }

  .animate-joyful { animation: anim-joyful 0.8s ease-in-out infinite; }
  .animate-nervous { animation: anim-nervous 0.15s linear infinite; }
  .animate-ghostly { animation: anim-ghostly 3s ease-in-out infinite; }
  .animate-typing { animation: anim-typing 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; opacity: 0; }
  .animate-angry { animation: anim-angry 0.4s infinite; }
  .animate-magical { animation: anim-magical 2s linear infinite; }
  .animate-float { animation: anim-float 4s ease-in-out infinite; }
  .animate-glitch { animation: anim-glitch 0.3s steps(2, end) infinite; }
  .animate-sleepy { animation: anim-sleepy 4s ease-in-out infinite; }
  .animate-bounce { animation: anim-bounce 0.6s infinite; }
  .animate-neon { animation: anim-neon 1.5s ease-in-out infinite; }
  .animate-dizzy { animation: anim-dizzy 2s linear infinite; }
  .animate-pulse { animation: anim-pulse 1.2s ease-in-out infinite; }
  .animate-squeeze { animation: anim-squeeze 0.8s ease-in-out infinite; }
  .animate-wave { animation: anim-wave 1.5s ease-in-out infinite; }
  
  /* NEW EFFECT CLASSES */
  .animate-jello { animation: anim-jello 1.2s infinite; }
  .animate-rubberband { animation: anim-rubberband 1s infinite; }
  .animate-spin { animation: anim-spin 2s linear infinite; }
  .animate-spin-reverse { animation: anim-spin-reverse 2s linear infinite; }
  .animate-spin-x { animation: anim-spin-x 2s linear infinite; }
  .animate-spin-y { animation: anim-spin-y 2s linear infinite; }
  .animate-swing { animation: anim-swing 1.5s infinite; transform-origin: top center; }
  .animate-tada { animation: anim-tada 1.2s infinite; }
  .animate-rainbow { animation: anim-rainbow 3s linear infinite; }
  .animate-rainbow-bg { animation: anim-rainbow-bg 3s linear infinite; padding: 0 4px; border-radius: 6px; }
  .animate-shake-x { animation: anim-shake-x 1s infinite; }
  .animate-shake-y { animation: anim-shake-y 1s infinite; }
  .animate-dance { animation: anim-dance 0.6s ease-in-out infinite; }
  .animate-blur-pulse { animation: anim-blur-pulse 2s infinite; }
  .animate-matrix { animation: anim-matrix 0.3s steps(2) infinite; font-family: monospace; }
  .animate-earthquake { animation: anim-earthquake 0.15s infinite; }
  .animate-shiver { animation: anim-shiver 0.08s infinite; }
  .animate-melt { animation: anim-melt 2.5s ease-in-out infinite; }
  .animate-twister { animation: anim-twister 1.2s linear infinite; }
  .animate-pendulum { animation: anim-pendulum 2s ease-in-out infinite; }
  .animate-seesaw { animation: anim-seesaw 2s ease-in-out infinite; }
  .animate-zoom { animation: anim-zoom 1.5s ease-in-out infinite; }
  .animate-shrink { animation: anim-shrink 1.8s ease-in-out infinite; }
  .animate-flip-in { animation: anim-flip-in 1.5s ease-out infinite alternate; }
  .animate-slide-up { animation: anim-slide-up 2s ease-in-out infinite; }
  .animate-slide-down { animation: anim-slide-down 2s ease-in-out infinite; }
  .animate-letter-spacing { animation: anim-letter-spacing 2s ease-in-out infinite; }
  .animate-stretch-y { animation: anim-stretch-y 1.2s ease-in-out infinite; }
  .animate-stretch-x { animation: anim-stretch-x 1.2s ease-in-out infinite; }
  .animate-pop { animation: anim-pop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite; }
  .animate-fade { animation: anim-fade 2s ease-in-out infinite; }
  .animate-glow-red { animation: anim-glow-red 1.5s ease-in-out infinite; color: #fff; }
  .animate-glow-blue { animation: anim-glow-blue 1.5s ease-in-out infinite; color: #fff; }
  .animate-glow-green { animation: anim-glow-green 1.5s ease-in-out infinite; color: #fff; }
  .animate-yoyo { animation: anim-yoyo 1.2s ease-in-out infinite; }
  .animate-zigzag { animation: anim-zigzag 1.5s linear infinite alternate; }
  .animate-float-x { animation: anim-float-x 3s ease-in-out infinite; }
  .animate-breathe { animation: anim-breathe 3s ease-in-out infinite; }
  .animate-color-cycle { animation: anim-color-cycle 1.5s infinite; }
  .animate-shadow-drop { animation: anim-shadow-drop 2s ease-in-out infinite; }
  .animate-wobble-bottom { animation: anim-wobble-bottom 1.2s ease-in-out infinite; }
  .animate-wobble-top { animation: anim-wobble-top 1.2s ease-in-out infinite; }
  .animate-jump { animation: anim-jump 1.2s infinite; }
  .animate-skate { animation: anim-skate 1.5s ease-in-out infinite; }
  .animate-hiccup { animation: anim-hiccup 2s infinite; }
  .animate-squabble { animation: anim-squabble 0.4s infinite; }
  .animate-float-away { animation: anim-float-away 2.5s ease-in infinite; }
  .animate-sink { animation: anim-sink 2.5s ease-in infinite; }
  .animate-vibrate { animation: anim-vibrate 0.1s infinite; }
  .animate-sonar { animation: anim-sonar 1.8s infinite; }
`;

const CustomStyles = () => <style>{STYLE_CONTENT}</style>;

const personalities = [
  { id: 'joyful', name: 'Joyful', icon: Smile, split: 'char', baseClass: 'inline-block', animClass: 'animate-joyful', stagger: 0.05, desc: 'Bouncy and happy' },
  { id: 'bounce', name: 'Bouncy', icon: ArrowUpCircle, split: 'char', baseClass: 'inline-block', animClass: 'animate-bounce', stagger: 0.08, desc: 'High energy jumps' },
  { id: 'neon', name: 'Neon', icon: Lightbulb, split: 'char', baseClass: 'inline-block', animClass: 'animate-neon', stagger: 0.1, desc: 'Glowing cyberpunk signs' },
  { id: 'nervous', name: 'Nervous', icon: Zap, split: 'word', baseClass: 'inline-block mx-1', animClass: 'animate-nervous', stagger: 0.1, desc: 'Shaking and anxious' },
  { id: 'ghostly', name: 'Ghostly', icon: Ghost, split: 'char', baseClass: 'inline-block', animClass: 'animate-ghostly', stagger: 0.2, desc: 'Ethereal and fading' },
  { id: 'typing', name: 'Typing', icon: Keyboard, split: 'char', baseClass: 'inline-block', animClass: 'animate-typing', stagger: 0.05, desc: 'Appears keystroke by keystroke' },
  { id: 'angry', name: 'Angry', icon: Flame, split: 'word', baseClass: 'inline-block mx-1 font-bold', animClass: 'animate-angry', stagger: 0.08, desc: 'Pulsing with rage' },
  { id: 'magical', name: 'Magical', icon: Sparkles, split: 'char', baseClass: 'inline-block', animClass: 'animate-magical', stagger: 0.1, desc: 'Shimmering colors' },
  { id: 'glitch', name: 'Glitch', icon: Monitor, split: 'word', baseClass: 'inline-block mx-1 font-mono font-bold tracking-tighter', animClass: 'animate-glitch', stagger: 0.15, desc: 'Digital distortion' },
  { id: 'sleepy', name: 'Sleepy', icon: Moon, split: 'char', baseClass: 'inline-block', animClass: 'animate-sleepy', stagger: 0.3, desc: 'Slowly drooping' },
  { id: 'dizzy', name: 'Dizzy', icon: RefreshCw, split: 'char', baseClass: 'inline-block', animClass: 'animate-dizzy', stagger: 0.1, desc: 'Spinning around' },
  { id: 'pulse', name: 'Pulse', icon: Heart, split: 'char', baseClass: 'inline-block', animClass: 'animate-pulse', stagger: 0.05, desc: 'Heartbeat rhythm' },
  { id: 'squeeze', name: 'Squeeze', icon: Minimize2, split: 'char', baseClass: 'inline-block', animClass: 'animate-squeeze', stagger: 0.1, desc: 'Squishing vertically' },
  { id: 'wave', name: 'Wave', icon: Waves, split: 'char', baseClass: 'inline-block', animClass: 'animate-wave', stagger: 0.1, desc: 'Smooth rolling wave' },
  
  // THE 50+ EFFECTS EXPANSION BUNDLE
  { id: 'jello', name: 'Jello', icon: Activity, split: 'char', baseClass: 'inline-block', animClass: 'animate-jello', stagger: 0.1, desc: 'Wobbles like jelly' },
  { id: 'rubberband', name: 'Rubberband', icon: Activity, split: 'word', baseClass: 'inline-block mx-1', animClass: 'animate-rubberband', stagger: 0.15, desc: 'Stretches and snaps' },
  { id: 'spin', name: 'Spin', icon: RefreshCw, split: 'char', baseClass: 'inline-block', animClass: 'animate-spin', stagger: 0.1, desc: 'Rotates 360 degrees' },
  { id: 'spin-reverse', name: 'Reverse Spin', icon: RefreshCw, split: 'char', baseClass: 'inline-block', animClass: 'animate-spin-reverse', stagger: 0.1, desc: 'Rotates backwards' },
  { id: 'spin-x', name: 'Flip Vertical', icon: Box, split: 'char', baseClass: 'inline-block', animClass: 'animate-spin-x', stagger: 0.1, desc: 'Flips on X axis' },
  { id: 'spin-y', name: 'Flip Horizontal', icon: Box, split: 'char', baseClass: 'inline-block', animClass: 'animate-spin-y', stagger: 0.1, desc: 'Flips on Y axis' },
  { id: 'swing', name: 'Swing', icon: Anchor, split: 'char', baseClass: 'inline-block', animClass: 'animate-swing', stagger: 0.1, desc: 'Hanging from the top' },
  { id: 'tada', name: 'Ta-da!', icon: Star, split: 'word', baseClass: 'inline-block mx-1', animClass: 'animate-tada', stagger: 0.2, desc: 'A triumphant reveal' },
  { id: 'rainbow', name: 'Rainbow Text', icon: Palette, split: 'char', baseClass: 'inline-block font-bold', animClass: 'animate-rainbow', stagger: 0.2, desc: 'Cycles all colors' },
  { id: 'rainbow-bg', name: 'Rainbow Box', icon: Palette, split: 'word', baseClass: 'inline-block mx-1', animClass: 'animate-rainbow-bg', stagger: 0.2, desc: 'Colorful background' },
  { id: 'shake-x', name: 'Shake (X)', icon: Zap, split: 'word', baseClass: 'inline-block mx-1 font-bold', animClass: 'animate-shake-x', stagger: 0.1, desc: 'Left and right jitter' },
  { id: 'shake-y', name: 'Shake (Y)', icon: Zap, split: 'word', baseClass: 'inline-block mx-1 font-bold', animClass: 'animate-shake-y', stagger: 0.1, desc: 'Up and down jitter' },
  { id: 'dance', name: 'Dance', icon: Music, split: 'char', baseClass: 'inline-block', animClass: 'animate-dance', stagger: 0.1, desc: 'Bobbing up and down' },
  { id: 'blur-pulse', name: 'Blur Pulse', icon: Cloud, split: 'word', baseClass: 'inline-block mx-1', animClass: 'animate-blur-pulse', stagger: 0.2, desc: 'Goes in and out of focus' },
  { id: 'matrix', name: 'The Matrix', icon: Cpu, split: 'char', baseClass: 'inline-block', animClass: 'animate-matrix', stagger: 0.05, desc: 'Digital rain effect' },
  { id: 'earthquake', name: 'Earthquake', icon: ZapOff, split: 'word', baseClass: 'inline-block mx-1 font-bold text-orange-500', animClass: 'animate-earthquake', stagger: 0.05, desc: 'Violent random shaking' },
  { id: 'shiver', name: 'Shiver', icon: Wind, split: 'char', baseClass: 'inline-block text-blue-200', animClass: 'animate-shiver', stagger: 0.02, desc: 'Very fast micro-shakes' },
  { id: 'melt', name: 'Melt', icon: Droplets, split: 'char', baseClass: 'inline-block', animClass: 'animate-melt', stagger: 0.2, desc: 'Melts into a puddle' },
  { id: 'twister', name: 'Twister', icon: Tornado, split: 'char', baseClass: 'inline-block', animClass: 'animate-twister', stagger: 0.1, desc: 'Spinning out of control' },
  { id: 'pendulum', name: 'Pendulum', icon: Clock, split: 'char', baseClass: 'inline-block', animClass: 'animate-pendulum', stagger: 0.2, desc: 'Swinging like a clock' },
  { id: 'seesaw', name: 'See-saw', icon: Activity, split: 'word', baseClass: 'inline-block mx-1', animClass: 'animate-seesaw', stagger: 0.3, desc: 'Tilting side to side' },
  { id: 'zoom', name: 'Zoom', icon: Target, split: 'char', baseClass: 'inline-block', animClass: 'animate-zoom', stagger: 0.1, desc: 'Coming right at you' },
  { id: 'shrink', name: 'Shrink', icon: Minimize2, split: 'char', baseClass: 'inline-block', animClass: 'animate-shrink', stagger: 0.1, desc: 'Fading into the distance' },
  { id: 'flip-in', name: 'Flip In', icon: Box, split: 'char', baseClass: 'inline-block', animClass: 'animate-flip-in', stagger: 0.1, desc: '3D rotation reveal' },
  { id: 'slide-up', name: 'Slide Up', icon: ArrowUpCircle, split: 'char', baseClass: 'inline-block', animClass: 'animate-slide-up', stagger: 0.05, desc: 'Moving upwards' },
  { id: 'slide-down', name: 'Slide Down', icon: ArrowUpCircle, split: 'char', baseClass: 'inline-block', animClass: 'animate-slide-down', stagger: 0.05, desc: 'Moving downwards' },
  { id: 'letter-spacing', name: 'Expand', icon: InfinityIcon, split: 'char', baseClass: 'inline-block', animClass: 'animate-letter-spacing', stagger: 0.05, desc: 'Letters spreading out' },
  { id: 'stretch-y', name: 'Tall', icon: ArrowUpCircle, split: 'char', baseClass: 'inline-block', animClass: 'animate-stretch-y', stagger: 0.1, desc: 'Stretching to the sky' },
  { id: 'stretch-x', name: 'Wide', icon: InfinityIcon, split: 'char', baseClass: 'inline-block', animClass: 'animate-stretch-x', stagger: 0.1, desc: 'Stretching sideways' },
  { id: 'pop', name: 'Pop', icon: Star, split: 'char', baseClass: 'inline-block font-bold', animClass: 'animate-pop', stagger: 0.1, desc: 'Popping bubbles' },
  { id: 'fade', name: 'Fade', icon: Ghost, split: 'char', baseClass: 'inline-block', animClass: 'animate-fade', stagger: 0.1, desc: 'Slowly disappearing' },
  { id: 'glow-red', name: 'Red Glow', icon: Zap, split: 'char', baseClass: 'inline-block font-bold', animClass: 'animate-glow-red', stagger: 0.1, desc: 'Radiating red heat' },
  { id: 'glow-blue', name: 'Blue Glow', icon: Zap, split: 'char', baseClass: 'inline-block font-bold', animClass: 'animate-glow-blue', stagger: 0.1, desc: 'Cold ice aura' },
  { id: 'glow-green', name: 'Green Glow', icon: Zap, split: 'char', baseClass: 'inline-block font-bold', animClass: 'animate-glow-green', stagger: 0.1, desc: 'Toxic radioactive' },
  { id: 'yoyo', name: 'Yo-Yo', icon: Activity, split: 'char', baseClass: 'inline-block', animClass: 'animate-yoyo', stagger: 0.1, desc: 'Up and down loop' },
  { id: 'zigzag', name: 'Zig-Zag', icon: Activity, split: 'char', baseClass: 'inline-block', animClass: 'animate-zigzag', stagger: 0.1, desc: 'Diagonal shifting' },
  { id: 'float-x', name: 'Drift', icon: Cloud, split: 'word', baseClass: 'inline-block mx-1', animClass: 'animate-float-x', stagger: 0.2, desc: 'Drifting left and right' },
  { id: 'breathe', name: 'Breathe', icon: Wind, split: 'word', baseClass: 'inline-block mx-1', animClass: 'animate-breathe', stagger: 0.2, desc: 'Calm expansion' },
  { id: 'color-cycle', name: 'Disco', icon: Palette, split: 'char', baseClass: 'inline-block font-bold', animClass: 'animate-color-cycle', stagger: 0.1, desc: 'Fast color changes' },
  { id: 'shadow-drop', name: 'Drop Shadow', icon: Moon, split: 'word', baseClass: 'inline-block mx-1', animClass: 'animate-shadow-drop', stagger: 0.2, desc: 'Lifting off the page' },
  { id: 'wobble-bottom', name: 'Tip-Toe', icon: Anchor, split: 'char', baseClass: 'inline-block', animClass: 'animate-wobble-bottom', stagger: 0.1, desc: 'Pivoting from toes' },
  { id: 'wobble-top', name: 'Nodding', icon: Bell, split: 'char', baseClass: 'inline-block', animClass: 'animate-wobble-top', stagger: 0.1, desc: 'Nodding from the top' },
  { id: 'jump', name: 'Jump', icon: ArrowUpCircle, split: 'word', baseClass: 'inline-block mx-1', animClass: 'animate-jump', stagger: 0.15, desc: 'Jumping up high' },
  { id: 'skate', name: 'Skate', icon: Activity, split: 'word', baseClass: 'inline-block mx-1', animClass: 'animate-skate', stagger: 0.2, desc: 'Sliding and leaning' },
  { id: 'hiccup', name: 'Hiccup', icon: Zap, split: 'char', baseClass: 'inline-block', animClass: 'animate-hiccup', stagger: 0.2, desc: 'Sudden jumps' },
  { id: 'squabble', name: 'Squabble', icon: Activity, split: 'char', baseClass: 'inline-block font-bold', animClass: 'animate-squabble', stagger: 0.05, desc: 'Fighting for space' },
  { id: 'float-away', name: 'Float Away', icon: Cloud, split: 'word', baseClass: 'inline-block mx-1', animClass: 'animate-float-away', stagger: 0.3, desc: 'Floating into the sky' },
  { id: 'sink', name: 'Sink', icon: Anchor, split: 'word', baseClass: 'inline-block mx-1', animClass: 'animate-sink', stagger: 0.3, desc: 'Falling into the deep' },
  { id: 'vibrate', name: 'Vibrate', icon: Shield, split: 'char', baseClass: 'inline-block', animClass: 'animate-vibrate', stagger: 0.02, desc: 'Like a ringing phone' },
  { id: 'sonar', name: 'Sonar', icon: Target, split: 'char', baseClass: 'inline-block', animClass: 'animate-sonar', stagger: 0.2, desc: 'Echoing outwards' },
];

export default function App() {
  const [text, setText] = useState("Awesome!");
  const [activePersonalityId, setActivePersonalityId] = useState('joyful');
  const [replayKey, setReplayKey] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const textContainerRef = useRef(null);

  const activePersonality = personalities.find(p => p.id === activePersonalityId);

  useEffect(() => {
    setReplayKey(prev => prev + 1);
  }, [text, activePersonalityId]);

  const handleReplay = () => {
    setReplayKey(prev => prev + 1);
  };

  // --- EXPORT FUNCTIONS ---

  // Export as SVG (Uses foreignObject to perfectly preserve CSS animations)
  const exportSVG = () => {
    if (!textContainerRef.current) return;
    const textHtml = textContainerRef.current.innerHTML;
    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="400">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; background: transparent; color: #e2e8f0; font-family: system-ui, sans-serif; font-size: 48px; font-weight: bold; overflow: hidden; padding: 20px; box-sizing: border-box;">
            <style>${STYLE_CONTENT}</style>
            <div style="text-align: center; word-wrap: break-word;">
              ${textHtml}
            </div>
          </div>
        </foreignObject>
      </svg>
    `;
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    triggerDownload(blob, `animated-text-${activePersonalityId}.svg`);
  };

  // Export as standalone HTML
  const exportHTML = () => {
    if (!textContainerRef.current) return;
    const textHtml = textContainerRef.current.innerHTML;
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Animated Text</title>
        <style>
          body { margin: 0; background: #020617; color: #e2e8f0; font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; font-size: 48px; font-weight: bold; overflow: hidden; }
          ${STYLE_CONTENT}
        </style>
      </head>
      <body>
        <div style="text-align: center;">
          ${textHtml}
        </div>
      </body>
      </html>
    `;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    triggerDownload(blob, `animated-text-${activePersonalityId}.html`);
  };

  // Record 4 seconds of the screen to a WebM video file
  const recordVideo = async () => {
    try {
      alert("Please select the current tab or window when the screen share prompt appears to record the animation.");
      
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { displaySurface: "browser" },
        audio: false,
        preferCurrentTab: true
      });
      
      setIsRecording(true);
      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
      const chunks = [];
      
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };
      
      mediaRecorder.onstop = () => {
        setIsRecording(false);
        const blob = new Blob(chunks, { type: 'video/webm' });
        triggerDownload(blob, `animated-text-${activePersonalityId}.webm`);
        stream.getTracks().forEach(track => track.stop()); // Stop the screen sharing icon
      };

      // Restart animation just before recording starts for clean loop
      handleReplay();
      mediaRecorder.start();
      
      // Stop recording automatically after 4 seconds
      setTimeout(() => {
        if (mediaRecorder.state !== 'inactive') {
          mediaRecorder.stop();
        }
      }, 4000);

    } catch (err) {
      console.error("Recording failed or cancelled", err);
      setIsRecording(false);
    }
  };

  const triggerDownload = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };


  const renderAnimatedText = () => {
    if (!text.trim()) {
      return <span className="text-slate-500 opacity-50 italic">Type something...</span>;
    }

    const { split, baseClass, animClass, stagger } = activePersonality;

    if (split === 'char') {
      return text.split('').map((char, index) => (
        <span
          key={`${replayKey}-${index}`}
          className={baseClass + ' ' + animClass}
          style={{ 
            animationDelay: `${index * stagger}s`,
            whiteSpace: 'pre' // preserve spaces
          }}
        >
          {char}
        </span>
      ));
    } else if (split === 'word') {
      return text.split(' ').map((word, index) => (
        <span
          key={`${replayKey}-${index}`}
          className={baseClass + ' ' + animClass}
          style={{ animationDelay: `${index * stagger}s` }}
        >
          {word}
        </span>
      ));
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 font-sans selection:bg-indigo-500 selection:text-white pb-24">
      <CustomStyles />
      
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Text Personalities
          </h1>
          <p className="text-slate-400 text-lg">Bring your words to life, then export them!</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <label htmlFor="textInput" className="block text-sm font-medium text-slate-400 uppercase tracking-wider">
                1. What do you want to say?
              </label>
              <textarea
                id="textInput"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full h-24 bg-slate-900 border border-slate-700 rounded-xl p-4 text-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none shadow-inner"
                placeholder="Type your message here..."
                maxLength={80}
              />
              <div className="text-right text-xs text-slate-500">
                {text.length}/80 characters
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-400 uppercase tracking-wider">
                2. Choose a personality
              </label>
              <div className="grid grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {personalities.map((p) => {
                  const Icon = p.icon;
                  const isActive = activePersonalityId === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActivePersonalityId(p.id)}
                      className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all duration-200 ${
                        isActive 
                          ? 'bg-indigo-900/40 border-indigo-500 ring-1 ring-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.2)]' 
                          : 'bg-slate-900 border-slate-800 hover:border-slate-600 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
                        <span className={`font-semibold text-sm ${isActive ? 'text-indigo-200' : 'text-slate-300'}`}>
                          {p.name}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500">{p.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Display & Export Section */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            <div className="flex justify-between items-end">
              <label className="block text-sm font-medium text-slate-400 uppercase tracking-wider">
                Preview
              </label>
              <button 
                onClick={handleReplay}
                className="flex items-center space-x-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors py-1 px-2 rounded-md hover:bg-slate-800"
                title="Replay Animation"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Replay</span>
              </button>
            </div>
            
            {/* The Main Stage */}
            <div className="flex-1 min-h-[300px] bg-slate-900 border border-slate-800 rounded-2xl p-8 flex items-center justify-center overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-slate-900 to-slate-900"></div>
              </div>

              {/* Text Container referenced for Export */}
              <div 
                ref={textContainerRef}
                className="relative z-10 text-4xl md:text-5xl font-bold text-center break-words w-full"
              >
                {renderAnimatedText()}
              </div>

              {/* Recording Overlay */}
              {isRecording && (
                <div className="absolute top-4 right-4 flex items-center space-x-2 bg-red-500/20 text-red-400 px-3 py-1 rounded-full border border-red-500/50 animate-pulse text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span>Recording...</span>
                </div>
              )}
            </div>

            {/* Export Actions */}
            <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl space-y-3">
              <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-2">3. Export Your Creation</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                <button 
                  onClick={exportSVG}
                  className="flex items-center justify-center space-x-2 bg-slate-800 hover:bg-indigo-900 hover:text-indigo-200 text-slate-300 py-2.5 px-4 rounded-lg transition-all border border-slate-700 hover:border-indigo-500/50"
                  title="Best for web graphics"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">SVG File</span>
                </button>

                <button 
                  onClick={exportHTML}
                  className="flex items-center justify-center space-x-2 bg-slate-800 hover:bg-indigo-900 hover:text-indigo-200 text-slate-300 py-2.5 px-4 rounded-lg transition-all border border-slate-700 hover:border-indigo-500/50"
                  title="Self-contained webpage"
                >
                  <FileCode2 className="w-4 h-4" />
                  <span className="text-sm font-medium">HTML File</span>
                </button>

                <button 
                  onClick={recordVideo}
                  disabled={isRecording}
                  className={`flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg transition-all border ${
                    isRecording 
                      ? 'bg-red-900/50 text-red-300 border-red-500/50 cursor-not-allowed' 
                      : 'bg-slate-800 hover:bg-pink-900/80 hover:text-pink-200 text-slate-300 border-slate-700 hover:border-pink-500/50'
                  }`}
                  title="Records 4 seconds of your screen as WebM"
                >
                  <Video className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {isRecording ? 'Recording...' : 'Record Video'}
                  </span>
                </button>

              </div>
              <p className="text-xs text-slate-500 text-center mt-2">
                Note: Video recording uses your browser's screen-capture tool. Just select this tab to record!
              </p>
            </div>

          </div>

        </div>
      </div>
      
      {/* Scrollbar styles for the personality list */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }
      `}</style>
    </div>
  );
}