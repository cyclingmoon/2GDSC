import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import {
  Home,
  Users,
  Clapperboard,
  Store,
  Gamepad2,
  Search,
  Bell,
  MessageCircle,
  User as UserIcon,
  ChevronsLeft,
  ChevronsRight,
  Video,
  Bookmark,
  Group,
  Calendar,
  Settings,
  Gift,
  Bot,
  Gamepad,
  MessageSquare,
  ShoppingBag,
  Flag,
  Activity,
  Film,
  Megaphone,
  HelpCircle,
  MessageSquareWarning,
  LogOut,
  ChevronRight,
  Users2,
} from 'lucide-react';

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: '/home', icon: Home },
    { to: '/friends', icon: Users },
    { to: '/video', icon: Clapperboard },
    { to: '/marketplace', icon: Store },
    { to: '/games', icon: Gamepad2 },
  ];

  return (
    <div className="sticky top-0 z-40 bg-gray-900/80 backdrop-blur-md border-b border-red-700/50 shadow-lg text-red-500">
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link to="/home" className="text-3xl font-extrabold text-red-600 glow-title">
            F
          </Link>
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search Facebook"
              className="w-64 rounded-full border-2 border-gray-700 bg-gray-800 px-10 py-2 text-sm text-white placeholder-gray-400 transition focus:border-red-600 focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center space-x-2 sm:space-x-8">
          {navLinks.map(({ to, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={`relative flex h-12 w-20 items-center justify-center rounded-lg transition-colors ${
                location.pathname.startsWith(to)
                  ? 'text-red-500 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:bg-red-500'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-red-500'
              }`}
            >
              <Icon size={28} strokeWidth={location.pathname.startsWith(to) ? 2.5 : 2} />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button className="h-10 w-10 rounded-full bg-gray-800 p-2 text-gray-300 transition hover:bg-gray-700 hover:text-white">
            <MessageCircle size={20} />
          </button>
          <button className="h-10 w-10 rounded-full bg-gray-800 p-2 text-gray-300 transition hover:bg-gray-700 hover:text-white">
            <Bell size={20} />
          </button>
          <div className="relative">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center gap-2 rounded-full transition"
            >
              <img
                src="/assets/images.jpeg"
                alt="profile"
                className="h-10 w-10 rounded-full border-2 border-gray-700 hover:border-red-500"
              />
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-14 w-96 rounded-lg bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                  <div className="p-2 shadow-md rounded-lg bg-gray-700 mb-4">
                      <Link
                        className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-600"
                        to="/profile"
                        onClick={() => setMenuOpen(false)}
                      >
                        <img
                          src="/assets/images.jpeg"
                          alt="profile"
                          className="h-10 w-10 rounded-full"
                        />
                        <span className="font-semibold text-white">Rohith Kanna</span>
                      </Link>
                      <hr className="my-2 border-gray-600" />
                      <button className="w-full flex items-center gap-3 rounded-lg p-3 text-left text-blue-500 hover:bg-gray-600">
                        <Users2 className="h-6 w-6" />
                        <span>See all profiles</span>
                      </button>
                  </div>

                  <div className="space-y-1">
                    <MenuItem icon={Settings} text="Settings & privacy" hasChevron />
                    <MenuItem icon={HelpCircle} text="Help & support" hasChevron />
                    <MenuItem icon={MessageSquareWarning} text="Give feedback" />
                    <MenuItem icon={LogOut} text="Log out" onClick={() => { setMenuOpen(false); navigate('/'); }} />
                  </div>
                  
                  <div className="mt-4 text-xs text-gray-400">
                    <a href="#" className="hover:underline">Privacy</a> &middot; 
                    <a href="#" className="hover:underline">Terms</a> &middot; 
                    <a href="#" className="hover:underline">Advertising</a> &middot; 
                    <a href="#" className="hover:underline">Ad choices</a> &middot; 
                    <a href="#" className="hover:underline">Cookies</a> &middot; 
                    More
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuItem({ icon: Icon, text, hasChevron, onClick }) {
  const content = (
    <>
      <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
        <Icon className="h-6 w-6 text-gray-200" />
      </div>
      <span className="flex-1 font-medium text-gray-200">{text}</span>
      {hasChevron && <ChevronRight className="h-6 w-6 text-gray-400" />}
    </>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="w-full flex items-center gap-3 rounded-lg p-2 text-left hover:bg-gray-700">
        {content}
      </button>
    );
  }

  return (
    <a href="#" className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-700">
      {content}
    </a>
  );
}

function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const links = [
    { to: '/profile', label: 'Rohith Kanna', icon: UserIcon },
    { to: '/friends', label: 'Friends', icon: Users },
    { href: 'https://open.spotify.com/track/4cktbXiXOapiLBMprHFErI?si=e417ff56019449ec', label: 'Memories', icon: Bookmark },
    { href: 'https://share.google/2q8jJmIFhzX5UZ07P', label: 'Saved', icon: Bookmark },
    { to: '/groups', label: 'Groups', icon: Group },
    { to: '/video', label: 'Video', icon: Video },
    { to: '/marketplace', label: 'Marketplace', icon: Store },
    { href: 'https://www.youtube.com/feed/channels', label: 'Feeds', icon: Activity },
    { href: 'https://in.bookmyshow.com/explore/events-chennai', label: 'Events', icon: Calendar },
    { to: '/ads', label: 'Ads Manager', icon: Megaphone },
    { href: 'https://www.onthisday.com/today/birthdays.php', label: 'Birthdays', icon: Gift },
    { href: 'https://chatgpt.com/', label: 'Chat with AIs', icon: Bot },
    { to: '/gaming', label: 'Gaming video', icon: Gamepad },
    { to: '/messenger', label: 'Messenger', icon: MessageSquare },
    { to: '/messenger-kids', label: 'Messenger Kids', icon: Users },
    { to: '/orders', label: 'Orders and payments', icon: ShoppingBag },
    { to: '/pages', label: 'Pages', icon: Flag },
    { href: 'https://play.google.com/store/games?hl=en_IN&pli=1', label: 'Play games', icon: Gamepad2 },
    { to: '/activity', label: 'Recent ad activity', icon: Activity },
    { to: '/reels', label: 'Reels', icon: Film },
    { to: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div
      className={`hidden lg:block bg-gray-900/80 backdrop-blur-md transition-all duration-300 ${
        isCollapsed ? 'lg:w-20' : 'lg:w-80'
      }`}
    >
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-2">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute top-4 -right-4 z-10 h-8 w-8 rounded-full bg-gray-800 text-white flex items-center justify-center"
        >
          {isCollapsed ? <ChevronsRight size={16} /> : <ChevronsLeft size={16} />}
        </button>
        <ul className="space-y-1">
          {links.map((l) => {
            const isExternal = !!l.href;
            const commonProps = {
              key: l.label,
              className: "flex items-center gap-4 rounded-lg p-3 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white",
              title: isCollapsed ? l.label : '',
            };
            const content = (
              <>
                <l.icon className="h-7 w-7 flex-shrink-0 text-red-500" />
                {!isCollapsed && <span className="font-medium">{l.label}</span>}
              </>
            );

            if (isExternal) {
              return (
                <a href={l.href} target="_blank" rel="noopener noreferrer" {...commonProps}>
                  {content}
                </a>
              );
            }

            return (
              <Link to={l.to} {...commonProps}>
                {content}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default function HomeLayout() {
  return (
    <div className="min-h-screen text-red-500">
      <NavBar />
      <div className="flex">
        <SideBar />
        <main className="flex-1">
          <div className="mx-auto max-w-5xl py-6 px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}


