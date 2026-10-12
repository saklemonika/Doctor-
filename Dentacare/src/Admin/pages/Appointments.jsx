import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import {
  CheckCircle,
  MessageCircle,
  Trash2,
  Mail,
} from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const location = useLocation();

  // SEARCH FILTER
  const searchParams = new URLSearchParams(location.search);

  const search =
    searchParams.get("search")?.toLowerCase() || "";

  // GET APPOINTMENTS
  const getAppointments = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/appointments"
      );

      const data = await res.json();

      setAppointments(data.data || []);
    } catch (error) {
      console.log("Appointments fetch error:", error);
    }
  };

  // CONFIRM APPOINTMENT
  const confirmAppointment = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/appointments/confirm/${id}`,
        {
          method: "PUT",
        }
      );

      const data = await res.json();

      if (data.success) {
        setAppointments((prev) =>
          prev.map((item) =>
            item._id === id
              ? { ...item, status: "Confirmed" }
              : item
          )
        );
      }
    } catch (error) {
      console.log("Confirm error:", error);
    }
  };

  // DELETE APPOINTMENT
  const deleteAppointment = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this appointment?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/appointments/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.success) {
        setAppointments((prev) =>
          prev.filter((item) => item._id !== id)
        );
      }
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  // FILTER
  const filteredAppointments = appointments.filter(
    (item) => {
      const searchText = `
        ${item.name || ""}
        ${item.email || ""}
        ${item.phone || ""}
        ${item.service || ""}
        ${item.date || ""}
        ${item.time || ""}
        ${item.status || ""}
        ${item.message || ""}
      `.toLowerCase();

      return searchText.includes(search);
    }
  );

  return (
    <AdminLayout>
      <div className="h-[calc(100vh-130px)] overflow-hidden rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
        
        {/* HEADER */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#063c40]">
              Appointments
            </h2>
          </div>

          <div className="rounded-2xl bg-[#063c40] px-4 py-2 text-sm font-semibold text-white">
            Total: {filteredAppointments.length}
          </div>
        </div>

        {/* LIST */}
        <div className="custom-scrollbar h-[calc(100vh-240px)] space-y-5 overflow-y-auto pr-2 scroll-smooth">
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((item) => (
              <div
                key={item._id}
                className="rounded-[28px] border border-slate-100 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
                  
                  {/* LEFT INFO */}
                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Patient Name
                      </p>

                      <h3 className="mt-2 text-lg font-bold text-[#063c40]">
                        {item.name}
                      </h3>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Service
                      </p>

                      <p className="mt-2 text-sm font-medium text-slate-700">
                        {item.service}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Date & Time
                      </p>

                      <p className="mt-2 text-sm font-medium text-slate-700">
                        {item.date} • {item.time}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Phone
                      </p>

                      <p className="mt-2 text-sm font-medium text-slate-700">
                        {item.phone}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Email
                      </p>

                      <p className="mt-2 break-all text-sm font-medium text-slate-700">
                        {item.email}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Status
                      </p>

                      <div
                        className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                          item.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-600"
                        }`}
                      >
                        {item.status || "Pending"}
                      </div>
                    </div>

                    <div className="sm:col-span-2 xl:col-span-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Message
                      </p>

                      <p className="mt-2 rounded-2xl bg-white p-4 text-sm leading-7 text-slate-600 shadow-sm">
                        {item.message ||
                          "No message provided"}
                      </p>
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="grid grid-cols-2 gap-3 lg:w-[260px]">
                    
                    {/* CONFIRM */}
                    <button
                      onClick={() =>
                        confirmAppointment(item._id)
                      }
                      disabled={
                        item.status === "Confirmed"
                      }
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#063c40] px-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#042f32] disabled:cursor-not-allowed disabled:bg-slate-400"                    >
                      <CheckCircle size={17} />
                      Confirm
                    </button>

                    {/* WHATSAPP */}
                    <a
                      href={`https://wa.me/91${
                        item.phone
                      }?text=${encodeURIComponent(
                        `Hello ${item.name}, your appointment for ${item.service} is confirmed on ${item.date} at ${item.time}.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#063c40] px-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#042f32] disabled:cursor-not-allowed disabled:bg-slate-400"                    >
                      <MessageCircle size={17} />
                      WhatsApp
                    </a>

                    {/* EMAIL */}
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${
                        item.email
                      }&su=${encodeURIComponent(
                        "Reply from WebixDentalCare"
                      )}&body=${encodeURIComponent(
                        `Hello ${item.name},

                     Thank you for booking an appointment with WebixDentalCare.

                    Your appointment for ${item.service} is scheduled on ${item.date} at ${item.time}.
                        Regards,
                    WebixDentalCare Team`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-blue-50 px-3 text-sm font-medium text-blue-600 transition-all duration-300 hover:bg-blue-100"                    >
                      <Mail size={17} />
                      Email
                    </a>

                    {/* DELETE */}
                    <button
                      onClick={() =>
                        deleteAppointment(item._id)
                      }
                      className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-red-50 px-3 text-sm font-medium text-red-600 transition-all duration-300 hover:bg-red-100"
                    >
                      <Trash2 size={17} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-3xl bg-slate-50 p-10 text-center">
              <h3 className="text-lg font-bold text-slate-700">
                No appointments found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Patient appointments will appear here
              </p>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}