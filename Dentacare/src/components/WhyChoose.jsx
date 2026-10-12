import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Sparkles,
  HeartHandshake,
  Stethoscope,
  Activity,
  SmilePlus,
} from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: <Stethoscope size={22} />,
      title: "Experienced Doctors",
      desc: "Your health is our priority with expert and advanced dental care.",
    },
    {
      icon: <HeartHandshake size={22} />,
      title: "Personalized Treatments",
      desc: "Customized solutions designed for your comfort and smile.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Quality & Safety",
      desc: "Modern hygiene standards and safe dental procedures.",
    },
    {
      icon: <Clock3 size={22} />,
      title: "Immediate Service",
      desc: "Quick appointments and efficient treatment experience.",
    },
    {
      icon: <BadgeCheck size={22} />,
      title: "Certified Specialists",
      desc: "Professionally trained dental experts for all procedures.",
    },
    {
      icon: <Sparkles size={22} />,
      title: "Ultra Hygienic",
      desc: "Sanitized clinic with premium care and cleanliness.",
    },
    {
      icon: <Activity size={22} />,
      title: "Advanced Technology",
      desc: "Digital diagnostics and modern treatment methods.",
    },
    {
      icon: <SmilePlus size={22} />,
      title: "Comfortable Experience",
      desc: "Gentle treatment focused on patient relaxation.",
    },
  ];

  return (
    <section className="overflow-hidden bg-[#fcfbfb] px-4 py-12 sm:px-6 lg:px-10 lg:py-6">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[3px] text-[#8a7c70] sm:text-sm">
            Why Choose 
          </p>

          <h2 className="max-w-2xl text-xl font-semibold leading-[1.05] tracking-[-1.5px] text-[#2f2925] sm:text-xl md:text-2xl">
            Personalized dental care with precision, comfort & trust.
          </h2>

          {/* FEATURES */}
          <div className="mt-10 space-y-7 sm:mt-14">
            {features.map((item, index) => (
              <div
                key={index}
                className="group flex gap-4 border-b border-[#d8d0ca] pb-6"
              >
                {/* ICON */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d5cbc3] bg-white text-[#2f2925] transition-all duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.5px] text-[#2f2925] sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#5f5751] sm:text-[15px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          
          {/* BACKGROUND GLOW */}
          <div className="absolute top-8 h-[300px] w-[200px] rounded-full bg-[#ddd1c6] blur-3xl sm:h-[420px] sm:w-[260px]" />

          {/* IMAGE CARD */}
          <div className="relative overflow-hidden rounded-t-[120px] rounded-b-[120px] border border-[#d7cec7] bg-white p-2 shadow-[0_20px_70px_rgba(0,0,0,0.08)] sm:rounded-t-[180px] sm:rounded-b-[180px] sm:p-3">
            
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="h-[420px] w-[240px] rounded-t-[110px] rounded-b-[110px] object-cover sm:h-[620px] sm:w-[360px] sm:rounded-t-[170px] sm:rounded-b-[170px]"
            />

            {/* FLOATING BADGE */}
            <div className="absolute bottom-5 left-1/2 flex w-[88%] -translate-x-1/2 items-center gap-3 rounded-full bg-white px-4 py-3 shadow-xl sm:bottom-10 sm:w-auto sm:px-5">
              
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2f2925] text-white sm:h-12 sm:w-12">
                <ShieldCheck size={20} />
              </div>

              <div>
                <p className="text-xs font-semibold text-[#2f2925] sm:text-sm">
                  Trusted Dental Care
                </p>

                <p className="text-[10px] text-[#6f655f] sm:text-xs">
                  Advanced & Safe Treatments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}