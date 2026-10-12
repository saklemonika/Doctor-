import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import {
  MessageCircle,
  Trash2,
  Mail,
} from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  // SEARCH
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const search =
    searchParams.get("search")?.toLowerCase() || "";

  // GET CONTACTS
  const getContacts = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/contacts"
      );

      const data = await res.json();

      setContacts(data.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE CONTACT
  const deleteContact = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/contacts/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Message deleted successfully");

        setContacts((prev) =>
          prev.filter((item) => item._id !== id)
        );
      }
    } catch (error) {
      console.log(error);
      alert("Delete failed");
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  // FILTER CONTACTS
  const filteredContacts = contacts.filter((item) => {
    const searchText = `
      ${item.name || ""}
      ${item.email || ""}
      ${item.phone || ""}
      ${item.message || ""}
    `.toLowerCase();

    return searchText.includes(search);
  });

  return (
    <AdminLayout>
      <div className="hide-scroll h-[calc(100vh-70px)] overflow-y-auto bg-[#f3f7fb] p-4 md:p-6">

        {/* HEADER */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-5 shadow-sm">
          <div>
            <h2 className="text-2xl font-bold text-[#063c40]">
              Contact Messages
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage all patient contact messages
            </p>
          </div>

          <div className="rounded-xl bg-[#063c40] px-4 py-2 text-sm font-semibold text-white shadow-md">
            Total: {filteredContacts.length}
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">

          <table className="w-full min-w-[1000px] text-left">

            {/* TABLE HEADER */}
            <thead className="sticky top-0 z-20 bg-[#eaf7ff]">
              <tr className="text-sm text-[#063c40]">
                <th className="rounded-tl-2xl p-4 font-semibold">
                  Name
                </th>

                <th className="p-4 font-semibold">
                  Email
                </th>

                <th className="p-4 font-semibold">
                  Phone
                </th>

                <th className="p-4 font-semibold">
                  Message
                </th>

                <th className="rounded-tr-2xl p-4 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {filteredContacts.length > 0 ? (
                filteredContacts.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b border-slate-100 text-sm text-slate-600 transition hover:bg-slate-50"
                  >
                    {/* NAME */}
                    <td className="whitespace-nowrap p-4 font-semibold text-[#063c40]">
                      {item.name}
                    </td>

                    {/* EMAIL */}
                    <td className="whitespace-nowrap p-4">
                      {item.email}
                    </td>

                    {/* PHONE */}
                    <td className="whitespace-nowrap p-4">
                      {item.phone}
                    </td>

                    {/* MESSAGE */}
                    <td className="max-w-[320px] p-4 leading-7 text-slate-600">
                      <p className="line-clamp-3">
                        {item.message}
                      </p>
                    </td>

                    {/* ACTIONS */}
                    <td className="p-4">
                      <div className="flex flex-wrap items-center gap-2">

                        {/* WHATSAPP */}
                        <a
                          href={`https://wa.me/91${item.phone}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-9 items-center justify-center gap-1 rounded-xl bg-green-50 px-3 text-xs font-semibold text-green-600 transition hover:bg-green-100"
                        >
                          <MessageCircle size={14} />
                          WhatsApp
                        </a>

                        {/* EMAIL */}
                        <a
                          href={`mailto:${item.email}`}
                          className="inline-flex h-9 items-center justify-center gap-1 rounded-xl bg-blue-50 px-3 text-xs font-semibold text-blue-600 transition hover:bg-blue-100"
                        >
                          <Mail size={14} />
                          Email
                        </a>

                        {/* DELETE */}
                        <button
                          onClick={() =>
                            deleteContact(item._id)
                          }
                          className="inline-flex h-9 items-center justify-center gap-1 rounded-xl bg-red-50 px-3 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                        >
                          <Trash2 size={14} />
                          Delete
                        </button>

                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="p-10 text-center text-slate-500"
                  >
                    No contact messages found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
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