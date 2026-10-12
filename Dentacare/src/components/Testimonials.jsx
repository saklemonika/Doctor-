import React, { useEffect, useState } from "react";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "David Kim",
      role: "Founder & CEO",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      text: "They listened carefully to our needs and translated ideas into stunning, tangible design assets. Their work was clear, modern and highly engaging.",
    },
    {
      name: "Sophia Lee",
      role: "Marketing Head",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      text: "The whole experience was smooth and professional. The final result improved our brand presence and helped us connect better with customers.",
    },
    {
      name: "Michael Brown",
      role: "Clinic Director",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      text: "Their attention to detail and creative direction made our project stand out. Everything was delivered on time with excellent quality.",
    },
    {
      name: "Emily Carter",
      role: "Product Manager",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      text: "A very reliable team with strong design thinking. They understood our vision and converted it into a beautiful user experience.",
    },
    {
      name: "Robert Wilson",
      role: "Business Owner",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      text: "The design quality, communication and support were excellent. We received exactly what we wanted with a polished professional look.",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[active];

  return (
    <section className="overflow-hidden bg-[#f3f3f3] px-5 py-20 text-black sm:px-8 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[180px_1fr]">
          
          {/* Left Label */}
          <div>
            <span className="relative -top-8 inline-flex items-center gap-2 bg-white px-6 py-2 text-sm font-serif shadow-sm">
              → Process
            </span>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="max-w-[300px] text-xl font-semibold font-black  leading-[0.95] tracking-[-2px] sm:text-3xl md:text-xl lg:text-3xl">
             Testimonial
            </h2>

            {/* Content */}
            <div className="relative mt-14 grid gap-10 lg:grid-cols-[1fr_260px]">
              
              {/* Text */}
              <div className="transition-all duration-500">
                <div className="mb-5 flex gap-2 text-xl text-red-700">
                  ★ ★ ★ ★ ★
                </div>

                <p className="max-w-[650px] text-xl font-medium leading-relaxed tracking-[-0.5px] sm:text-2xl">
                  “{current.text}”
                </p>
              </div>

              {/* Quote */}
              <div className="hidden items-start justify-end lg:flex">
                <span className="text-[180px] font-black leading-none text-black/10">
                  ”
                </span>
              </div>
            </div>

            {/* Profile Slider */}
            <div className="mt-16 flex w-full items-center justify-end gap-2 overflow-x-auto pb-3 scrollbar-hide">
              {testimonials.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`flex flex-shrink-0 items-center gap-4 overflow-hidden rounded-md border bg-white/70 p-1 backdrop-blur-sm transition-all duration-500 ${
                    active === index
                      ? "w-[240px] border-slate-300 shadow-md"
                      : "w-[72px] border-transparent"
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-16 w-16 flex-shrink-0 rounded object-cover"
                  />

                  <div
                    className={`text-left transition-all duration-300 ${
                      active === index
                        ? "opacity-100"
                        : "pointer-events-none opacity-0"
                    }`}
                  >
                    <h4 className="whitespace-nowrap text-sm font-semibold">
                      {item.name}
                    </h4>

                    <p className="whitespace-nowrap text-xs text-slate-500">
                      {item.role}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}