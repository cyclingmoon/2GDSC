export default function FriendsPage() {
  const friends = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `Friend ${i + 1}`,
    avatar: `https://i.pravatar.cc/80?img=${i + 40}`,
  }))
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold text-red-500">Friends</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {friends.map((f) => (
          <div key={f.id} className="rounded-lg bg-black/60 p-4 shadow border border-red-700">
            <img src={f.avatar} alt="" className="mx-auto h-20 w-20 rounded-full" />
            <h3 className="mt-3 text-center font-medium text-white">{f.name}</h3>
            <div className="mt-3 flex justify-center gap-2">
              <button className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700">Add</button>
              <button className="rounded bg-red-600/20 px-3 py-1 text-sm text-white hover:bg-red-600/30">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


