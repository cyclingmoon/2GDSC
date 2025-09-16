import { Film, PlayCircle } from 'lucide-react';

export default function VideoPage() {
  const reels = [
    { id: 1, user: 'ReelUser1', videoUrl: '/assets/carvideo.mp4', thumbnail: '/assets/images.jpeg' },
    { id: 2, user: 'ReelUser2', videoUrl: '/assets/carvideo.mp4', thumbnail: '/assets/images.jpeg' },
    { id: 3, user: 'ReelUser3', videoUrl: '/assets/carvideo.mp4', thumbnail: '/assets/images.jpeg' },
    { id: 4, user: 'ReelUser4', videoUrl: '/assets/carvideo.mp4', thumbnail: '/assets/images.jpeg' },
  ];

  const mainVideos = [
    { id: 1, title: 'Exploring the Mountains', channel: 'AdventureVids', views: '1.2M', age: '3 days ago', thumbnail: '/assets/images.jpeg' },
    { id: 2, title: 'City Nightlife', channel: 'UrbanExplorer', views: '800K', age: '1 week ago', thumbnail: '/assets/images.jpeg' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Film className="text-red-500" size={28} />
          <h2 className="text-2xl font-bold text-white">Reels and short videos</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {reels.map(reel => (
            <div key={reel.id} className="relative rounded-lg overflow-hidden group">
              <video
                src={reel.videoUrl}
                poster={reel.thumbnail}
                className="w-full h-64 object-cover"
                muted
                loop
                onMouseOver={e => e.target.play()}
                onMouseOut={e => e.target.pause()}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayCircle size={48} className="text-white" />
              </div>
              <p className="absolute bottom-2 left-2 text-white font-semibold">{reel.user}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-gray-700" />

      <div>
        <h2 className="mb-4 text-2xl font-bold text-white">Recommended Videos</h2>
        <div className="space-y-6">
          {mainVideos.map(video => (
            <div key={video.id} className="flex flex-col sm:flex-row gap-4">
              <img src={video.thumbnail} alt={video.title} className="w-full sm:w-64 h-auto object-cover rounded-lg" />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">{video.title}</h3>
                <p className="text-sm text-gray-400">{video.channel}</p>
                <p className="text-sm text-gray-400">{video.views} views • {video.age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}