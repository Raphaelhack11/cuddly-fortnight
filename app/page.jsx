'use client';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ThemeToggle from '../components/ThemeToggle';
import TruckCard from '../components/TruckCard';
import TruckDetails from '../components/TruckDetails';
import PurchaseModal from '../components/PurchaseModal';

import volvo from '../../images/volvo.jpg';
import scania from '../../images/scania.jpg';
import man from '../../images/man.jpg';

const TRUCKS = [
  { id: 1, name: 'Volvo FH16', price: 90000, image: volvo, description: 'Powerful 16L engine, 2022 model, full sleeper cab.' },
  { id: 2, name: 'Scania XT', price: 110000, image: scania, description: 'Heavy-duty 12L engine, 2021 model, rugged design.' },
  { id: 3, name: 'MAN TGX', price: 105000, image: man, description: 'Efficient 15L engine, 2020 model, comfortable interior.' }
];

export default function Page() {
  const [selected, setSelected] = useState(null);
  const [details, setDetails] = useState(null);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 flex flex-col gap-10 bg-gray-100 dark:bg-gray-900 transition-colors">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Truck Catalog</h1>
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRUCKS.map(truck => (
            <TruckCard
              key={truck.id}
              truck={truck}
              onPurchase={() => setSelected(truck)}
              onDetails={() => setDetails(truck)}
            />
          ))}
        </div>
      </main>

      {selected && <PurchaseModal truck={selected} onClose={() => setSelected(null)} />}
      {details && <TruckDetails truck={details} onClose={() => setDetails(null)} />}
    </div>
  );
  }
