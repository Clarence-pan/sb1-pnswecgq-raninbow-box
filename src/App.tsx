import React from 'react';
import { RainbowBox } from './components/RainbowBox';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <h1 className="text-2xl font-bold text-center mb-8">Rainbow Box Component</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-64">
            <RainbowBox>
              <p className="text-lg font-medium text-gray-800">Hover me!</p>
            </RainbowBox>
          </div>
          
          <div className="h-64">
            <RainbowBox>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">Rainbow Effect</h3>
                <p className="text-gray-600">This box shows a beautiful rainbow animation on hover</p>
              </div>
            </RainbowBox>
          </div>
          
          <div className="h-64 md:col-span-2">
            <RainbowBox>
              <div className="flex flex-col items-center justify-center space-y-4 p-6">
                <h2 className="text-2xl font-bold text-gray-900">Flexible Content</h2>
                <p className="text-gray-600 text-center">
                  RainbowBox can contain any content and will adapt to its container's size.
                  Hover over this box to see the rainbow border animation!
                </p>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">
                  Example Button
                </button>
              </div>
            </RainbowBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;