export default function MarketplacePage() {
  const categories = ['All', 'Electronics', 'Vehicles', 'Clothing', 'Home & Garden', 'Toys & Games'];
  const products = [
    { id: 1, name: 'Vintage Camera', price: '$150', image: 'https://picsum.photos/seed/p1/400/300', location: 'New York, NY' },
    { id: 2, name: 'Mountain Bike', price: '$450', image: 'https://picsum.photos/seed/p2/400/300', location: 'Denver, CO' },
    { id: 3, name: 'Leather Jacket', price: '$80', image: 'https://picsum.photos/seed/p3/400/300', location: 'Los Angeles, CA' },
    { id: 4, name: 'Modern Sofa', price: '$700', image: 'https://picsum.photos/seed/p4/400/300', location: 'Chicago, IL' },
    { id: 5, name: 'Gaming Console', price: '$300', image: 'https://picsum.photos/seed/p5/400/300', location: 'Miami, FL' },
    { id: 6, name: 'Acoustic Guitar', price: '$220', image: 'https://picsum.photos/seed/p6/400/300', location: 'Austin, TX' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">Marketplace</h2>
        <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Create new listing</button>
      </div>
      
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {categories.map(cat => (
          <button key={cat} className="px-4 py-2 text-sm font-semibold rounded-full bg-gray-700 text-white hover:bg-red-600 whitespace-nowrap">
            {cat}
          </button>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-4">Today's picks</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="rounded-lg bg-gray-800 shadow overflow-hidden">
              <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-lg font-bold text-white">{p.price}</p>
                <p className="text-md text-gray-200">{p.name}</p>
                <p className="text-sm text-gray-400 mt-1">{p.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


