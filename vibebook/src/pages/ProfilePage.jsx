import { useState } from 'react';
import { Camera, Edit, Plus, UserPlus, MoreHorizontal, ThumbsUp, MessageCircle, Share, List, Grid } from 'lucide-react';

// --- Helper Components ---

const ProfileHeader = () => (
  <div className="bg-gray-900/80 backdrop-blur-md shadow-md text-white">
    <div className="max-w-6xl mx-auto">
      <div className="h-64 md:h-96 bg-gradient-to-r from-red-800 to-black rounded-b-lg relative">
        {/* Cover Photo */}
        <div className="absolute bottom-4 right-4">
          <button className="flex items-center bg-gray-700/80 hover:bg-gray-600 text-white font-semibold py-2 px-3 rounded-lg shadow">
            <Camera size={20} className="mr-2" />
            Add Cover Photo
          </button>
        </div>
      </div>
      <div className="px-4 sm:px-6">
        <div className="flex items-end -mt-20">
          <div className="relative">
            <img src="/assets/images.jpeg" alt="Profile" className="h-40 w-40 rounded-full border-4 border-gray-800" />
            <button className="absolute bottom-2 right-2 bg-gray-600 hover:bg-gray-500 p-2 rounded-full">
              <Camera size={20} />
            </button>
          </div>
          <div className="ml-4 flex-grow pb-4">
            <h1 className="text-3xl font-bold">Rohith Kanna</h1>
          </div>
          <div className="flex items-center space-x-2 pb-4">
            <button className="flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg">
              <Plus size={20} className="mr-2" />
              Add to story
            </button>
            <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg">
              <Edit size={20} className="mr-2" />
              Edit profile
            </button>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-4">
          <div className="flex items-center">
            {['Posts', 'About', 'Friends', 'Photos', 'Reels', 'Check-ins', 'More'].map((item, index) => (
              <button key={item} className={`py-3 px-4 font-semibold hover:bg-gray-700 rounded-t-lg ${index === 0 ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-300'}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PeopleYouMayKnow = () => {
  const suggestions = [
    { name: 'Nanda Gopaalan', img: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Tilagavathi Subrahr', img: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Sumathi Xavier', img: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Gopi Nath', img: 'https://i.pravatar.cc/150?img=4' },
    { name: 'Paramesh Ghosh', img: 'https://i.pravatar.cc/150?img=5', followed: true },
    { name: 'Balaji Balaraman', img: 'https://i.pravatar.cc/150?img=6' },
    { name: 'Priti Kumar', img: 'https://i.pravatar.cc/150?img=7' },
  ];

  return (
    <div className="bg-gray-900/80 backdrop-blur-md p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold text-white">People you may know</h2>
        <a href="#" className="text-red-500 hover:underline">See all</a>
      </div>
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {suggestions.map(person => (
          <div key={person.name} className="border border-gray-700 rounded-lg w-48 flex-shrink-0 bg-gray-800">
            <img src={person.img} className="h-48 w-full object-cover rounded-t-lg" />
            <div className="p-2">
              <p className="font-semibold text-white text-sm">{person.name}</p>
              {person.followed && <p className="text-xs text-gray-400">Followed by 996</p>}
              <button className="w-full mt-2 flex items-center justify-center bg-red-600/50 hover:bg-red-600/70 text-white font-semibold py-1.5 rounded-lg text-sm">
                <UserPlus size={16} className="mr-1" />
                Add friend
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const IntroCard = () => (
  <div className="bg-gray-900/80 backdrop-blur-md p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-bold text-white mb-3">Intro</h2>
    <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-1.5 rounded-lg text-sm mb-2">Add Bio</button>
    <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-1.5 rounded-lg text-sm mb-2">Edit details</button>
    <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-1.5 rounded-lg text-sm">Add Featured</button>
  </div>
);

const PhotosCard = () => (
  <div className="bg-gray-900/80 backdrop-blur-md p-4 rounded-lg shadow-md">
    <div className="flex justify-between items-center mb-3">
      <h2 className="text-xl font-bold text-white">Photos</h2>
      <a href="#" className="text-red-500 hover:underline">See All Photos</a>
    </div>
    <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden">
      {Array.from({ length: 9 }).map((_, i) => (
        <img key={i} src={`https://picsum.photos/seed/p${i}/200`} className="aspect-square object-cover" />
      ))}
    </div>
  </div>
);

const FriendsCard = () => (
    <div className="bg-gray-900/80 backdrop-blur-md p-4 rounded-lg shadow-md">
    <div className="flex justify-between items-center mb-3">
      <h2 className="text-xl font-bold text-white">Friends</h2>
      <a href="#" className="text-red-500 hover:underline">See all friends</a>
    </div>
     <p className="text-gray-400 mb-3">1,234 friends</p>
    <div className="grid grid-cols-3 gap-2">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i}>
            <img src={`https://i.pravatar.cc/150?img=${i+10}`} className="aspect-square object-cover rounded-lg" />
            <p className="text-xs font-semibold text-gray-300 mt-1">Friend {i+1}</p>
        </div>
      ))}
    </div>
  </div>
);

