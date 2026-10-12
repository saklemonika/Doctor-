import React, { useState } from "react";
import {
  ArrowUpRight,
  MapPin,
  PhoneCall,
  Send,
  User,
  Mail,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-blue-400">
        <div className="absolute inset-0">
          <img
            src="https://i1-e.pinimg.com/1200x/11/66/cb/1166cbe75658d47804a50120da5e1c63.jpg"
            alt="Patient care"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#5aaee0]/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/40 via-[#334155]/20 to-[#dfe3eb]/40" />
        </div>

        <div className="relative z-10 flex min-h-[620px] items-center justify-center px-6 py-20 text-center sm:px-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[55px]">
              Book your appointment
              <br />
              or contact our team
            </h1>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 z-20 w-[290px] rounded-xl bg-white p-3 shadow-2xl sm:w-[320px]">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80"
              alt="Healthcare"
              className="h-20 w-28 rounded-xl object-cover"
            />

            <p className="flex-1 text-sm leading-6 text-slate-600">
              Trusted services for healthier, happier lives
            </p>

          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-t-[12px]">
            <img
              src="https://i.pinimg.com/736x/63/b1/a9/63b1a95a82532b382eb71a1b73a94290.jpg"
              alt="Patient care"
              className="h-[420px] w-full object-cover sm:h-[620px]"
            />
          </div>

          <div className="mx-auto w-full max-w-[520px]">
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-[#003b6f] sm:text-5xl">
              Say, hello
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
              Caring for your health with compassion your trusted partner in
              better health where healing begins with a smile
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-7"
            >
              <div className="relative border-b border-slate-200 pb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name*"
                  className="w-full bg-transparent pr-10 text-sm text-[#003b6f] outline-none placeholder:text-[#003b6f]"
                />

                <User
                  className="absolute right-0 top-0 text-[#003b6f]"
                  size={19}
                />
              </div>

              <div className="relative border-b border-slate-200 pb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="info@example.com*"
                  className="w-full bg-transparent pr-10 text-sm text-[#003b6f] outline-none placeholder:text-[#003b6f]"
                />

                <Mail
                  className="absolute right-0 top-0 text-[#003b6f]"
                  size={19}
                />
              </div>

              <div className="relative border-b border-slate-200 pb-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number*"
                  className="w-full bg-transparent pr-10 text-sm text-[#003b6f] outline-none placeholder:text-[#003b6f]"
                />

                <PhoneCall
                  className="absolute right-0 top-0 text-[#003b6f]"
                  size={19}
                />
              </div>

              <div className="relative border-b border-slate-200 pb-12">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type message..."
                  rows="3"
                  className="w-full resize-none bg-transparent pr-10 text-sm text-[#003b6f] outline-none placeholder:text-[#003b6f]"
                />

                <MessageSquare
                  className="absolute right-0 top-0 text-[#003b6f]"
                  size={19}
                />
              </div>

              <button
                type="submit"
                className="rounded bg-[#003b6f] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#02294b]"
              >
                Submit message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="max-w-[520px]">
            <h2 className="text-3xl font-medium leading-tight tracking-[-0.04em] text-[#252627] sm:text-3xl lg:text-[35px]">
              Have questions? Contact our team anytime
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-500">
              Have questions? Contact our team anytime for prompt, friendly,
              and reliable medical support.
            </p>

            <div className="mt-12 space-y-7">
              {[
                {
                  icon: <MapPin size={22} />,
                  title: "Find us on",
                  text: "Australia -121 King Melbourne VIC,\n30 new road",
                },
                {
                  icon: <PhoneCall size={22} />,
                  title: "Let’s contact with us",
                  text: "(888) 123 4560",
                },
                {
                  icon: <Send size={22} />,
                  title: "Email address",
                  text: "info@example.com",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-5 ${
                    index !== 2
                      ? "border-b border-slate-200 pb-6"
                      : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#003b6f]/20 text-[#003b6f]">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#141414]">
                      {item.title}
                    </h4>

                    <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="overflow-hidden shadow-xl">
              <img
                src="https://i1-e.pinimg.com/1200x/47/ef/e0/47efe028474c9ab0ff7e26faa5e2c702.jpg"
                alt="Medical Team"
                className="h-[420px] w-full object-cover sm:h-[620px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}