export default function FeedPage() {
  const posts = Array.from({ length: 5 }).map((_, i) => ({
    id: i + 1,
    user: `User ${i + 1}`,
    avatar: `https://i.pravatar.cc/48?img=${i + 20}`,
    text: `This is a sample post number ${i + 1}. Enjoy the vibes!` ,
    image: `https://picsum.photos/seed/vibe${i}/600/350`,
  }))

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-black/60 border border-red-700 p-4 shadow">
        <div className="flex items-center gap-3">
          <img src={`https://i.pravatar.cc/40?img=55`} className="h-10 w-10 rounded-full" alt="" />
          <input placeholder="What's on your mind?" className="flex-1 rounded-full border border-red-700 bg-black/50 px-4 py-2 text-sm text-white placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-600" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
          <button className="rounded bg-red-600/20 px-3 py-1 text-red-300 hover:bg-red-600/30">Live video</button>
          <button className="rounded bg-red-600/20 px-3 py-1 text-red-300 hover:bg-red-600/30">Photo/video</button>
          <button className="rounded bg-red-600/20 px-3 py-1 text-red-300 hover:bg-red-600/30">Feeling/activity</button>
        </div>
      </div>

      <div className="rounded-lg bg-black/60 border border-red-700 p-4 shadow">
        <h3 className="mb-3 text-red-500">Create story</h3>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-32 w-full rounded bg-cover bg-center" style={{ backgroundImage: `url(https://picsum.photos/seed/story${i}/300/200)` }} />
          ))}
        </div>
      </div>
      {posts.map((p) => (
        <article key={p.id} className="rounded-lg bg-black/60 border border-red-700 p-4 shadow">
          <div className="mb-3 flex items-center gap-3">
            <img src={p.avatar} alt="" className="h-10 w-10 rounded-full" />
            <div>
              <h3 className="font-semibold text-white">{p.user}</h3>
              <p className="text-xs text-red-300">Just now</p>
            </div>
          </div>
          <p className="mb-3 text-gray-200">{p.text}</p>
          <img src={p.image} alt="" className="mb-3 w-full rounded" />
          <div className="flex items-center justify-between text-sm text-red-300">
            <button className="rounded px-3 py-1 hover:bg-red-600/20">👍 Like</button>
            <button className="rounded px-3 py-1 hover:bg-red-600/20">💬 Comment</button>
            <button className="rounded px-3 py-1 hover:bg-red-600/20">↗ Share</button>
          </div>
        </article>
      ))}
    </div>
  )
}