const PostComposer = () => (
  <div className="bg-gray-900/80 backdrop-blur-md p-4 rounded-lg shadow-md">
    <div className="flex items-center space-x-3">
      <img src="/assets/images.jpeg" className="h-10 w-10 rounded-full" />
      <div className="flex-1 bg-gray-700 hover:bg-gray-600 rounded-full px-4 py-2 text-gray-400 cursor-pointer text-left">
        What's on your mind?
      </div>
    </div>
    <div className="border-t border-gray-700 mt-3 pt-3 flex justify-around">
      <button className="flex items-center space-x-2 text-gray-300 hover:bg-gray-700 py-2 px-3 rounded-lg">
        <Camera size={20} className="text-red-500" />
        <span className="font-semibold">Live video</span>
      </button>
      <button className="flex items-center space-x-2 text-gray-300 hover:bg-gray-700 py-2 px-3 rounded-lg">
        <Camera size={20} className="text-green-500" />
        <span className="font-semibold">Photo/video</span>
      </button>
      <button className="flex items-center space-x-2 text-gray-300 hover:bg-gray-700 py-2 px-3 rounded-lg">
        <Camera size={20} className="text-blue-500" />
        <span className="font-semibold">Life event</span>
      </button>
    </div>
  </div>
);

const PostCard = () => (
  <div className="bg-gray-900/80 backdrop-blur-md p-4 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
        <div className="flex items-center">
            <img src="/assets/images.jpeg" className="h-10 w-10 rounded-full" />
            <div className="ml-3">
                <p className="font-bold text-white">Rohith Kanna</p>
                <p className="text-xs text-gray-400">26 December 2005 · 🌍</p>
            </div>
        </div>
        <button className="text-gray-400 hover:bg-gray-700 p-2 rounded-full">
            <MoreHorizontal size={20} />
        </button>
    </div>
    <div className="my-4 text-center">
        <p className="text-4xl">🎉</p>
        <p className="text-xl text-gray-300 mt-2">Born on 26 December 2005</p>
    </div>
    <div className="border-t border-gray-700 pt-2 flex justify-around text-gray-400 font-semibold">
        <button className="flex-1 flex items-center justify-center space-x-2 hover:bg-gray-700 py-2 rounded-lg"><ThumbsUp size={20} /><span>Like</span></button>
        <button className="flex-1 flex items-center justify-center space-x-2 hover:bg-gray-700 py-2 rounded-lg"><MessageCircle size={20} /><span>Comment</span></button>
        <button className="flex-1 flex items-center justify-center space-x-2 hover:bg-gray-700 py-2 rounded-lg"><Share size={20} /><span>Share</span></button>
    </div>
  </div>
);

const PostsFeed = () => (
    <div className="space-y-4">
        <div className="bg-gray-900/80 backdrop-blur-md p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">Posts</h2>
                <div className="flex space-x-2">
                    <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-1.5 px-3 rounded-lg text-sm">
                        <List size={16} className="mr-1" /> Filters
                    </button>
                    <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-1.5 px-3 rounded-lg text-sm">
                        <Grid size={16} className="mr-1" /> Manage posts
                    </button>
                </div>
            </div>
        </div>
        <PostCard />
    </div>
);


// --- Main Component ---

export default function ProfilePage() {
  return (
    <div className="bg-transparent text-white">
      <ProfileHeader />
      <div className="max-w-6xl mx-auto p-4 space-y-4">
        <PeopleYouMayKnow />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 space-y-4">
            <IntroCard />
            <PhotosCard />
            <FriendsCard />
          </div>
          <div className="md:col-span-2 space-y-4">
            <PostComposer />
            <PostsFeed />
          </div>
        </div>
      </div>
    </div>
  );
}


