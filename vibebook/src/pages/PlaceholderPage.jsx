export default function PlaceholderPage({ title }) {
  return (
    <div className="rounded-lg bg-gray-800/80 backdrop-blur-md p-6 text-white shadow">
      <h2 className="text-2xl font-bold text-red-500">{title}</h2>
      <p className="mt-2 text-gray-300">
        This is a placeholder page for {title}. Content will be added here soon.
      </p>
      <img src={`https://source.unsplash.com/800x600/?${title.toLowerCase().replace(' ', '-')}`} alt={title} className="mt-4 rounded-lg" />
    </div>
  )
}


