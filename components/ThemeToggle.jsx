'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(mode);
  }, [mode]);

  return (
    <button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')} className="glass px-4 py-2 rounded-xl">
      {mode === 'dark' ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
}
