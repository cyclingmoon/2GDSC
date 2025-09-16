import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function SignupPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '', confirm: '' })

  function onChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function onSubmit(e) {
    e.preventDefault()
    navigate('/home')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-lg rounded-lg bg-black/80 p-6 shadow border border-red-700">
        <h1 className="mb-2 text-center text-3xl font-extrabold glow-title">FACEBOOK</h1>
        <p className="mb-4 text-center text-red-300">Create Account</p>
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input name="firstName" value={form.firstName} onChange={onChange} placeholder="First Name" className="rounded border border-red-700 bg-black/60 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600" required />
          <input name="lastName" value={form.lastName} onChange={onChange} placeholder="Last Name" className="rounded border border-red-700 bg-black/60 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600" required />
          <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" className="sm:col-span-2 rounded border border-red-700 bg-black/60 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600" required />
          <input name="password" type="password" value={form.password} onChange={onChange} placeholder="Password" className="rounded border border-red-700 bg-black/60 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600" required />
          <input name="confirm" type="password" value={form.confirm} onChange={onChange} placeholder="Confirm Password" className="rounded border border-red-700 bg-black/60 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600" required />
          <button type="submit" className="sm:col-span-2 rounded bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700">Create Account</button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-300">
          Already have an account? <Link to="/" className="text-red-400 hover:underline">Back to Login</Link>
        </p>
      </div>
    </div>
  )
}


