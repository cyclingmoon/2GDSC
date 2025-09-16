export default function PlaceholderPage({ title }) {
  return (
    <div className="rounded-lg border border-red-700 bg-black/60 p-6 text-white shadow">
      <h2 className="text-2xl font-bold text-red-500">{title}</h2>
      <p className="mt-2 text-red-300">This is a placeholder. Navigation works correctly.</p>
    </div>
  )
}


