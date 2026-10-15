import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import {
  CalendarCheck,
  MessageSquare,
  Stethoscope,
  Users,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { API_URL as BASE_URL } from "../../config";

export default function Dashboard() {
  const [stats, setStats] = useState({
    services: 0,
    appointments: 0,
    contacts: 0,
    team: 0,
  });

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const search =
    searchParams.get("search")?.toLowerCase() || "";

  const getLength = (apiData) => {
    if (Array.isArray(apiData)) return apiData.length;

    if (Array.isArray(apiData?.data))
      return apiData.data.length;

    if (Array.isArray(apiData?.contacts))
      return apiData.contacts.length;

    if (Array.isArray(apiData?.services))
      return apiData.services.length;

    if (Array.isArray(apiData?.appointments))
      return apiData.appointments.length;

    if (Array.isArray(apiData?.team))
      return apiData.team.length;

    return 0;
  };

  const getDashboardData = async () => {
    try {
      const serviceRes = await fetch(
        `${BASE_URL}/api/services`
      );

      const serviceData = await serviceRes.json();

      const appointmentRes = await fetch(
        `${BASE_URL}/api/appointments`
      );

      const appointmentData =
        await appointmentRes.json();

      const contactRes = await fetch(
        `${BASE_URL}/api/contacts`
      );

      const contactData = await contactRes.json();

      const teamRes = await fetch(
        `${BASE_URL}/api/team`
      );

      const teamData = await teamRes.json();

      const serviceCount = getLength(serviceData);

      const appointmentCount =
        getLength(appointmentData);

      const contactCount = getLength(contactData);

      const teamCount = getLength(teamData);

      setStats({
        services: serviceCount,
        appointments: appointmentCount,
        contacts: contactCount,
        team: teamCount,
      });
    } catch (error) {
      console.log(
        "Dashboard data error:",
        error
      );

      // Fallback to localStorage
      const services = JSON.parse(localStorage.getItem("services") || "[]");
      const doctors = JSON.parse(localStorage.getItem("doctors") || "[]");
      const team = JSON.parse(localStorage.getItem("team") || "[]");
      const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");

      setStats({
        services: services.length,
        appointments: 0, // Appointments not stored in localStorage
        contacts: contacts.length,
        team: team.length,
      });
    }
  };

  useEffect(() => {
    getDashboardData();

    const interval = setInterval(() => {
      getDashboardData();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      title: "Total Services",
      value: stats.services,
      icon: Stethoscope,
      bg: "from-cyan-400 to-cyan-500",
    },
    {
      title: "Appointments",
      value: stats.appointments,
      icon: CalendarCheck,
      bg: "from-green-400 to-green-500",
    },
    {
      title: "Contact Messages",
      value: stats.contacts,
      icon: MessageSquare,
      bg: "from-yellow-400 to-yellow-500",
    },
    {
      title: "Team Members",
      value: stats.team,
      icon: Users,
      bg: "from-rose-400 to-rose-500",
    },
  ];

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(search)
  );

  return (
    <AdminLayout>
      {/* PAGE SCROLL */}
      <div className="hide-scroll h-[calc(100vh-70px)] overflow-y-auto p-1">
        
        {/* TOP CARDS */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className={`rounded-[28px] bg-gradient-to-br ${card.bg} p-6 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                >
                  {/* ICON */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                    <Icon size={28} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-sm font-medium tracking-wide text-white/90">
                    {card.title}
                  </h3>

                  {/* VALUE */}
                  <p className="mt-2 text-4xl font-bold tracking-tight text-white">
                    {card.value}
                  </p>
                </div>
              );
            })
          ) : (
            <div className="col-span-full rounded-3xl bg-white p-10 text-center shadow-lg">
              <h3 className="text-lg font-bold text-slate-700">
                No result found
              </h3>
            </div>
          )}
        </div>

        {/* RECENT ACTIVITY */}
        <div className="mt-8 rounded-[30px] bg-white p-6 shadow-lg">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-800">
              Recent Activity
            </h2>

            <div className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[1px] text-slate-600">
              Live Updates
            </div>
          </div>

          <div className="space-y-4">
            {filteredCards.map((card) => (
              <div
                key={card.title}
                className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 transition hover:bg-slate-100"
              >
                <div>
                  <h3 className="text-sm font-semibold text-slate-700">
                    {card.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Updated from database
                  </p>
                </div>

                <div className="rounded-xl bg-white px-4 py-2 text-lg font-bold text-slate-800 shadow-sm">
                  {card.value}
                </div>
              </div>
            ))}

            {filteredCards.length === 0 && (
              <div className="rounded-2xl bg-slate-50 p-4 text-sm font-medium text-slate-500">
                No recent activity found
              </div>
            )}
          </div>
        </div>

        {/* HIDE SCROLLBAR */}
        <style>{`
          .hide-scroll::-webkit-scrollbar {
            display: none;
          }

          .hide-scroll {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </AdminLayout>
  );
}