import { Video, Image, Smile, Plus, User } from 'lucide-react';

export default function FeedPage() {
  const posts = Array.from({ length: 5 }).map((_, i) => ({
    id: i + 1,
    user: `User ${i + 1}`,
    avatar: `https://i.pravatar.cc/48?img=${i + 20}`,
    text: `This is a sample post number ${i + 1}. Enjoy the vibes!`,
    image: `https://picsum.photos/seed/vibe${i}/600/350`,
  }));

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Create Post */}
      <div className="rounded-lg bg-gray-900/80 backdrop-blur-md border border-gray-700 p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <img src="/assets/images.jpeg" className="h-10 w-10 rounded-full" alt="User Avatar" />
          <input 
            placeholder="What's on your mind, Rohith?" 
            className="flex-1 rounded-full bg-gray-800/80 border border-gray-700 px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500" 
          />
        </div>
        <hr className="my-3 border-gray-700" />
        <div className="grid grid-cols-3 gap-2 text-sm font-medium text-gray-300">
          <button className="flex items-center justify-center gap-2 rounded-md py-2 hover:bg-gray-800/90 transition-colors">
            <Video className="h-5 w-5 text-red-500" />
            <span>Live video</span>
          </button>
          <button className="flex items-center justify-center gap-2 rounded-md py-2 hover:bg-gray-800/90 transition-colors">
            <Image className="h-5 w-5 text-green-500" />
            <span>Photo/video</span>
          </button>
          <button className="flex items-center justify-center gap-2 rounded-md py-2 hover:bg-gray-800/90 transition-colors">
            <Smile className="h-5 w-5 text-yellow-500" />
            <span>Feeling/activity</span>
          </button>
        </div>
      </div>

      {/* Create Story */}
      <div className="rounded-lg bg-gray-900/80 backdrop-blur-md border border-gray-700 p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-red-600/80 flex items-center justify-center">
            <Plus className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Create story</h3>
            <p className="text-sm text-gray-400">Share a photo or write something.</p>
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      {posts.map((p) => (
        <article key={p.id} className="rounded-lg bg-gray-900/80 backdrop-blur-md border border-gray-700 p-4 shadow-lg">
          <div className="mb-3 flex items-center gap-3">
            <img src={p.avatar} alt="" className="h-10 w-10 rounded-full" />
            <div>
              <h3 className="font-semibold text-white">{p.user}</h3>
              <p className="text-xs text-gray-400">Just now</p>
            </div>
          </div>
          <p className="mb-3 text-gray-200">{p.text}</p>
          <img src={p.image} alt="" className="mb-3 w-full rounded-lg" />
          <div className="flex items-center justify-between text-sm text-gray-400">
            <button className="flex items-center gap-1 rounded px-3 py-1 hover:bg-gray-800/90">👍 Like</button>
            <button className="flex items-center gap-1 rounded px-3 py-1 hover:bg-gray-800/90">💬 Comment</button>
            <button className="flex items-center gap-1 rounded px-3 py-1 hover:bg-gray-800/90">↗ Share</button>
          </div>
        </article>
      ))}
    </div>
  )
}


