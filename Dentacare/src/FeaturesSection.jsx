import React, { useState } from "react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Pain-free care",
      text: "Comfort-focused treatment with modern dental technology.",
    },
    {
      title: "Digital planning",
      text: "Smart diagnosis and accurate planning for every patient.",
    },
    {
      title: "Specialist team",
      text: "Experienced doctors for safe and personalized treatment.",
    },
    {
      title: "Transparency",
      text: "Clear communication, pricing, and treatment process.",
    },
  ];

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpoM0fLJcDcIB3ksbzgg7DhVN7dGT6usk1lw&s",
    "https://images1-fabric.practo.com/parasu-dental-hospital-chennai-1460182155-57089c8b4ccaf.jpg",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80",
  ];

  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-[#ece6e6] px-6 py-16 text-[#181616] md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[360px_1fr]">
        
        {/* Left Content */}
<div className="sticky top-24">
  <h2 className="text-3xl font-semibold">Features</h2>

  <p className="mt-5 max-w-[330px] text-sm leading-6 text-black/60">
    Our clinic is equipped with modern technology and structured
    processes that ensure accurate diagnosis, efficient treatments,
    and a comfortable patient experience.
  </p>

  <div className="mt-6 space-y-2">
    {features.map((item, index) => (
      <div key={index} className="flex gap-2">
        
        {/* NUMBER BUTTON */}
        <button
          onClick={() => {
            setActive(index);
            setOpen(open === index ? null : index);
          }}
          className={`h-9 w-9 flex-shrink-0 rounded-md text-sm font-semibold text-white transition-all duration-300 ${
            active === index
              ? "bg-[#241c19]"
              : "bg-[#242323]"
          }`}
        >
          {index + 1}
        </button>

        {/* CONTENT */}
        <div className="w-full overflow-hidden rounded-md bg-white/30 backdrop-blur-sm">
          
          <button
            onClick={() => {
              setActive(index);
              setOpen(open === index ? null : index);
            }}
            className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-black/70"
          >
            {item.title}

            <span
              className={`text-lg transition-transform duration-300 ${
                open === index ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>

          {open === index && (
            <p className="px-4 pb-4 text-xs leading-6 text-black/55">
              {item.text}
            </p>
          )}
        </div>
      </div>
    ))}
  </div>
</div>
        {/* Right Image */}
        <div>
          <div className="overflow-hidden rounded-md">
            <img
              src="https://www.usdental.in/wp-content/themes/UsDental25/images/homebanner-left.png"
              alt="Dental feature"
              className="h-[420px] w-full object-cover transition-all duration-500 md:h-[520px]"
            />
          </div>

          <div className="mt-3 grid grid-cols-4 gap-3">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => {
                  setActive(index);
                  setOpen(index);
                }}
                className={`overflow-hidden rounded-md border-2 transition ${
                  active === index
                    ? "border-white"
                    : "border-transparent opacity-80"
                }`}
              >
                <img
                  src={img}
                  alt=""
                  className="h-16 w-full object-cover md:h-20"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}