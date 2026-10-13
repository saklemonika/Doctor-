import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Stethoscope,
  MessageSquare,
  CalendarCheck,
  LogOut,
  X,
  UserRound,
} from "lucide-react";

const menus = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "Services", path: "/admin/AminServices", icon: Stethoscope },
  { name: "Doctors", path: "/admin/Doctors", icon: Stethoscope },
  { name: "Team", path: "/admin/ALLTeam", icon: UserRound },
  { name: "Contacts", path: "/admin/contacts", icon: MessageSquare },
  { name: "Appointments", path: "/admin/appointments", icon: CalendarCheck },
];

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminData");
    navigate("/admin/login");
  };

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 lg:hidden ${open ? "block" : "hidden"
          }`}
      />

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 bg-[#111827] shadow-2xl transition-transform duration-300 lg:static lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex h-20 items-center justify-between px-6">
          <h1 className="text-2xl font-bold text-white">Dental Admin</h1>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-white hover:bg-slate-700 lg:hidden"
          >
            <X />
          </button>
        </div>

        <nav className="space-y-2 p-4">
          {menus.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${active
                    ? "bg-cyan-500 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
              >
                <Icon size={20} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-5 left-4 right-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-2xl bg-slate-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}