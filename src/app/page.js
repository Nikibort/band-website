"use client";
import { useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  const heroRef = useRef(null);
  const slideshowRef = useRef(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [currentMember, setCurrentMember] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const bandMembers = [
    {
      name: "Kiran Behr",
      role: "Vocals",
      description: "Kiran is a Broadway performer and junior at William & Mary, double-majoring in Government and Music. His favorite song to sing is “Freaking Out on the Interstate” by Briston Maroney. Check him out on Broadway in the summer!",
      image: "/kiran.jpg"
    },
    {
      name: "Abel Buell",
      role: "Guitar",
      description: "Hi! I'm Abel from Richmond, Virginia and I'm a senior at William & Mary, majoring in Mathematics. My favorite song to play is \"Come together\" by the Beatles. Old but gold.",
      image: "/abel.JPG"
    },
    {
      name: "John Stanfill",
      role: "Guitar",
      description: "John's a senior at William and Mary studying Marine Biology - check out his reasearch on preservation efforts for endangered turtles! His favorite song to play is “Killby Girl” The Backseat Lovers.",
      image: "/john2.jpg"
    },
    {
      name: "Nikita Bortnichek",
      role: "Bass",
      description: "Nikita's a junior at William and Mary who's studying Data Science and Economics. He's also playing Division 1 tennis for the Tribe. His favorite song to groove to is “Alrighty Aphrodite” by Peach Pit.",
      image: "/nikita.jpg"
    },
    {
      name: "Jack Eyles",
      role: "Drums & Vocals",
      description: "Jack's a senior at William and Mary studying (??). He's part of numerous acapella groups as well as the musical collective Hyennas sound (check out their album on Spotify!). His favorite song to play is “Drag me Down” by One Direction.",
      image: "/jack.JPG"
    }
  ];

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = heroRef.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 20;
    const y = (clientY - top - height / 2) / 20;
    setTransform({ x, y });
  };

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % bandMembers.length);
  };

  const prevMember = () => {
    setCurrentMember((prev) => (prev - 1 + bandMembers.length) % bandMembers.length);
  };

  // Touch handlers for swipe functionality
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextMember();
    }
    if (isRightSwipe) {
      prevMember();
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section with Parallax */}
      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="h-screen bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: "url('/shred.jpg')" }}
      >
        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 bg-black/10 z-0" />

        {/* Parallax Text */}
        <div
          className="absolute bottom-10 left-4 sm:bottom-32 sm:left-24 max-w-xl z-10 transition-transform duration-200 ease-out"
          style={{ transform: `translate(${transform.x}px, ${transform.y}px)` }}
        >
          <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-bold drop-shadow-xl transition-transform duration-300">
            DRIFTWOOD
          </h1>
          <p className="text-white/80 text-lg sm:text-xl md:text-2xl font-light mt-2 drop-shadow-lg">
            William and Mary's premiere rock and pop band
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.instagram.com/driftwood_wm/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61578671517460"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

      </section>

      {/* Band Members Slideshow Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Meet the Band</h2>
          
          <div 
            ref={slideshowRef}
            className="relative"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Main Member Display */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-64 h-64 mb-6 overflow-hidden rounded-full">
                <img
                  src={bandMembers[currentMember].image}
                  alt={bandMembers[currentMember].name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                  style={{ 
                    objectPosition: currentMember === 1 ? 'center 40%' : currentMember === 2 ? 'center 35%' : currentMember === 4 ? 'center 40%' : 'center 40%', 
                    transform: currentMember === 0 ? 'scale(1.1)' : currentMember === 1 ? 'scale(1.2)' : currentMember === 2 ? 'scale(1.3)' : currentMember === 3 ? 'scale(1.1)' : 'scale(1.2)',
                    transformOrigin: currentMember === 1 ? 'center right' : currentMember === 4 ? 'center right' : 'center'
                  }}
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{bandMembers[currentMember].name}</h3>
              <p className="text-lg text-gray-300 mb-4">{bandMembers[currentMember].role}</p>
              <p className="text-center max-w-4xl text-gray-200 leading-relaxed text-base sm:text-lg px-4">
                {bandMembers[currentMember].description}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevMember}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous member"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextMember}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Next member"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Member Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {bandMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMember(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentMember ? 'bg-white' : 'bg-white/40'
                  }`}
                  aria-label={`Go to member ${index + 1}`}
                />
              ))}
            </div>

            {/* Swipe Hint */}
            <div className="text-center mt-6 text-gray-400 text-sm">
              <p className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Swipe or click to explore
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </p>
            </div>
          </div>
        </div>

      </section>

{/* Merch Section */}
  <section
    className="h-screen bg-cover bg-center relative text-white"
    style={{ backgroundImage: "url('/lake.JPG')", backgroundPosition: "center 20%" }}
  >
    {/* Darker overlay for better contrast */}
    <div className="absolute inset-0 bg-black/30 z-0" />

    {/* Content box — bottom left */}
    <div className="absolute bottom-10 left-12 z-10 max-w-xl p-4">
      <p className="text-white text-2xl font-medium leading-relaxed">
        We're Driftwood — William and Mary's premiere rock/pop band. If you want us to play your next event, book us up using the contact info below!
      </p>
      
    </div>
  </section>


      {/* Contact Section */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-2">Email: nbortnichek@gmail.com</p>
        <p className="mb-2">Phone: (571) 389 3605</p>
        <div className="flex justify-center gap-8 mt-2">
          <a
            href="https://www.instagram.com/driftwood_wm/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
        </div>
      </section>
      <Analytics />
    </div> 
  );
}
