import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const videoRef = useRef(null)
  const [showTitle, setShowTitle] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onEnded = () => {
      setShowTitle(true)
      setTimeout(() => navigate('/login'), 1800)
    }
    v.addEventListener('ended', onEnded)
    return () => v.removeEventListener('ended', onEnded)
  }, [navigate])

  return (
    <div className="relative min-h-screen bg-black">
      <video ref={videoRef} className="absolute inset-0 h-full w-full object-cover" src="/assets/carvideo2.mp4" autoPlay muted playsInline />
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


