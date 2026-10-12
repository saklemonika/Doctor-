import React from "react";

export default function HomeServices() {
  const services = [
    {
      category: "Dental services",
      title: "Complete dental care solutions for every stage of life",
      points: ["Preventive dental care", "Teeth cleaning", "Smile consultation"],
      img: "https://img.magnific.com/free-photo/dental-implants-surgery-concept-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-10711.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      category: "Smile care",
      title: "Personalized dental care with expert treatment",
      points: ["Cosmetic dentistry", "Teeth whitening", "Root canal treatment"],
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
    },
    {
      category: "Preventive care",
      title: "Advanced dental treatments for healthy smiles",
      points: ["Dental implants", "Braces & aligners", "Emergency dental care"],
      img: "https://dentalpanache.com/wp-content/uploads/2024/12/kidsd1.png",
    },
    {
      category: "Dental care",
      title: "Modern dental checkups with advanced technology",
      points: ["Digital scan", "Oral examination", "Safe dental treatment"],
      img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section
      id="services"
      className="overflow-hidden  bg-[#f3f7f8] py-16 text-[#073b63] sm:py-12 lg:py-12"
    >
      <div className="mx-auto mt-[-14px] max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-[#252525]">
          Our dental services
        </p>

        <h2 className="mt-2 max-w-xl font-sans text-[12px] leading-[1.05] tracking-[-1.5px] text-[#3c3e3f] sm:text-[30px] lg:text-[45px]">
          Comprehensive dental services for your healthy smile
        </h2>
      </div>

      <div className="mt-8 overflow-hidden">
        <div className="service-marquee flex w-max gap-6 px-2 sm:px-4 lg:px-8">
          {[...services, ...services].map((item, index) => (
            <div
              key={index}
              className="group grid w-[340px] shrink-0 overflow-hidden rounded-xl bg-white shadow-[0_12px_35px_rgba(0,50,90,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,50,90,0.16)] sm:w-[560px] sm:grid-cols-2 lg:w-[680px]"
            >
              {/* Image */}
              <div className="h-[260px] overflow-hidden sm:h-[430px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text */}
              <div className="flex min-h-[360px] flex-col p-6 sm:min-h-[430px] sm:p-8">
                <p className="text-xs font-semibold text-[#5d5e5f]">
                  {item.category}
                </p>

                <h3 className="mt-5 text-[24px] font-bold leading-tight text-[#19191a] sm:text-[28px]">
                  {item.title}
                </h3>

                <div className="mt-auto space-y-3 pt-10 text-sm font-medium text-[#373738]">
                  {item.points.map((point, i) => (
                    <p key={i}>+ {point}</p>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .service-marquee {
          animation: serviceScroll 28s linear infinite;
        }

        .service-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes serviceScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .service-marquee {
            animation-duration: 35s;
          }
        }
      `}</style>
    </section>
  );
}