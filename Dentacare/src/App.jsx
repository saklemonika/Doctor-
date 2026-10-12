import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { HeartPulse, ShieldCheck, Stethoscope, Cpu } from "lucide-react";

import Navbar from "./components/Nabvar";
import Footer from "./Footer";
import Services from "./components/Services";
import Trusted from "./components/Trusted ";
import HomeServices from "./components/HomeServeces";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQsection";
import FeaturesSection from "./FeaturesSection";
import About from "./components/About";
import Doctor from "./components/Doctor";
import Contact from "./components/Contact";
import WhyChoose from "./components/WhyChoose";
import Appointment from "./components/Appointment";

import AdminLogin from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import AdminServices from "./admin/pages/Services";
import Contacts from "./admin/pages/Contacts";
import Appointments from "./admin/pages/Appointments";
import Doctors from "./admin/pages/Doctors";
import ProtectedAdmin from "./admin/ProtectedAdmin";
import TeamALL from "./Admin/pages/ALLTeam";

import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const features = [
    { icon: ShieldCheck, title: "Preventive Care" },
    { icon: Stethoscope, title: "Modern medical care" },
    { icon: HeartPulse, title: "Expert care" },
    { icon: Cpu, title: "Advanced technology" },
  ];

  return (
    <BrowserRouter>
      {/* PAGE TOP SCROLL */}
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="h-screen bg-[#93b8c7] text-white">
                <Navbar />

                <section
                  id="home"
                  className="relative overflow-hidden bg-[#93b8c7] pt-20"
                >
                  <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl grid-cols-1 items-center gap-8 px-5 py-10 lg:grid-cols-[42%_58%] lg:px-8 lg:py-0">
                    {/* LEFT */}
                    <div className="relative z-20 text-center lg:text-left">
                      <h1 className="mx-auto max-w-[560px] text-4xl font-bold leading-tight tracking-[-1px] text-white sm:text-5xl lg:mx-0 lg:text-6xl">
                        Smarter intelligence for better patient care
                      </h1>

                      <p className="mx-auto mt-5 max-w-[520px] text-base font-semibold leading-7 text-white/90 lg:mx-0">
                        Streamlined clinical workflows boost efficiency, cut
                        wait times, and enable faster, patient-centered care
                        experiences
                      </p>

                      <button className="mt-7 rounded-lg bg-[#004b79] px-6 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#003b61]">
                        Explore more
                      </button>

                      <div className="mx-auto mt-12 grid max-w-[380px] grid-cols-2 gap-3 lg:mx-0">
                        {features.map((item, i) => {
                          const Icon = item.icon;

                          return (
                            <div
                              key={i}
                              className="flex h-[44px] items-center gap-2 rounded-lg bg-white px-3 text-[#004b79] shadow-sm"
                            >
                              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#edf7fb] text-[#7baec0]">
                                <Icon size={12} strokeWidth={2.3} />
                              </span>

                              <p className="text-[11px] font-bold leading-none">
                                {item.title}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* RIGHT IMAGE AREA */}
                    <div className="relative flex -right-14 h-[400px] items-end justify-center overflow-hidden rounded-t-[40px] lg:h-[calc(100vh-80px)] lg:rounded-none">
                      <img
                        src="https://i.pinimg.com/736x/07/77/af/0777af85651010e91a733560601f257d.jpg"
                        alt="Doctor"
                        className="relative z-20 h-full w-full object-cover object-[95%_20%] transition-all duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-r from-[#93b8c7]/15 via-transparent to-transparent" />

                      {/* SCROLL CIRCLE */}
                      <div className="absolute bottom-10 right-8 z-20 hidden h-[78px] w-[78px] items-center justify-center rounded-full bg-[#004b79] shadow-2xl lg:flex">
                        <span className="relative z-10 text-3xl font-light text-white">
                          ↓
                        </span>

                        <div className="absolute -inset-5 animate-[spin_16s_linear_infinite] rounded-full">
                          <svg viewBox="0 0 120 120" className="h-full w-full">
                            <defs>
                              <path
                                id="circlePath"
                                d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                              />
                            </defs>

                            <text className="fill-white text-[10px] font-bold uppercase tracking-[3px]">
                              <textPath href="#circlePath">
                                Scroll down • Scroll down • Scroll down •
                              </textPath>
                            </text>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <Trusted />
              <HomeServices />
              <FeaturesSection />
              <Testimonials />
              <FAQSection />
              <WhyChoose />

              <section className="bg-[#f4f1ee] px-4 py-16 sm:px-6 lg:px-12">
                <div className="mx-auto max-w-7xl">
                  <div className="relative overflow-hidden bg-gradient-to-r from-[#bedffa] to-[#5a9dd3] px-2 py-6 sm:px-6 lg:px-8 lg:py-12">
                    <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
                      <div className="relative flex justify-center lg:justify-start">
                        <img
                          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80"
                          alt=""
                          className="relative z-10 h-[360px] w-auto object-contain sm:h-[460px] lg:-mb-14"
                        />
                      </div>

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
                          We offer extensive Dental Implants, Cosmetic Dentistry
                          & Painless RCT with advanced technology.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                          <Link to="/Appointment">
                            <button className="rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[1px] text-[#2f2925] transition-all duration-300 hover:scale-105 hover:bg-[#f4f1ee]">
                              Book Appointment
                            </button>
                          </Link>

                          <Link to="/Contact">
                            <button className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[1px] text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#2f2925]">
                              Contact
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />

        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
              <Footer />
            </>
          }
        />

        <Route
          path="/Doctor"
          element={
            <>
              <Navbar />
              <Doctor />
              <Footer />
            </>
          }
        />

        <Route
          path="/Contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/Appointment"
          element={
            <>
              <Navbar />
              <Appointment />
              <Footer />
            </>
          }
        />

        {/* ADMIN ROUTES */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedAdmin>
              <Dashboard />
            </ProtectedAdmin>
          }
        />

        <Route
          path="/admin/services"
          element={
            <ProtectedAdmin>
              <AdminServices />
            </ProtectedAdmin>
          }
        />

        <Route
          path="/admin/contacts"
          element={
            <ProtectedAdmin>
              <Contacts />
            </ProtectedAdmin>
          }
        />

        <Route
          path="/admin/appointments"
          element={
            <ProtectedAdmin>
              <Appointments />
            </ProtectedAdmin>
          }
        />

        <Route
          path="/admin/Doctors"
          element={
            <ProtectedAdmin>
              <Doctors />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/admin/TeamALL"
          element={
            <ProtectedAdmin>
              <TeamALL />
            </ProtectedAdmin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}