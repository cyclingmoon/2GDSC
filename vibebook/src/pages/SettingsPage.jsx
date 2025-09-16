import { ArrowLeft, Moon, Sun, Contrast, Keyboard } from 'lucide-react';
import { useState } from 'react';

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState('off');
  const [compactMode, setCompactMode] = useState('off');

  return (
    <div className="max-w-2xl mx-auto text-white">
      <div className="flex items-center mb-6">
        <button className="p-2 rounded-full hover:bg-gray-700">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold ml-4">Display & accessibility</h1>
      </div>

      <div className="space-y-6">
        {/* Dark Mode Section */}
        <div className="flex items-start">
          <div className="p-2 bg-gray-700 rounded-full mr-4">
            <Moon size={24} />
          </div>
          <div className="flex-grow">
            <h2 className="text-lg font-semibold">Dark mode</h2>
            <p className="text-gray-400 text-sm">Adjust the appearance of Vibebook to reduce glare and give your eyes a break.</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="dark-off">Off</label>
                <input type="radio" id="dark-off" name="darkMode" value="off" checked={darkMode === 'off'} onChange={() => setDarkMode('off')} className="form-radio h-5 w-5 text-red-600 bg-gray-800 border-gray-600 focus:ring-red-500" />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="dark-on">On</label>
                <input type="radio" id="dark-on" name="darkMode" value="on" checked={darkMode === 'on'} onChange={() => setDarkMode('on')} className="form-radio h-5 w-5 text-red-600 bg-gray-800 border-gray-600 focus:ring-red-500" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="dark-auto">Automatic</label>
                  <p className="text-gray-400 text-xs">We'll automatically adjust the display based on your device's system settings.</p>
                </div>
                <input type="radio" id="dark-auto" name="darkMode" value="auto" checked={darkMode === 'auto'} onChange={() => setDarkMode('auto')} className="form-radio h-5 w-5 text-red-600 bg-gray-800 border-gray-600 focus:ring-red-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700"></div>

        {/* Compact Mode Section */}
        <div className="flex items-start">
          <div className="p-2 bg-gray-700 rounded-full mr-4">
            <Contrast size={24} />
          </div>
          <div className="flex-grow">
            <h2 className="text-lg font-semibold">Compact mode</h2>
            <p className="text-gray-400 text-sm">Make your font size smaller so that more content can fit on the screen.</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="compact-off">Off</label>
                <input type="radio" id="compact-off" name="compactMode" value="off" checked={compactMode === 'off'} onChange={() => setCompactMode('off')} className="form-radio h-5 w-5 text-red-600 bg-gray-800 border-gray-600 focus:ring-red-500" />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="compact-on">On</label>
                <input type="radio" id="compact-on" name="compactMode" value="on" checked={compactMode === 'on'} onChange={() => setCompactMode('on')} className="form-radio h-5 w-5 text-red-600 bg-gray-800 border-gray-600 focus:ring-red-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700"></div>

        {/* Keyboard Section */}
        <div className="flex items-center">
          <div className="p-2 bg-gray-700 rounded-full mr-4">
            <Keyboard size={24} />
          </div>
          <div className="flex-grow">
            <h2 className="text-lg font-semibold">Keyboard</h2>
          </div>
          <button className="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}



