import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL as BASE_URL } from "../config";


export default function About() {
  const thumbs = [
    "https://www.melodidental.com/wp-content/uploads/Kanal-Tedavisi-1000x438.jpg",
    "https://images1-fabric.practo.com/practices/1220679/smylexl-dental-clinic-pune-5bd0062290c1b.jpg",
    "https://blogs.dentalkart.com/wp-content/uploads/2025/11/Successful-Dentist-Habits.jpg",
    "https://isomer-user-content.by.gov.sg/76/45ff843b-e5d4-4401-a999-6dde2f5bf175/dentist-hd-images.webp",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
  ];

  const images = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
  ];

  const [activeImg, setActiveImg] = useState(0);
  const [team, setTeam] = useState([]);

  const getTeam = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/team`);
      const data = await res.json();
      setTeam(data.data || []);
    } catch (error) {
      console.log("Team fetch error:", error);
    }
  };

  useEffect(() => {
    getTeam();

    const interval = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % thumbs.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [thumbs.length]);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-[hsl(198,65%,84%)]">
        {thumbs.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1800ms] ${activeImg === index ? "scale-100 opacity-100" : "scale-110 opacity-0"
              }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full items-center px-5 md:px-12">
          <div>
            <h1 className="animate-[textUp_1s_ease] text-5xl leading-none tracking-[-3px] text-white sm:text-6xl lg:text-7xl">
              Dental care for
            </h1>
            <h1 className="mt-2 animate-[textUp_1.2s_ease] text-5xl leading-none tracking-[-3px] text-white sm:text-6xl lg:text-7xl">
              confident smiles
            </h1>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full border border-white/30 bg-white/10 p-2 backdrop-blur-md md:bottom-auto md:left-auto md:right-10 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:flex-col">
          {thumbs.map((img, i) => (
            <button key={i} onClick={() => setActiveImg(i)}>
              <img
                src={img}
                alt=""
                className={`h-10 w-10 rounded-full object-cover ring-2 transition-all duration-700 ${activeImg === i ? "scale-110 ring-white" : "ring-white/40 opacity-70"
                  }`}
              />
            </button>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="flex -mt-28 min-h-screen items-center justify-center bg-[#fffaf7] px-6 py-18 text-center">
        <div className="max-w-6xl">
          <div className="mb-8 inline-flex overflow-hidden rounded-xl bg-[#f5f1ee] p-1">
            <span className="rounded-lg bg-[#faf7f5] px-5 py-3 text-xs font-medium uppercase text-[#2b2522]">
              Our Approach
            </span>
          </div>
          <h2 className="text-[24px] font-semibold leading-[1.12] tracking-[-1.2px] text-[#171717] sm:text-[34px] md:text-[40px] lg:text-[45px]">
            High-quality dental treatments tailored to your needs, from
            prevention to complex procedures. A clear, structured approach to
            dental care focused on comfort, precision, and reliable results.
          </h2>
        </div>
      </section>

      {/* PRECISION CARE */}
      {/* PRECISION CARE */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#e7e1db] px-4 py-20">
        <div className="relative flex h-[720px] w-[1350px] max-w-none items-center justify-center sm:h-[850px] lg:h-[960px]">

          {/* outer big circle lines */}
          <div className="absolute left-1/2 top-1/2 h-[860px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8c8178]/30 sm:h-[1000px] sm:w-[1000px] lg:h-[1280px] lg:w-[1280px]" />
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8c8178]/20 sm:h-[820px] sm:w-[820px] lg:h-[1030px] lg:w-[1030px]" />

          {/* rotating inner wheel */}
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 animate-circleRotate rounded-full sm:h-[720px] sm:w-[720px] lg:h-[860px] lg:w-[860px]">
            <div className="absolute inset-0 rounded-full bg-[repeating-conic-gradient(from_0deg,rgba(255,255,255,0.32)_0deg,rgba(255,255,255,0.32)_3deg,transparent_3deg,transparent_16deg)] opacity-70" />

            {images.map((img, i) => {
              const angle = i * (360 / images.length);

              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-260px) rotate(-${angle}deg)`,
                  }}
                >
                  <div className="h-24 w-24 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-[#c8ad88] sm:h-36 sm:w-36 lg:h-48 lg:w-48">
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* center text */}
          <div className="relative z-10 text-center text-[#473f37]">
            <h1 className="text-[24px] font-sans leading-[0.95] tracking-[-2px] sm:text-[38px] lg:text-[40px]">
              Precision Care.
              <br />
              Trusted Team.
            </h1>

            <a
              href="#about"
              className="mt-8 inline-flex items-center gap-2 border-b border-[#473f37] pb-1 text-lg font-medium sm:text-2xl"
            >
              <span className="text-3xl"></span>
            </a>
          </div>
        </div>

        <style>{`
    @keyframes circleRotate {
      from { transform: translate(-50%, -50%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg); }
    }

    .animate-circleRotate {
      animation: circleRotate 45s linear infinite;
    }

    @media (min-width: 640px) {
      .animate-circleRotate > div:not(:first-child) {
        transform: rotate(var(--angle)) translateY(-360px) rotate(calc(-1 * var(--angle)));
      }
    }
  `}</style>
      </section>
      <style>{`
        @keyframes textUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes circleRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-circleRotate {
          animation: circleRotate 35s linear infinite;
        }
      `}</style>


      {/*    */}

      {/* STATS SECTION */}
      <section className="bg-[#f7f4f1] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-4">
          {[
            {
              label: "YEARS",
              value: "12+",
              text: "Clinical excellence.",
            },
            {
              label: "SATISFACTION",
              value: "90%",
              text: "Recommended by patients.",
            },
            {
              label: "SPECIALISTS",
              value: "15",
              text: "Across all dental fields.",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <p className="mb-3 border-b border-[#978e87] pb-3 text-xs font-medium uppercase tracking-[2px] text-[#403a35]">
                {item.label}
              </p>

              <h2 className="text-5xl font-normal leading-none text-[#2f2925] sm:text-6xl">
                {item.value}
              </h2>

              <p className="mt-3 text-base text-[#4b443f] sm:text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/**/}

      {/* SERVICES / FEATURES SECTION */}
      <section className="bg-[#faf8f6] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3">

          {[
            {
              title: "Years in practice",
              desc: "Established in 2006, Caliora has built a reputation for clinical excellence across three international locations.",
              img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
            },
            {
              title: "Patient satisfaction",
              desc: "Delivering personalized dental care with comfort, precision, and long-term patient trust.",
              img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
            },
            {
              title: "Specialist doctors",
              desc: "Highly qualified dental professionals focused on advanced treatment and exceptional care.",
              img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative h-[520px] overflow-hidden rounded-[16px]"
            >
              {/* image */}
              <img
                src={item.img}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#021b34]/95 via-[#021b34]/30 to-[#021b34]/10" />

              {/* content */}
              <div className="absolute bottom-0 left-0 z-10 w-full p-6 sm:p-8">
                <div className="translate-y-6 transition-all duration-500 group-hover:translate-y-0">

                  <h3 className="text-3xl font-semibold tracking-[-1px] text-white">
                    {item.title}
                  </h3>

                  <div className="mt-5 h-px w-full bg-white/40" />

                  <p className="mt-5 max-w-[340px] text-base leading-relaxed text-white/85 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*Team */}
      {/* TEAM SECTION */}
      {/* TEAM SECTION */}
<section className="bg-[#f5f1ed] px-4 py-20 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="text-center">
      <div className="mb-5 inline-flex overflow-hidden rounded-full border border-[#d8cec6] bg-white">
        <span className="px-5 py-2 text-xs font-medium uppercase tracking-[2px] text-[#362626]">
          Our Team
        </span>
      </div>

      <h2 className="mx-auto max-w-4xl text-3xl font-semibold leading-[1.05] tracking-[-1.5px] text-[#2f2925] sm:text-5xl">
        Modern dental care focused on comfort and results.
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6a625d] sm:text-lg">
        Our experienced specialists provide advanced treatments with a
        patient-first approach, ensuring exceptional care and lasting results.
      </p>
    </div>

    <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {team.length > 0 ? (
        team.map((member) => (
          <div
            key={member._id}
            className="group flex min-h-[500px] flex-col overflow-hidden rounded-[26px] border border-[#e3dad3] bg-white shadow-[0_10px_30px_rgba(47,41,37,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(47,41,37,0.16)]"
          >
            {/* IMAGE */}
            <div className="relative h-[255px] overflow-hidden bg-[#eef2f4]">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover object-top transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
            </div>

            {/* CONTENT */}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-xl font-bold tracking-[-0.5px] text-[#2f2925]">
                {member.name}
              </h3>

              <div className="mt-3">
                <span className="inline-flex rounded-full bg-[#f3ece7] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[1.8px] text-[#8b5e3c]">
                  {member.role}
                </span>
              </div>

              <p className="mt-4 line-clamp-4 text-sm leading-6 text-[#6a625d]">
                {member.description ||
                  "Experienced specialist focused on advanced treatments, patient comfort, and long-term dental wellness."}
              </p>

              <div className="mt-auto flex gap-3 pt-6">
                <Link to="/Appointment" className="flex-1">
                  <button className="w-full rounded-full border border-[#d8cec6] px-4 py-2.5 text-xs font-semibold uppercase tracking-[1px] text-[#2f2925] transition-all duration-300 hover:bg-[#2f2925] hover:text-white">
                    About
                  </button>
                </Link>

                <Link to="/Contact" className="flex-1">
                  <button className="w-full rounded-full border border-[#d8cec6] px-4 py-2.5 text-xs font-semibold uppercase tracking-[1px] text-[#2f2925] transition-all duration-300 hover:bg-[#2f2925] hover:text-white">
                    Contact
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No team members found. Please add team members from admin dashboard.
        </p>
      )}
    </div>
  </div>
</section>    
  {/* CTA SECTION */}
      <section className="bg-[#f4f1ee] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#bedffa] to-[#5a9dd3] px-6 py-10 sm:px-10 lg:px-16 lg:py-14">

            {/* BACKGROUND CIRCLES */}
            <div className="absolute -left-20 top-0 h-[420px] w-[420px] rounded-full border border-white/10" />
            <div className="absolute -right-16 bottom-0 h-[300px] w-[300px] rounded-full border border-white/10" />

            {/* TOOTH ICON */}
            <div className="absolute bottom-6 right-4 opacity-20 sm:right-10 sm:opacity-30">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
                alt=""
                className="h-28 w-28 object-contain sm:h-40 sm:w-40"
              />
            </div>

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">

              {/* LEFT IMAGE */}
              <div className="relative flex justify-center lg:justify-start">

                {/* IMAGE GLOW */}
                <div className="absolute bottom-0 h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl" />

                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80"
                  alt=""
                  className="relative z-10 h-[320px] w-auto object-contain sm:h-[420px] lg:-mb-14"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="text-center lg:text-left">

                <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[2px] text-white backdrop-blur-md">
                  Smile Care
                </p>

                <h2 className="text-4xl font-mono leading-[1.05] tracking-[-2px] text-white sm:text-5xl lg:text-6xl">
                  Let’s Make
                  <br />
                  Beauty Smile
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                  We offer extensive Dental Implants, Cosmetic Dentistry &
                  Painless RCT with advanced technology and expert specialists.
                </p>

                {/* BUTTONS */}
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <Link to="/Appointment">
                    <button className="rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[1px] text-[#2f2925] transition-all duration-300 hover:scale-105 hover:bg-[#f4f1ee]">
                      Book Appointment
                    </button>
                  </Link>

                  <Link to="/Contact">
                    <button className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[1px] text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#2f2925]">
                      contact
                    </button>
                  </Link>
                </div>

                {/* STATS */}
                <div className="mt-10 flex flex-wrap justify-center gap-6 lg:justify-start">

                  <div>
                    <h3 className="text-3xl font-semibold text-white">12+</h3>
                    <p className="mt-1 text-sm text-white/70">
                      Years Experience
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-semibold text-white">12k+</h3>
                    <p className="mt-1 text-sm text-white/70">
                      Happy Patients
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-semibold text-white">97%</h3>
                    <p className="mt-1 text-sm text-white/70">
                      Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}