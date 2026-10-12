import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Doctor", path: "/Doctor" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-[74px] max-w-7xl border-x-indigo-500 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-bold tracking-[-1px] text-[#007fa8] sm:text-2xl"
        >
          WebixDentalCare
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative text-sm font-semibold text-[#062041] transition-all duration-300 hover:text-[#008bb8]"
            >
              {item.name}

              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#008bb8] transition-all duration-300 hover:w-full" />
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          
          {/* APPOINTMENT BUTTON */}
          <Link
            to="/Appointment"
            className="hidden rounded-full bg-[#006b92] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#005b7c] md:flex"
          >
            Appointment
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-[#062041] shadow-md transition-all duration-300 hover:bg-[#006b92] hover:text-white lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-5 py-5">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#062041] transition-all duration-300 hover:bg-[#e8f7fc] hover:text-[#008bb8]"
            >
              {item.name}
            </Link>
          ))}

          {/* MOBILE BUTTON */}
          <Link
            to="/Appointment"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center rounded-full bg-[#006b92] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#005b7c]"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}