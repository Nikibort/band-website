"use client";
import Link from 'next/link';

export default function StorePage() {
  return (
    <div className="min-h-screen bg-gray-800 relative overflow-hidden">
      {/* Spotlights */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-96 bg-gradient-to-b from-yellow-200/20 to-transparent transform -skew-x-12"></div>
        <div className="absolute top-0 right-0 w-1/2 h-96 bg-gradient-to-b from-yellow-200/20 to-transparent transform skew-x-12"></div>
      </div>

      {/* Floating Musical Notes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-gray-400/30 text-2xl animate-bounce" style={{ animationDelay: '0s' }}>♪</div>
        <div className="absolute top-32 right-20 text-gray-400/30 text-xl animate-bounce" style={{ animationDelay: '1s' }}>♫</div>
        <div className="absolute top-48 left-1/4 text-gray-400/30 text-3xl animate-bounce" style={{ animationDelay: '2s' }}>♩</div>
        <div className="absolute top-64 right-1/3 text-gray-400/30 text-lg animate-bounce" style={{ animationDelay: '0.5s' }}>♪</div>
        <div className="absolute top-80 left-1/2 text-gray-400/30 text-2xl animate-bounce" style={{ animationDelay: '1.5s' }}>♫</div>
        <div className="absolute top-96 right-1/4 text-gray-400/30 text-xl animate-bounce" style={{ animationDelay: '2.5s' }}>♩</div>
      </div>



      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-bold text-gray-300 mb-4">404</h1>
        
        {/* Error Messages */}
        <p className="text-xl md:text-2xl text-gray-300 mb-2 text-center">
          Looks like you're off-beat...
        </p>
        <p className="text-lg md:text-xl text-gray-400 mb-8 text-center">
          The page you're looking for missed its cue.
        </p>

        {/* Back to Main Stage Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-6 py-3 bg-gray-700 border border-gray-500 text-gray-300 rounded-lg hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          <span className="text-xl">♪</span>
          <span className="font-medium">BACK TO THE MAIN STAGE</span>
        </Link>
      </div>

      {/* Cartoon Character */}
      <div className="absolute bottom-8 left-8 md:left-16 pointer-events-none">
        <div className="relative">
          {/* Guitar Amp */}
          <div className="w-20 h-14 bg-black rounded-lg border border-gray-600 shadow-lg">
            <div className="w-12 h-8 bg-gray-800 rounded border border-gray-500 mx-auto mt-2"></div>
          </div>
          
          {/* Character */}
          <div className="absolute -top-12 left-3">
            {/* Head */}
            <div className="w-10 h-10 bg-amber-200 rounded-full border-2 border-gray-600 shadow-md">
              {/* Eyes */}
              <div className="absolute top-2 left-2 w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="absolute top-2 right-2 w-1 h-1 bg-gray-800 rounded-full"></div>
              {/* Mouth */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-gray-800 rounded-full"></div>
            </div>
            
            {/* Hat */}
            <div className="absolute -top-1 left-1 w-8 h-3 bg-amber-800 rounded-full shadow-md"></div>
            
            {/* Body */}
            <div className="absolute top-8 left-2 w-6 h-8 bg-gray-800 rounded shadow-md">
              {/* Shirt details */}
              <div className="absolute top-1 left-1 w-4 h-2 bg-gray-700 rounded"></div>
            </div>
            
            {/* Arms */}
            <div className="absolute top-9 left-0 w-3 h-5 bg-amber-200 rounded transform rotate-12 shadow-md"></div>
            <div className="absolute top-9 right-0 w-3 h-5 bg-amber-200 rounded transform -rotate-12 shadow-md"></div>
            
            {/* Guitar */}
            <div className="absolute top-10 left-1 w-8 h-10 bg-black rounded transform rotate-12 shadow-lg">
              {/* Guitar details */}
              <div className="absolute top-1 left-1 w-6 h-2 bg-gray-700 rounded"></div>
              <div className="absolute top-4 left-1 w-6 h-1 bg-gray-600 rounded"></div>
              <div className="absolute top-6 left-1 w-6 h-1 bg-gray-600 rounded"></div>
            </div>
            
            {/* Cable */}
            <div className="absolute bottom-2 left-5 w-1 h-6 bg-black transform rotate-45 shadow-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 