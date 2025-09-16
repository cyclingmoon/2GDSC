export default function MarketplacePage() {
  const items = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    price: (Math.floor(Math.random() * 90) + 10) * 10,
    image: `https://picsum.photos/seed/m${i}/400/300`,
  }))
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold text-red-500">Marketplace</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.id} className="rounded-lg bg-black/60 p-3 shadow border border-red-700">
            <img src={it.image} alt="" className="h-40 w-full rounded object-cover" />
            <h3 className="mt-2 font-medium text-white">{it.title}</h3>
            <p className="text-sm text-red-300">${it.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


