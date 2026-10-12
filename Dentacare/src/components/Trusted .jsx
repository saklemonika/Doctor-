import React from "react";
import { Link } from "react-router-dom";


export default function Trusted() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-28 text-[#111827]">
      <div className="relative mx-auto flex min-h-[620px] max-w-6xl items-center justify-center">

        {/* Big Circle */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eef0ef]" />

        {/* Floating Images */}
        {/* Top Left Image */}
        <img
          src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=400&q=80"
          className="
    absolute left-[14%] top-6
    h-32 w-32 rounded-[22px]
    object-cover shadow-xl
    animate-[floatOne_6s_ease-in-out_infinite]
  "
          alt="Dental care"
        />

        {/* Top Right Image */}
        <img
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=400&q=80"
          className="
    absolute right-[16%] top-0
    h-28 w-44 rounded-[22px]
    object-cover shadow-xl
    animate-    [floatTwo_7s_ease-in-out_infinite]
  "
          alt="Dentist"
        />

        {/* Bottom Left Image */}
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=400&q=80"
          className="
    absolute bottom-4 left-[14%]
    h-40 w-42 rounded-[22px]
    object-cover shadow-xl
    animate-[floatThree_8s_ease-in-out_infinite]
  "
          alt="Doctor"
        />

        {/* Bottom Right Image */}
        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80"
          className="
    absolute bottom-4 right-[12%]
    h-36 w-44 rounded-[22px]
    object-cover shadow-xl
    animate-[floatFour_7s_ease-in-out_infinite]
  "
          alt="Patient"
        />
        {/* Center Content */}
        <div className="relative z-10 max-w-xl text-center">
          <span className="inline-flex items-center rounded-sm border border-slate-300 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-700">
            ✦ Welcome to Oralic
          </span>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-1px] md:text-5xl">
            Trusted Dental Care <br />
            for a Brighter Smile.
          </h2>

          <p className="mx-auto mt-5 max-w-md text-[13px] leading-6 text-slate-600">
            At the heart of our practice is a commitment to precision and
            patient comfort. We don&apos;t just treat symptoms; we focus on the
            long-term health and vitality of your smile.
          </p>

          {/* Strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 border-y border-slate-200 bg-white/80 py-2 text-[11px] font-medium uppercase text-slate-700">
            <span>Specialists</span>
            <span className="text-sky-600">✳</span>

            <span>Apply Today</span>
            <span className="text-sky-600">✳</span>

            <span>Prevention</span>
            <span className="text-sky-600">✳</span>

            <span>99% Patient Satisfaction</span>
          </div>

          {/* Buttons */}
<div className="mt-8 flex justify-center gap-3">
  
  {/* ABOUT BUTTON */}
  <Link to="/about">
    <button className="rounded bg-[#17213a] px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-white transition hover:bg-[#0f172a]">
      More About Us •
    </button>
  </Link>

  {/* SERVICES BUTTON */}
  <Link to="/services">
    <button className="rounded bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-[#17213a] shadow-sm transition hover:bg-[#f3f4f6]">
      Our Services •
    </button>
  </Link>

</div>      
  </div>
      </div>
    </section>
  );
}