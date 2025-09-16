import { useState } from 'react'

export default function SettingsPage() {
  const [form, setForm] = useState({ name: 'Rohith Kanna', email: 'rohith@example.com', password: '' })
  function onChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }
  function onSubmit(e) {
    e.preventDefault()
    alert('Settings saved (simulated).')
  }
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="mb-4 text-xl font-semibold text-white">Settings</h2>
      <form onSubmit={onSubmit} className="space-y-4 rounded-lg bg-gray-800/80 backdrop-blur-md p-6 shadow">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-300">Name</label>
          <input name="name" value={form.name} onChange={onChange} className="w-full rounded border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-300">Email</label>
          <input name="email" type="email" value={form.email} onChange={onChange} className="w-full rounded border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-300">Password</label>
          <input name="password" type="password" value={form.password} onChange={onChange} placeholder="New password" className="w-full rounded border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500" />
        </div>
        <button className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">Save</button>
      </form>
    </div>
  )
}


