import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Doctor() {
  const [doctors, setDoctors] = useState([]);

  const getDoctors = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/doctors");
      const data = await res.json();

      if (data.success) {
        setDoctors(data.data);
      }
    } catch (error) {
      console.log("Doctors API Error:", error);
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[rgb(250,250,250)]">
        <div className="mx-auto grid min-h-screen max-w-[1500px] grid-cols-1 items-center lg:grid-cols-2">
          <div className="relative z-10 px-5 py-20 text-center sm:px-8 lg:px-16 lg:text-left">
            <h1 className="animate-[textUp_0.9s_ease_forwards] text-3xl font-black leading-[0.95] tracking-[-2px] text-black opacity-0 sm:text-2xl md:text-3xl lg:text-[45px]">
              Meet the crew that
            </h1>

            <h2 className="mt-3 animate-[textUp_1.2s_ease_forwards] font-serif text-2xl italic leading-none text-[#0f172a] opacity-0 sm:text-2xl md:text-2xl lg:text-[40px]">
              brings you joy
            </h2>

            <p className="mx-auto mt-8 max-w-xl animate-[textUp_1.5s_ease_forwards] text-base leading-8 text-slate-600 opacity-0 sm:text-lg lg:mx-0">
              At our clinic, we prioritize your comfort and well-being while
              providing exceptional care tailored to your needs with modern
              dental technology and experienced specialists.
            </p>

            <div className="mt-10 animate-[textUp_1.8s_ease_forwards] opacity-0">
              <Link
                to="/Appointment"
                className="inline-flex rounded-full bg-[#003b6f] px-8 py-4 text-sm font-semibold text-white transition hover:scale-105 hover:bg-[#02294b]"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          <div className="relative min-h-[400px] overflow-hidden sm:min-h-[500px] lg:min-h-screen">
            <div className="absolute bottom-0 right-[-110px] top-0 w-[500px] overflow-hidden rounded-l-full bg-white shadow-2xl sm:right-[-140px] sm:w-[760px] lg:right-[-170px] lg:w-[850px]">
              <img
                src="https://i1-e.pinimg.com/736x/04/b7/98/04b7981dc9ee30a89e08dd5af7cd484b.jpg"
                alt="Dental Doctor"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes textUp {
            from {
              opacity: 0;
              transform: translateY(80px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* DOCTOR TEAM SECTION */}
      <section className="w-full bg-[rgb(252,254,255)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="relative overflow-hidden rounded-[28px] bg-[#f7f8f8] shadow-xl">
              <img
                src="https://i.pinimg.com/736x/a9/56/b1/a956b102778d9078e5b2c1201c5c90ec.jpg"
                alt="Dental doctor"
                className="h-[420px] w-full object-cover object-top sm:h-[520px]"
              />

              <div className="absolute left-4 top-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
                <span className="h-2.5 w-2.5 rounded-full bg-[#003b6f]" />
                <p className="text-xs font-semibold text-[#082f49] sm:text-sm">
                  15 years of dental care experience
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-[560px] text-center lg:text-left">
            <span className="mb-4 inline-block rounded-full bg-[#dff4ff] px-5 py-2 text-sm font-semibold text-[#003b6f]">
              Expert Dental Team
            </span>

            <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] text-[#003b6f] sm:text-5xl lg:text-[58px]">
              Our experienced team of dental professionals
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Our dental specialists are dedicated to delivering gentle,
              advanced, and personalized oral care. From routine checkups to
              smile makeovers, we focus on patient comfort, safety, and
              long-term dental health.
            </p>

            <div className="mt-8 h-px w-full bg-slate-200" />

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                ["12+", "Expert Doctors"],
                ["8k+", "Happy Patients"],
                ["25+", "Years Experience"],
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="text-3xl font-bold text-[#003b6f]">
                    {item[0]}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {item[1]}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-lg font-semibold text-[#003b6f]">
                Dr. Helena Louise
              </p>
              <p className="text-sm text-slate-500">
                Lead Dental Specialist & Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BACKEND DOCTORS GRID */}
      <section className="bg-[#f5f7fa] px-4 py-16 sm:px-6 lg:px-10">
        <div>
          <h2 className="mb-10 text-center text-3xl font-semibold text-[#003b6f] sm:text-4xl lg:text-5xl">
            All Team
          </h2>
        </div>

        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.length === 0 ? (
            <p className="col-span-full text-center text-slate-500">
              No doctors found
            </p>
          ) : (
            doctors.map((doctor) => (
              <div
                key={doctor._id}
                className="group relative overflow-hidden"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-[340px] w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#27c2ff]/90 via-[#27c2ff]/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 w-full translate-y-10 p-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-2xl font-bold text-white">
                    {doctor.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-white/90">
                    {doctor.role}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="w-full bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="relative mx-auto min-h-[360px] max-w-[1350px] overflow-hidden rounded-none bg-[#c7e5ee] md:min-h-[430px]">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80"
            alt="Dental treatment"
            className="absolute inset-0 h-full w-full object-cover object-right"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#c7e5ee] via-[#c7e5ee]/85 to-transparent" />

          <div className="relative z-10 flex min-h-[360px] items-center px-6 md:min-h-[430px] md:px-20 lg:px-60">
            <div className="max-w-[520px]">
              <h2 className="text-4xl font-bold leading-[1.1] tracking-[-0.04em] text-[#003b6f] sm:text-5xl lg:text-[56px]">
                Let’s create something beautiful together
              </h2>

              <Link
                to="/Appointment"
                className="mt-6 inline-flex rounded bg-[#003b6f] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#02294b]"
              >
                Consult a doctor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}