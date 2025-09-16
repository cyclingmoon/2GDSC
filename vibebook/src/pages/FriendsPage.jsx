export default function FriendsPage() {
  const friendRequests = Array.from({ length: 52 }).map((_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    mutuals: Math.floor(Math.random() * 25) + 1,
    avatar: `https://i.pravatar.cc/80?img=${i + 1}`
  }));

  const suggestions = Array.from({ length: 54 }).map((_, i) => ({
    id: i + 1,
    name: `Person ${i + 1}`,
    mutuals: Math.floor(Math.random() * 25) + 1,
    avatar: `https://i.pravatar.cc/80?img=${i + 53}`
  }));

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4 text-2xl font-bold text-white">Friend Requests</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {friendRequests.map((r) => (
            <div key={r.id} className="rounded-lg bg-gray-800 shadow">
              <img src={r.avatar} alt={r.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="font-bold text-white">{r.name}</h3>
                <p className="text-sm text-gray-400">{r.mutuals} mutual friends</p>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Confirm</button>
                  <button className="flex-1 rounded-lg bg-gray-700 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-600">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-700" />

      <div>
        <h2 className="mb-4 text-2xl font-bold text-white">People You May Know</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {suggestions.map((s) => (
            <div key={s.id} className="rounded-lg bg-gray-800 shadow">
              <img src={s.avatar} alt={s.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="font-bold text-white">{s.name}</h3>
                <p className="text-sm text-gray-400">{s.mutuals} mutual friends</p>
                <div className="mt-4 flex flex-col gap-2">
                  <button className="rounded-lg bg-red-600/80 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600">Add Friend</button>
                  <button className="rounded-lg bg-gray-700 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-600">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


