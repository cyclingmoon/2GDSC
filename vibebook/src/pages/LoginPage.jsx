import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    navigate('/home');
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/carimages.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4 lg:justify-start lg:p-20">
        <div className="w-full max-w-md lg:w-1/2 lg:max-w-none lg:pr-16">
          <h1 className="text-5xl font-bold text-red-600 glow-title mb-4">Facebook</h1>
          <p className="text-2xl text-white">Facebook helps you connect and share with the people in your life.</p>
        </div>
        <div className="hidden lg:flex w-full max-w-md rounded-lg bg-black/80 p-6 shadow-lg border border-red-600 lg:w-1/2">
          <div className="w-full">
            <form onSubmit={onSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address or phone number"
                className="w-full rounded border border-red-700 bg-black/60 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full rounded border border-red-700 bg-black/60 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <button type="submit" className="w-full rounded bg-red-600 px-4 py-3 font-bold text-white hover:bg-red-700 transition transform hover:scale-[1.02]">Log In</button>
            </form>
            <div className="text-center my-4">
              <Link to="#" className="text-sm text-red-400 hover:underline">Forgotten password?</Link>
            </div>
            <hr className="border-gray-600" />
            <div className="mt-6 text-center">
              <Link to="/signup" className="w-full inline-block rounded bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700 transition transform hover:scale-[1.02]">Create new account</Link>
            </div>
            <p className="mt-6 text-center text-sm text-gray-300">
              <Link to="#" className="font-bold hover:underline">Create a Page</Link> for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


