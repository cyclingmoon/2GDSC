export default function GamesPage() {
  const games = Array.from({ length: 54 }).map((_, i) => ({
    id: i + 1,
    title: `Game Title ${i + 1}`,
    category: ['Action', 'Adventure', 'Racing', 'Strategy', 'RPG', 'Puzzle'][i % 6],
    players: `${Math.round(Math.random() * 1000)}K`,
    image: `https://picsum.photos/seed/g${i}/400/500`
  }));

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white">Games</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <div key={game.id} className="rounded-lg bg-gray-800 shadow overflow-hidden group">
            <div className="relative">
              <img src={game.image} alt={game.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-bold text-white">{game.title}</h3>
                <p className="text-sm text-gray-300">{game.category}</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-400">{game.players} players</p>
              <button className="mt-3 w-full rounded-lg bg-red-600/90 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600">Play Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}