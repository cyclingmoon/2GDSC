import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import HomeLayout from './layout/HomeLayout.jsx';
import FeedPage from './pages/FeedPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import FriendsPage from './pages/FriendsPage.jsx';
import GroupsPage from './pages/GroupsPage.jsx';
import MarketplacePage from './pages/MarketplacePage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import PlaceholderPage from './pages/PlaceholderPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import VideoPage from './pages/VideoPage.jsx';
import GamesPage from './pages/GamesPage.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <video 
        className="absolute inset-0 h-full w-full object-cover -z-10" 
        src="/assets/carvid.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
      />
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route element={<HomeLayout />}>
          <Route path="/home" element={<FeedPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/memories" element={<PlaceholderPage title="Memories" />} />
          <Route path="/saved" element={<PlaceholderPage title="Saved" />} />
          <Route path="/feeds" element={<PlaceholderPage title="Feeds" />} />
          <Route path="/events" element={<PlaceholderPage title="Events" />} />
          <Route path="/ads" element={<PlaceholderPage title="Ads Manager" />} />
          <Route path="/birthdays" element={<PlaceholderPage title="Birthdays" />} />
          <Route path="/chat-ai" element={<PlaceholderPage title="Chat with AIs" />} />
          <Route path="/gaming" element={<PlaceholderPage title="Gaming video" />} />
          <Route path="/messenger" element={<PlaceholderPage title="Messenger" />} />
          <Route path="/messenger-kids" element={<PlaceholderPage title="Messenger Kids" />} />
          <Route path="/orders" element={<PlaceholderPage title="Orders and payments" />} />
          <Route path="/pages" element={<PlaceholderPage title="Pages" />} />
          <Route path="/play" element={<PlaceholderPage title="Play games" />} />
          <Route path="/activity" element={<PlaceholderPage title="Recent ad activity" />} />
          <Route path="/reels" element={<PlaceholderPage title="Reels" />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}


