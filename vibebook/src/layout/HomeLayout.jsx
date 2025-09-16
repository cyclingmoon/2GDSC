import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function NavBar() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="sticky top-0 z-40 bg-black border-b border-red-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/home" className="text-2xl font-extrabold glow-title">FACEBOOK</Link>
            <div className="hidden sm:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search VibeBook"
                  className="w-64 rounded-full border border-red-700 bg-black/60 px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <span className="pointer-events-none absolute right-3 top-2.5 text-red-400">🔍</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-red-400">
              <span className="text-xl">🚗</span>
              <span className="text-xl">🏎️</span>
              <span className="text-xl">🚘</span>
            </div>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center gap-2 rounded-full bg-red-600/20 px-3 py-1 hover:bg-red-600/30"
            >
              <img
                src={`https://i.pravatar.cc/32?img=5`}
                alt="profile"
                className="h-8 w-8 rounded-full"
              />
              <span className="hidden sm:inline text-sm text-white">Menu</span>
            </button>
            {menuOpen && (
              <div className="absolute right-4 top-14 w-48 rounded-md border border-red-700 bg-black py-2 shadow-lg">
                <Link className="block px-4 py-2 text-white hover:bg-red-600/20" to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
                <Link className="block px-4 py-2 text-white hover:bg-red-600/20" to="/settings" onClick={() => setMenuOpen(false)}>Settings</Link>
                <button className="block w-full text-left px-4 py-2 text-white hover:bg-red-600/20" onClick={() => navigate('/')}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function SideBar() {
  const links = [
    { to: '/profile', label: 'Profile' },
    { to: '/friends', label: 'Friends' },
    { to: '/memories', label: 'Memories' },
    { to: '/saved', label: 'Saved' },
    { to: '/groups', label: 'Groups' },
    { to: '/video', label: 'Video' },
    { to: '/marketplace', label: 'Marketplace' },
    { to: '/feeds', label: 'Feeds' },
    { to: '/events', label: 'Events' },
    { to: '/ads', label: 'Ads Manager' },
    { to: '/birthdays', label: 'Birthdays' },
    { to: '/chat-ai', label: 'Chat with AIs' },
    { to: '/gaming', label: 'Gaming video' },
    { to: '/messenger', label: 'Messenger' },
    { to: '/messenger-kids', label: 'Messenger Kids' },
    { to: '/orders', label: 'Orders and payments' },
    { to: '/pages', label: 'Pages' },
    { to: '/play', label: 'Play games' },
    { to: '/activity', label: 'Recent ad activity' },
    { to: '/reels', label: 'Reels' },
    { to: '/settings', label: 'Settings' },
  ]
  return (
    <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
      <div className="sticky top-16 space-y-1 p-4">
        {links.map((l) => (
          <Link key={l.to} to={l.to} className="flex items-center gap-3 rounded px-3 py-2 text-gray-200 hover:bg-red-600/20">
            <span className="text-red-400">⬤</span>
            <span>{l.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

function RightBar() {
  const contacts = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    name: `Contact ${i + 1}`,
    avatar: `https://i.pravatar.cc/32?img=${i + 10}`,
  }))
  return (
    <div className="hidden xl:block xl:w-72 xl:flex-shrink-0">
      <div className="sticky top-16 p-4">
        <h3 className="mb-3 text-sm font-semibold text-red-400">Contacts</h3>
        <ul className="space-y-2">
          {contacts.map((c) => (
            <li key={c.id} className="flex items-center gap-3">
              <img src={c.avatar} alt="" className="h-8 w-8 rounded-full" />
              <span className="text-gray-200">{c.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function HomeLayout() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(239,68,68,0.4) 0, transparent 40%), radial-gradient(circle at 80% 30%, rgba(239,68,68,0.3) 0, transparent 40%), radial-gradient(circle at 50% 80%, rgba(239,68,68,0.3) 0, transparent 40%)'
      }} />
      <NavBar />
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex gap-4">
          <SideBar />
          <main className="flex-1 py-4">
            <Outlet />
          </main>
          <RightBar />
        </div>
      </div>
    </div>
  )
}


