import { useState } from 'react'

export default function ProfilePage() {
  const [tab, setTab] = useState('posts')
  return (
    <div className="space-y-4 text-white">
      <div className="rounded-lg bg-gray-800/80 backdrop-blur-md shadow">
        <div className="h-40 w-full rounded-t-lg bg-gradient-to-r from-red-700 to-black"></div>
        <div className="p-4">
          <div className="-mt-12 flex items-end gap-4">
            <img src="/assets/images.jpeg" alt="" className="h-24 w-24 rounded-full border-4 border-gray-800" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold">Rohith Kanna</h2>
              <p className="text-gray-400">Living life one vibe at a time.</p>
            </div>
            <button className="rounded bg-gray-700 px-4 py-2 text-sm hover:bg-gray-600">Edit Profile</button>
          </div>
        </div>
        <div className="border-t border-gray-700">
          <div className="flex gap-2 px-4 py-2">
            {[
              { id: 'posts', label: 'Posts' },
              { id: 'about', label: 'About' },
              { id: 'friends', label: 'Friends' },
              { id: 'photos', label: 'Photos' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`rounded px-3 py-1 text-sm font-medium ${tab === t.id ? 'bg-red-600 text-white' : 'hover:bg-gray-700'}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-gray-800/80 backdrop-blur-md p-4 shadow">
        {tab === 'posts' && <div className="space-y-3">{Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded border border-gray-700 p-3">Personal post #{i + 1}</div>
        ))}</div>}
        {tab === 'about' && <div>
          <h3 className="mb-2 font-semibold">About</h3>
          <p className="text-gray-400">Bio: Music, travel, and coding vibes.</p>
        </div>}
        {tab === 'friends' && <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <img src={`/assets/images.jpeg`} alt="" className="h-10 w-10 rounded-full" />
              <span>Friend {i + 1}</span>
            </div>
          ))}
        </div>}
        {tab === 'photos' && <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <img key={i} src={`https://picsum.photos/seed/p${i}/300/200`} alt="" className="h-32 w-full rounded object-cover" />
          ))}
        </div>}
      </div>
    </div>
  )
}


