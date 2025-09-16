import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const vantaRef = useRef(null)
  const vantaEffectRef = useRef(null)

  useEffect(() => {
    let cleanup
    ;(async () => {
      const THREE = await import('three')
      const VANTA = await import('vanta/dist/vanta.waves.min')
      vantaEffectRef.current = VANTA.default({
        THREE: THREE,
        el: vantaRef.current,
        color: 0xef4444,
        shininess: 50,
        waveHeight: 20,
        waveSpeed: 0.8,
        zoom: 0.85
      })
      cleanup = () => vantaEffectRef.current && vantaEffectRef.current.destroy()
    })()
    return () => cleanup && cleanup()
  }, [])

  function onSubmit(e) {
    e.preventDefault()
    navigate('/home')
  }

  return (
    <div ref={vantaRef} className="relative min-h-screen">
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md rounded-lg bg-black/80 p-6 shadow-lg border border-red-600">
          <h1 className="mb-6 text-center text-3xl font-extrabold glow-title">FACEBOOK</h1>
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full rounded border border-red-700 bg-black/60 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full rounded border border-red-700 bg-black/60 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <button type="submit" className="w-full rounded bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700 transition transform hover:scale-[1.02]">Login</button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-300">
            Don't have an account?{' '}
            <Link to="/signup" className="text-red-400 hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}


