export default function GroupsPage() {
  const groups = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: `Group ${i + 1}`,
    members: Math.floor(Math.random() * 5000) + 100,
  }))
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold text-red-500">Groups</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {groups.map((g) => (
          <div key={g.id} className="flex items-center justify-between rounded-lg bg-black/60 p-4 shadow border border-red-700">
            <div>
              <h3 className="font-medium text-white">{g.name}</h3>
              <p className="text-sm text-red-300">{g.members.toLocaleString()} members</p>
            </div>
            <button className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700">Join</button>
          </div>
        ))}
      </div>
    </div>
  )
}


