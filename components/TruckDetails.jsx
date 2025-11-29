'use client';
export default function TruckDetails({ truck, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="glass p-6 w-96 flex flex-col gap-4 animate-fadeIn">
        <img src={truck.image} alt={truck.name} className="rounded-xl h-48 object-cover" />
        <h2 className="text-xl font-bold">{truck.name}</h2>
        <p className="opacity-80">{truck.description}</p>
        <p className="font-semibold">Price: ${truck.price}</p>
        <button onClick={onClose} className="glass px-4 py-2 mt-2">Close</button>
      </div>
    </div>
  );
}
