'use client';
import { useState } from 'react';

export default function PurchaseModal({ truck, onClose }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name:'', email:'', phone:'' });

  async function submit() {
    setLoading(true);
    const fd = new FormData();
    Object.entries(form).forEach(([k,v]) => fd.append(k,v));
    fd.append('truckName', truck.name);
    fd.append('image', await fetch(truck.image).then(r=>r.blob()), truck.name);

    await fetch('/api/telegram-upload', { method:'POST', body:fd });
    setLoading(false);
    onClose();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="glass p-6 w-96 flex flex-col gap-4 animate-fadeIn">
        <h2 className="text-xl font-bold">Purchase: {truck.name}</h2>
        <input placeholder="Name" className="glass p-2" onChange={e=>setForm({...form,name:e.target.value})} />
        <input placeholder="Email" className="glass p-2" onChange={e=>setForm({...form,email:e.target.value})} />
        <input placeholder="Phone" className="glass p-2" onChange={e=>setForm({...form,phone:e.target.value})} />
        <button onClick={submit} className="glass p-2">{loading?'Sending...':'Submit'}</button>
        <button onClick={onClose} className="opacity-60 mt-2">Cancel</button>
      </div>
    </div>
  );
      }
