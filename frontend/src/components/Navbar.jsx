import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home","About","Exercises","BMI","Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent  ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* 🔥 Typewriter Logo */}
        <h1 className="text-2xl font-extrabold text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]">
          <Typewriter
            words={["Fit With Ali"]}
            loop={true}
            cursor
            cursorStyle="."
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={2000}
          />
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {links.map(link => (
            <a key={link} href={`#${link}`} className="relative group text-gray-300 hover:text-red-400">
              {link}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className={`h-0.5 w-6 bg-white transition ${open && "rotate-45 translate-y-2"}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open && "opacity-0"}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open && "-rotate-45 -translate-y-2"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ${open ? "max-h-96" : "max-h-0 overflow-hidden"}`}>
        <div className="bg-black/90 px-6 py-4 space-y-4">
          {links.map(link => (
            <a key={link} href={`#${link}`} onClick={() => setOpen(false)} className="block text-lg text-gray-300 hover:text-red-400">
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

