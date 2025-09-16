import { useState } from 'react'

export default function SettingsPage() {
  const [form, setForm] = useState({ name: 'Alex Johnson', email: 'alex@example.com', password: '' })
  function onChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }
  function onSubmit(e) {
    e.preventDefault()
    alert('Settings saved (simulated).')
  }
  return (
    <div className="max-w-xl">
      <h2 className="mb-4 text-xl font-semibold text-red-500">Settings</h2>
      <form onSubmit={onSubmit} className="space-y-3 rounded-lg bg-black/60 p-4 shadow border border-red-700">
        <div>
          <label className="mb-1 block text-sm text-red-300">Name</label>
          <input name="name" value={form.name} onChange={onChange} className="w-full rounded border border-red-700 bg-black/60 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600" />
        </div>
        <div>
          <label className="mb-1 block text-sm text-red-300">Email</label>
          <input name="email" type="email" value={form.email} onChange={onChange} className="w-full rounded border border-red-700 bg-black/60 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600" />
        </div>
        <div>
          <label className="mb-1 block text-sm text-red-300">Password</label>
          <input name="password" type="password" value={form.password} onChange={onChange} className="w-full rounded border border-red-700 bg-black/60 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600" />
        </div>
        <button className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">Save</button>
      </form>
    </div>
  )
}


