import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-[#90c0db] px-4 py-14 sm:px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="grid gap-12 border-b border-white/40 pb-12 md:grid-cols-2 lg:grid-cols-4">

          {/* LOGO & ABOUT */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#549fdb]">
              WebixDentalCare
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#234b4f]">
              Providing trusted dental care with advanced treatments,
              experienced doctors, and modern technology for healthier
              and brighter smiles.
            </p>

            {/* SOCIAL */}
            <div className="mt-2 flex flex-wrap items-center gap-3">

              {/* FACEBOOK */}
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-blue-500 px-3 py-2 text-sm font-semibold text-[#063c40] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white hover:shadow-lg"
              >
                <FaFacebookF size={13} />
              </a>
              {/* INSTAGRAM */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-blue-500 px-3 py-2 text-sm font-semibold text-[#063c40] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0A66C2] hover:text-white"

              >
                <FaInstagram className="text-[13px] " />
              </a>
              {/* LINKEDIN */}
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-blue-500 px-3 py-2 text-sm font-semibold text-[#063c40] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0A66C2] hover:text-white"
              >
                <FaLinkedinIn size={13} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-semibold text-[#063c40]">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-sm font-medium text-[#234b4f]">
              <a href="/" className="transition hover:text-black">
                Home
              </a>

              <a href="/about" className="transition hover:text-black">
                About
              </a>

              <a href="/services" className="transition hover:text-black">
                Services
              </a>

              <a href="/doctor" className="transition hover:text-black">
                Doctor
              </a>

              <a href="/contact" className="transition hover:text-black">
                Contact
              </a>

              <a
                href="/Appointment"
                className="transition hover:text-black"
              >
                Appointment
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xl font-semibold text-[#063c40]">
              Dental Services
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-sm font-medium text-[#234b4f]">
              <p>Teeth Whitening</p>
              <p>Dental Implants</p>
              <p>Root Canal</p>
              <p>Smile Makeover</p>
              <p>Braces & Aligners</p>
              <p>General Dental Care</p>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-semibold text-[#063c40]">
              Contact Info
            </h3>

            <div className="mt-5 space-y-5">

              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-1 text-[#063c40]"
                />

                <p className="text-sm leading-7 text-[#234b4f]">
                  245 Smile Avenue,
                  <br />
                  New Delhi, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="text-[#063c40]"
                />

                <p className="text-sm text-[#234b4f]">
                  +91 9876543210
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={20}
                  className="text-[#063c40]"
                />

                <p className="text-sm text-[#234b4f]">
                  webixdental@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center sm:flex-row">

          <p className="text-sm text-[#234b4f]">
            © 2026 WebixDental. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-[#234b4f]">
            <a href="/" className="hover:text-black">
              Privacy Policy
            </a>

            <a href="/" className="hover:text-black">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}