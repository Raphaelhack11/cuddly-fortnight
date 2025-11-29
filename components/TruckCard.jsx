export default function TruckCard({ truck, onPurchase, onDetails }) {
  return (
    <div className="glass p-4 flex flex-col gap-3 hover:scale-105 transition-transform duration-300">
      <img src={truck.image} alt={truck.name} className="rounded-xl w-full h-48 object-cover" />
      <h2 className="text-xl font-semibold">{truck.name}</h2>
      <p className="opacity-75">Price: ${truck.price}</p>
      <div className="flex gap-2">
        <button onClick={onDetails} className="glass px-4 py-2 flex-1">Details</button>
        <button onClick={onPurchase} className="glass px-4 py-2 flex-1">Purchase</button>
      </div>
    </div>
  );
}
