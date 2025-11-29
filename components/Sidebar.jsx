'use client';
import { useState } from 'react';

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <div className={`flex flex-col gap-6 p-6 glass transition-all duration-500 ${open ? 'w-64' : 'w-20'}`}>
      <button onClick={() => setOpen(!open)} className="text-xl font-bold mb-4">☰</button>
      <nav className="flex flex-col gap-2">
        <a className="hover:opacity-100 opacity-70" href="#">Home</a>
        <a className="hover:opacity-100 opacity-70" href="#trucks">Trucks</a>
      </nav>
    </div>
  );
}
