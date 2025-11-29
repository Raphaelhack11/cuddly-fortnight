'use client';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ThemeToggle from '../components/ThemeToggle';
import TruckCard from '../components/TruckCard';
import TruckDetails from '../components/TruckDetails';
import PurchaseModal from '../components/PurchaseModal';

// --- Import images from your images/ folder ---
import volvo from '../../images/volvo-vnl-670.jpeg';
import freight2012 from '../../images/freightliner-cascadia-2012.jpeg';
import freight2021 from '../../images/freightliner-cascadia-2021.jpeg';
import international from '../../images/international-lt.jpeg';
import ken680_2019 from '../../images/kenworth-t680-2019.jpeg';
import ken680_2021 from '../../images/kenworth-t680-2021.jpeg';
import mack from '../../images/mack-anthem-2021.jpeg';
import peter389 from '../../images/peterbilt-389.jpeg';
import peter579 from '../../images/peterbilt-579-2021.jpeg';

const TRUCKS = [
  { id: 1, name: 'Volvo VNL 670', price: 90000, image: volvo, description: 'Powerful 13L engine, 2022 model, full sleeper cab.' },
  { id: 2, name: 'Freightliner Cascadia 2012', price: 75000, image: freight2012, description: 'Reliable 12L engine, durable design.' },
  { id: 3, name: 'Freightliner Cascadia 2021', price: 110000, image: freight2021, description: 'Heavy-duty 12L engine, rugged design.' },
  { id: 4, name: 'International LT', price: 95000, image: international, description: 'Comfortable sleeper cab, fuel-efficient engine.' },
  { id: 5, name: 'Kenworth T680 2019', price: 88000, image: ken680_2019, description: 'Strong 15L engine, ergonomic cabin.' },
  { id: 6, name: 'Kenworth T680 2021', price: 105000, image: ken680_2021, description: 'Modern design, high efficiency, premium features.' },
  { id: 7, name: 'Mack Anthem 2021', price: 115000, image: mack, description: 'Powerful 14L engine, luxury sleeper cab.' },
  { id: 8, name: 'Peterbilt 389', price: 98000, image: peter389, description: 'Classic design, reliable engine, great for long hauls.' },
  { id: 9, name: 'Peterbilt 579 2021', price: 120000, image: peter579, description: 'Sleek aerodynamic design, high performance.' }
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
