import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Ambulance,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";
import { API_URL as BASE_URL } from "../config";

const API_URL = `${BASE_URL}/api/services`;

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const fallbackImg =
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80";

  const images = [
    {
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
      title: "Patient Care",
    },
    {
      img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
      title: "Dental Consultation",
    },
    {
      img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      title: "Primary Consultation",
    },
    {
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      title: "General Checkup",
    },
    {
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
      title: "Expert Dentist",
    },
  ];

  useEffect(() => {
    const getServices = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        if (data.success && Array.isArray(data.data)) {
          setServices(data.data);
        } else if (Array.isArray(data)) {
          setServices(data);
        } else {
          setServices([]);
        }
      } catch (error) {
        console.log("Services fetch error:", error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    getServices();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 2600);

    return () => clearInterval(timer);
  }, [images.length]);

  const getSlideClass = (index) => {
    const total = images.length;
    const diff = (index - activeSlide + total) % total;

    if (diff === 0) return "heltro-center";
    if (diff === 1) return "heltro-right-1";
    if (diff === 2) return "heltro-right-2";
    if (diff === total - 1) return "heltro-left-1";
    if (diff === total - 2) return "heltro-left-2";

    return "heltro-hidden";
  };
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden bg-[#c1d9e2]">
        <img
          src="https://cvdentistryllc.com/wp-content/uploads/2026/03/dental-anxiety-patient-mesa-az-clinic.webp"
          alt="Dental care"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#93b8c7]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a3b4d]/90 via-[#88c0ee]/55 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-140px)] max-w-7xl items-center px-5 pt-24 pb-28 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <h1 className="text-[28px] font-bold leading-[1.05] tracking-[-2px] text-white sm:text-[45px] lg:text-[48px]">
              Trusted Dental Care
              <br />
              for Every Generation
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/90 sm:text-lg">
              We combine modern technology with heartfelt service to ensure
              every generation gets confident, comfortable dental care with
              experienced specialists.
            </p>

            <Link
              to="/Appointment"
              className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-[#063c40] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e6f7f6]"
            >
              Book Appointment
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#063c40] text-white">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* INFO CARDS */}
        <div className="relative z-20 border-y border-white/25 bg-white/10 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/20 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex gap-4 py-6 text-white md:px-8"
            >
              <CalendarDays className="mt-1 shrink-0" size={30} />
              <div>
                <h3 className="text-xl font-bold">Get An Appointment</h3>
                <p className="mt-3 max-w-xs text-sm font-medium leading-6 text-white/85">
                  Ready for a healthier smile? Book your visit today.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex gap-4 py-6 text-white md:px-8"
            >
              <Ambulance className="mt-1 shrink-0" size={30} />
              <div>
                <h3 className="text-xl font-bold">Emergency Contact</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-white/85">
                  Call : +91 94672848993 <br />
                  Email: smilifye@gmail.com
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex gap-4 py-6 text-white md:px-8"
            >
              <Clock3 className="mt-1 shrink-0" size={30} />
              <div>
                <h3 className="text-xl font-bold">Opening Hours</h3>
                <div className="mt-3 grid grid-cols-2 gap-x-8 text-sm font-medium leading-6 text-white/85">
                  <span>Mon-Fri</span>
                  <span>8:00-17:00</span>
                  <span>Sat-Sun</span>
                  <span>9:30-17:30</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BACKEND SERVICES */}
      <section className="relative bg-[#f7f6f3] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#76a9cc]">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-1px] text-[#063c40] sm:text-5xl">
              Comprehensive dental care services
            </h2>
          </div>

          {loading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-[260px] animate-pulse rounded-[30px] bg-white shadow-lg"
                />
              ))}
            </div>
          ) : services.length === 0 ? (
            <div className="rounded-3xl bg-white p-10 text-center shadow-lg">
              <h3 className="text-xl font-bold text-[#063c40]">
                No services found
              </h3>

              <p className="mt-2 text-slate-500">
                Admin dashboard se service add karo, phir yaha show hogi.
              </p>
            </div>
          ) : (
            <div
              className="relative"
              style={{
                minHeight: `${services.length * 430}px`,
              }}
            >
              {services.map((item, index) => (
                <div
                  key={item._id || index}
                  className="sticky top-[90px]"
                  style={{
                    zIndex: index + 1,
                    paddingTop: index === 0 ? "0px" : "16px",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 70, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.75,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: false, amount: 0.45 }}
                    className="mx-auto max-w-6xl overflow-hidden rounded-[30px] border border-white/70 bg-white shadow-[0_25px_70px_rgba(6,60,64,0.14)]"
                  >
                    <div
                      className={`grid items-center gap-4 p-4 sm:p-6 lg:grid-cols-2 lg:p-8 ${index % 2 !== 0
                          ? "lg:[&>*:first-child]:order-2"
                          : ""
                        }`}
                    >
                      <div className="overflow-hidden rounded-[26px]">
                        <img
                          src={item.image || fallbackImg}
                          alt={item.title || "Dental service"}
                          className="h-[220px] w-full object-cover transition-all duration-700 hover:scale-105 sm:h-[340px]"
                        />
                      </div>

                      <div>
                        <span className="rounded-full bg-[#dbeef8] px-4 py-2 text-[10px] font-bold uppercase tracking-[2px] text-[#4b8bb5]">
                          Dental Care
                        </span>

                        <h2 className="mt-4 text-2xl font-bold leading-tight tracking-[-1px] text-[#063c40] sm:text-4xl">
                          {item.title}
                        </h2>

                        <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* HELTRO STYLE ROTATING IMAGE SECTION */}
      <section className="overflow-hidden bg-white px-4 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[3px] text-[#76a9cc]">
            Patient Care
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-[-1px] text-[#063c40] sm:text-5xl">
            Where expert dental care meets comfort
          </h2>
        </div>

        <div
          className="relative mx-auto h-[360px] max-w-8xl overflow-hidden sm:h-[460px] lg:h-[560px]"
          style={{ perspective: "1400px" }}
        >
          <div className="relative flex h-full items-center justify-center">
            {images.map((item, index) => (
              <div
                key={index}
                className={`heltro-slide-card ${getSlideClass(index)}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                <p className="absolute bottom-7 left-0 right-0 text-center text-sm font-semibold text-white sm:text-lg">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
  .heltro-slide-card {
    position: absolute;
    overflow: hidden;
    border-radius: 8px;
    background: white;
    box-shadow: 0 30px 80px rgba(0,0,0,.18);
    transition: all 1.2s cubic-bezier(.22,1,.36,1);
    transform-style: preserve-3d;
  }

  /* CENTER IMAGE */
  .heltro-center {
    height: 470px;
    width: 300px;
    opacity: 1;
    z-index: 20;
    transform:
      translate3d(0,0,140px)
      scale(1.08)
      rotateY(0deg);
  }

  /* LEFT 1 */
  .heltro-left-1 {
    height: 450px;
    width: 300px;
    opacity: .95;
    z-index: 15;
    transform:
      translate3d(-300px,0,-20px)
      rotateY(30deg)
      scale(.93);
  }

  /* LEFT 2 */
  .heltro-left-2 {
    height: 450px;
    width: 300px;
    opacity: .55;
    z-index: 10;
    transform:
      translate3d(-540px,0,-120px)
      rotateY(42deg)
      scale(.82);
  }

  /* RIGHT 1 */
  .heltro-right-1 {
    height: 450px;
    width: 300px;
    opacity: .95;
    z-index: 15;
    transform:
      translate3d(300px,0,-20px)
      rotateY(-30deg)
      scale(.93);
  }

  /* RIGHT 2 */
  .heltro-right-2 {
    height: 450px;
    width: 300px;
    opacity: .55;
    z-index: 10;
    transform:
      translate3d(540px,0,-120px)
      rotateY(-42deg)
      scale(.82);
  }

  /* HIDDEN */
  .heltro-hidden {
    opacity: 0;
    z-index: 1;
    transform:
      translate3d(0,0,-300px)
      scale(.6);
  }

  /* MOBILE */
  @media (max-width: 768px) {

    .heltro-center {
      height: 320px;
      width: 220px;
    }

    .heltro-left-1,
    .heltro-right-1 {
      height: 260px;
      width: 170px;
    }

    .heltro-left-2,
    .heltro-right-2 {
      display: none;
    }

    .heltro-left-1 {
      transform:
        translate3d(-130px,0,-50px)
        rotateY(25deg)
        scale(.88);
    }

    .heltro-right-1 {
      transform:
        translate3d(130px,0,-50px)
        rotateY(-25deg)
        scale(.88);
    }
  }
`}</style>
      </section>

      <section className="w-full bg-[#f5f5f3] px-6 py-18 sm:px-6 lg:px-24">
        <div className="mx-auto max-w-8xl">
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1400&q=80"
              alt="Clinic care"
              className="h-[240px] w-full object-cover sm:h-[380px] lg:h-[500px]"
            />
          </div>

          <div className="mt-8 sm:mt-10">
            <h2 className="max-w-3xl text-2xl font-semibold leading-tight tracking-[-1px] text-black sm:text-3xl lg:text-[42px]">
              How our clinic culture enhances patient care
            </h2>

            <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-600 sm:text-[18px] sm:leading-8">
              At our clinic, a strong culture of compassion, collaboration, and
              clinical excellence guides everything we do. Our team works
              closely across specialties to ensure accurate diagnosis,
              personalized treatment plans, and seamless care experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f5] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-start">
          <div className="max-w-xl">
            <h2 className="text-lg font-semibold leading-tight tracking-[-2px] text-[#82adce] sm:text-3xl">
              Supporting your
              <br />
              smile journey
              <br />
              and oral health
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-500 sm:text-lg">
              Monitor your dental wellness, maintain healthy teeth, and achieve
              confident smiles with advanced dental treatments and expert care.
            </p>

            <Link to="/Appointment">
              <button className="mt-10 rounded-md bg-[#7faccf] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#062c4a]">
                Book Appointment
              </button>
            </Link>
          </div>

          <div className="space-y-8">
            {[
              ["98%", "Patient satisfaction rate"],
              ["10k+", "Successful dental treatments completed"],
              ["6.5k+", "Teeth whitening & smile makeover sessions"],
              ["12+", "Years of trusted dental experience"],
            ].map(([number, text], index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-8 border-b border-slate-300 pb-6"
              >
                <h3 className="text-3xl font-semibold text-[#9cb4c7] sm:text-5xl">
                  {number}
                </h3>
                <p className="max-w-[180px] text-sm leading-7 text-slate-500 sm:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}