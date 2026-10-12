import React, { useState } from "react";
import { ArrowRight, Pause, ChevronRight } from "lucide-react";

export default function Appointment() {
  const schedules = [
    {
      day: "Monday",
      time: "(10:00am–11:00am)",
      department: "Senior cardiologist",
      doctor: "Dr. Jorven Zairen",
      active: true,
    },
    {
      day: "Tuesday",
      time: "(10:00am–11:00am)",
      department: "Orthopaedics",
      doctor: "Dr. Olivia Brown",
    },
    {
      day: "Wednesday",
      time: "(1:00pm–2:00pm)",
      department: "Dental care",
      doctor: "Dr. Tonia Cox",
    },
    {
      day: "Wednesday",
      time: "(12:00Pm–2:00Pm)",
      department: "Diagnostic",
      doctor: "Dr. Emily Carter",
    },
    {
      day: "Thursday",
      time: "(10:00am–11:00am)",
      department: "Cardiology specialist",
      doctor: "Dr. Wallence Motz",
    },
    {
      day: "Friday",
      time: "(2:00pm–3:00pm)",
      department: "Cardiology specialist",
      doctor: "Dr. Kellan Drove",
    },
    {
      day: "Friday",
      time: "(4:00pm–5:00pm)",
      department: "Orthopaedics",
      doctor: "Dr. James Wilson",
    },
    {
      day: "Saturday",
      time: "(3:00pm–4:00pm)",
      department: "Diagnostic",
      doctor: "Dr. Larkin Jones",
    },
  ];

  const faqs = [
    {
      q: "How do you ensure safe dental treatments?",
      a: "We follow strict sterilization protocols, use advanced dental equipment, and maintain the highest hygiene standards to ensure every treatment is completely safe and comfortable.",
    },
    {
      q: "Do you provide painless dental procedures?",
      a: "Yes, we use modern painless dentistry techniques and gentle care methods to make treatments stress-free and comfortable for every patient.",
    },
    {
      q: "How often should I visit the dentist?",
      a: "We recommend visiting the dentist every six months for regular checkups, teeth cleaning, and early detection of dental problems.",
    },
    {
      q: "What cosmetic dental services do you offer?",
      a: "We provide teeth whitening, smile makeovers, veneers, braces, aligners, and other cosmetic treatments to improve your smile confidently.",
    },
    {
      q: "How do you protect patient dental records?",
      a: "All patient dental records are stored securely using protected digital systems with complete privacy and confidentiality.",
    },
  ];

  const [active, setActive] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:5000/api/appointments";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage("Appointment booked successfully ✅");

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          doctor: "",
          date: "",
          time: "",
          message: "",
        });
      } else {
        setSuccessMessage("Appointment booking failed ❌");
      }
    } catch (error) {
      console.log(error);
      setSuccessMessage("Server error, please try again ❌");
    } finally {
      setLoading(false);

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
  };

  return (
    <>
      {/* HERO SECTION */}
<section className="relative min-h-[720px] overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <img
    src="https://i.pinimg.com/736x/63/b1/a9/63b1a95a82532b382eb71a1b73a94290.jpg"
    alt="Appointment"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-[#0f172a]/55" />

  {/* BLUE GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#003b6f]/40 via-transparent to-[#003b6f]/40" />

  {/* CONTENT */}
  <div className="relative z-10 flex min-h-[750px] items-center justify-center px-4 text-center">

    <div className="max-w-">

      <h1 className="text-xl font-bold leading-[1] tracking-[-2px] text-white sm:text-xl lg:text-[45px]">
        Easy appointment
        <br />
        scheduling
      </h1>
    </div>
  </div>

  {/* BOTTOM FLOATING CARD */}
  <div className="absolute bottom-6 right-4 z-20 w-[200px] rounded-lg bg-white p-4 shadow-[0_25px_60px_rgba(0,0,0,0.25)] sm:right-8 sm:w-[390px]">

    <div className="flex items-center gap-4">

      {/* IMAGE */}
      <div className="relative h-16 w-18 overflow-hidden rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=500&q=80"
          alt="Healthcare"
          className="h-full w-full object-cover"
        />

        {/* PLAY BUTTON */}
        <div className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#003b6f] shadow-md">
          <Pause size={14} fill="currentColor" />
        </div>
      </div>

      {/* TEXT */}
      <div className="flex-1">

        <h3 className="text-base font-semibold text-[#003b6f]">
          Trusted healthcare services
        </h3>

        <p className="mt-2 text-sm leading-7 text-slate-500">
          Providing expert medical care for healthier and happier lives.
        </p>

      </div>
    </div>
  </div>

</section> 
     {/* SCHEDULE SECTION */}
      <section className="bg-[#f5f7f8] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#adafb1] sm:text-5xl">
              Schedule your health
              <br />
              checkup
            </h2>
          </div>

          <div className="space-y-4">
            {schedules.map((item, index) => (
              <div
                key={index}
                className={`group grid overflow-hidden rounded-2xl border border-slate-200 transition-all duration-300 md:grid-cols-3 ${
                  item.active
                    ? "bg-[#afcbe4] text-white"
                    : "bg-white hover:bg-[#dff4ff] hover:shadow-xl"
                }`}
              >
                <div className="border-b border-slate-200/20 px-6 py-6 md:border-b-0 md:border-r">
                  <h3
                    className={`text-lg font-semibold transition ${
                      item.active
                        ? "text-white"
                        : "text-[#003b6f] group-hover:text-[#003b6f]"
                    }`}
                  >
                    {item.day}
                    <span
                      className={`ml-1 text-sm font-medium ${
                        item.active ? "text-white/80" : "text-slate-500"
                      }`}
                    >
                      {item.time}
                    </span>
                  </h3>
                </div>

                <div className="border-b border-slate-200/20 px-6 py-6 md:border-b-0 md:border-r">
                  <p
                    className={`text-sm font-medium transition ${
                      item.active
                        ? "text-white"
                        : "text-slate-500 group-hover:text-[#003b6f]"
                    }`}
                  >
                    {item.department}
                  </p>
                </div>

                <div className="px-6 py-6">
                  <p
                    className={`text-sm font-medium transition ${
                      item.active
                        ? "text-white"
                        : "text-slate-500 group-hover:text-[#003b6f]"
                    }`}
                  >
                    {item.doctor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT FORM */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#f5f7f8] p-6 shadow-xl sm:p-10">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold text-[#7aaed8]">
              Book Appointment
            </p>

            <h2 className="text-3xl font-bold text-[#003b6f] sm:text-5xl">
              Make an Appointment
            </h2>

            <p className="mt-4 text-slate-500">
              Fill the form and our team will confirm your appointment.
            </p>
          </div>

          {successMessage && (
            <div className="mb-6 rounded-xl bg-green-100 px-5 py-4 text-center font-semibold text-green-700">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-[#003b6f]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-[#003b6f]"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-[#003b6f]"
              required
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-[#003b6f]"
              required
            >
              <option value="">Select Service</option>
              <option value="Dental Cleaning">Dental Cleaning</option>
              <option value="Root Canal Treatment">Root Canal Treatment</option>
              <option value="Metallic Braces">Metallic Braces</option>
              <option value="Teeth Whitening">Teeth Whitening</option>
              <option value="Dental Implant">Dental Implant</option>
            </select>

            <input
              type="text"
              name="doctor"
              placeholder="Doctor Name"
              value={formData.doctor}
              onChange={handleChange}
              className="rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-[#003b6f]"
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-[#003b6f]"
              required
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-[#003b6f]"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="rounded-xl border border-slate-300 bg-white p-4 outline-none focus:border-[#003b6f] md:col-span-2"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-[#003b6f] px-8 py-4 font-semibold text-white transition hover:bg-[#00294d] disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2"
            >
              {loading ? "Booking..." : "Confirm Appointment"}
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#414344] sm:text-3xl lg:text-[45px]">
            Frequently asked
            <br />
            dental questions
          </h2>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-3">
              {faqs.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`flex w-full items-center justify-between rounded-xl px-5 py-5 text-left shadow-sm transition-all duration-300 ${
                    active === index
                      ? "bg-[#92bfe6] text-white"
                      : "bg-[#f7f9fb] text-[#a1c7e7] hover:bg-[#dff4ff]"
                  }`}
                >
                  <span className="text-sm font-semibold sm:text-base">
                    {index + 1}. {item.q}
                  </span>

                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition ${
                      active === index
                        ? "bg-white text-[#003b6f]"
                        : "bg-white text-[#003b6f]"
                    }`}
                  >
                    <ChevronRight size={18} />
                  </span>
                </button>
              ))}
            </div>

            <div className="rounded-2xl bg-[#f5f7f8] p-8 shadow-sm sm:p-12">
              <h3 className="text-3xl font-bold text-[#003b6f]">Answer:</h3>

              <div className="my-6 h-px w-full bg-slate-300" />

              <p className="text-sm leading-8 text-slate-600 sm:text-base">
                {faqs[active].a}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}