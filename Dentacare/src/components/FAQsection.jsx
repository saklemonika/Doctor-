import React, { useState } from "react";

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("CLINIC");
  const [open, setOpen] = useState(null);

  const faqs = {
    CLINIC: [
      {
        q: "How can I book an appointment online?",
        a: "You can book an appointment through our website contact form or by calling our clinic directly.",
      },
      {
        q: "Do you accept medical or dental insurance?",
        a: "Yes, we accept selected insurance plans. Please contact our support team for details.",
      },
      {
        q: "What should I bring to my first visit?",
        a: "Please bring your ID, previous dental records if available, and insurance details.",
      },
      {
        q: "Is there emergency care available after hours?",
        a: "Yes, emergency dental care is available for urgent cases.",
      },
      {
        q: "What payment options do you provide for treatments?",
        a: "We provide cash, card, UPI, and flexible payment options.",
      },
    ],

    DOCTORS: [
      {
        q: "Are your doctors experienced?",
        a: "Yes, our doctors are highly trained and experienced in modern dental care.",
      },
      {
        q: "Can I choose my preferred dentist?",
        a: "Yes, you can request a preferred doctor while booking your appointment.",
      },
      {
        q: "Do doctors explain the full treatment plan?",
        a: "Yes, every treatment plan is clearly explained before starting.",
      },
    ],

    PRICING: [
      {
        q: "Do you provide treatment cost estimates?",
        a: "Yes, we provide clear estimates after your consultation.",
      },
      {
        q: "Are there any hidden charges?",
        a: "No, our pricing is transparent and discussed before treatment.",
      },
      {
        q: "Do you offer installment options?",
        a: "Yes, selected treatments may include installment options.",
      },
    ],
  };

  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-8 lg:px-16">

      {/* BACKGROUND IMAGE */}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-transparent" />

      {/* GRADIENT OVERLAY */}
<div className="absolute inset-0 bg-transparent" />
      {/* BLUR GLOW */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-200 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[360px_1fr]">

        {/* LEFT */}
        <div>
          <span className="inline-flex items-center rounded-full border border-black bg-black px-4 py-2 text-sm uppercase tracking-[2px] text-white backdrop-blur-md">
            ✚ FAQ — Query
          </span>

          <h2 className="mt-8 max-w-[360px] text-4xl font-bold leading-[1.1] tracking-[-2px] text-black md:text-5xl">
            Everything You Need to Know
          </h2>

          <p className="mt-6 text-base leading-8 text-white">
            Get answers to the most common questions about our clinic,
            doctors, treatments, and pricing options.
          </p>
        </div>

        {/* RIGHT */}
        <div>

          {/* TABS */}
          <div className="mb-10 flex flex-wrap justify-start gap-3 lg:justify-end">
            {["CLINIC", "DOCTORS", "PRICING"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setOpen(null);
                }}
                className={`rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[1px] transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-white text-[#42739e] shadow-lg"
                    : "border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-[#003b6f]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* FAQ ITEMS */}
          <div className="space-y-4">
            {faqs[activeTab].map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl transition-all duration-300"
              >
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="flex w-full  justify-between gap-4 px-7 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-white md:text-xl">
                    {item.q}
                  </span>

                  <span className="text-3xl font-light text-white">
                    {open === index ? "−" : "+"}
                  </span>
                </button>

                {open === index && (
                  <div className="px-7 pb-7 text-base leading-8 text-white/75">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}