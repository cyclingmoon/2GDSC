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
      <video ref={videoRef} className="absolute inset-0 h-full w-full object-cover" src="/assets/carvideo.mp4" autoPlay muted playsInline />
      <div className="absolute inset-0 bg-black/60" />
      {showTitle && (
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="glow-title text-5xl sm:text-7xl font-extrabold tracking-widest">FACEBOOK</h1>
        </div>
      )}
    </div>
  )
}


