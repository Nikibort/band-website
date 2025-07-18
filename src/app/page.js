"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = heroRef.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 20;
    const y = (clientY - top - height / 2) / 20;
    setTransform({ x, y });
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
          className="absolute bottom-32 left-24 max-w-xl z-10 transition-transform duration-200 ease-out"
          style={{ transform: `translate(${transform.x}px, ${transform.y}px)` }}
        >
          <h1 className="text-white text-8xl font-bold drop-shadow-xl transition-transform duration-300">
            DRIFTWOOD
          </h1>
        </div>
      </section>

{/* Merch Section */}
  <section
    className="h-screen bg-cover bg-center relative text-white"
    style={{ backgroundImage: "url('/lake.jpg')" }}
  >
    {/* Darker overlay for better contrast */}
    <div className="absolute inset-0 bg-black/30 z-0" />

    {/* Content box — bottom left */}
    <div className="absolute bottom-10 left-12 z-10 max-w-xl p-4">
      <p className="text-white text-2xl font-medium leading-relaxed">
        We’re Driftwood — William and Mary's premiere rockband. If you want us to play your next gig, book us up using the contact info below!
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
    </div> 
  );
}
