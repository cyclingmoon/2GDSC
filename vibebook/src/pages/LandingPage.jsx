import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const videoRef = useRef(null)
  const audioRef = useRef(null)
  const [showTitle, setShowTitle] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const v = videoRef.current
    const a = audioRef.current
    if (!v || !a) return

    // Try to play audio automatically
    a.play().catch(error => {
      console.warn("Audio autoplay was prevented. User interaction might be needed.", error)
      // You might want to show a UI element to let the user start the audio manually
    });

    const onEnded = () => {
      setShowTitle(true)
      a.pause() // Stop the audio
      setTimeout(() => navigate('/login'), 1800)
    }
    v.addEventListener('ended', onEnded)
    return () => {
      v.removeEventListener('ended', onEnded)
      if (a) {
        a.pause()
        a.currentTime = 0
      }
    }
  }, [navigate])

  return (
    <div className="relative min-h-screen bg-black">
      <video ref={videoRef} className="absolute inset-0 h-full w-full object-cover" src="/assets/carvideo2.mp4" autoPlay muted playsInline />
      <audio ref={audioRef} src="/assets/audio.mp3" />
      <div className="absolute inset-0 bg-black/60" />
      {showTitle && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="glow-title text-5xl sm:text-7xl font-extrabold tracking-widest">FACEBOOK</h1>
          <p className="mt-4 text-xl text-white">Connect and share with the people in your life</p>
        </div>
      )}
    </div>
  )
}


