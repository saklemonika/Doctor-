import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import { Trash2, Plus, Pencil, X, Upload } from "lucide-react";
import { API_URL as BASE_URL } from "../../config";

const API_URL = `${BASE_URL}/api/team`;

export default function ALLTeam() {
  const [team, setTeam] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");

  const emptyForm = {
    name: "",
    role: "",
    description: "",
    image: "",
  };

  const [form, setForm] = useState(emptyForm);

  const getTeam = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTeam(data.data || []);
    } catch (error) {
      setMessage("Team load nahi ho rahi");
    }
  };

  useEffect(() => {
    getTeam();
  }, []);

  const handleImageChoose = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.role || !form.description || !form.image) {
      setMessage("Name, role and image required");
      return;
    }

    try {
      const url = editId ? `${API_URL}/${editId}` : API_URL;
      const method = editId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(
          editId ? "Team member update ho gaya" : "Team member add ho gaya"
        );
        setForm(emptyForm);
        setEditId(null);
        setOpenForm(false);
        getTeam();
      } else {
        setMessage(data.message || "Team add nahi ho rahi");
      }
    } catch (error) {
      setMessage("API Error");
    }
  };

  const handleEdit = (item) => {
    setEditId(item._id);

    setForm({
      name: item.name || "",
      role: item.role || "",
      description: item.description || "",
      image: item.image || "",
    });

    setOpenForm(true);
  };

  const deleteTeam = async (id) => {
    if (!window.confirm("Delete this team member?")) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Team member deleted");
        setTeam((prev) => prev.filter((item) => item._id !== id));
      }
    } catch (error) {
      setMessage("Delete failed");
    }
  };

  const closeForm = () => {
    setOpenForm(false);
    setEditId(null);
    setForm(emptyForm);
  };

  return (
    <AdminLayout>
      <div className="hide-scroll h-[calc(100vh-70px)] overflow-y-auto bg-[#f3f7fb] p-4">
        {/* HEADER CARD */}
        <div className="mb-5 flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#063c40]">
              Team Management
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage all team members
            </p>
          </div>

          <button
            onClick={() => {
              setOpenForm(true);
              setEditId(null);
              setForm(emptyForm);
            }}
            className="flex w-fit items-center gap-2 rounded-xl bg-[#063c40] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#052f32]"
          >
            <Plus size={18} />
            Add Team
          </button>
        </div>

        {message && (
          <div className="mb-4 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">
            {message}
          </div>
        )}

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#0e1111]">
            All Team Members
          </h2>

          <div className="rounded-lg bg-[#141616] px-4 py-2 text-sm font-semibold text-white">
            Total: {team.length}
          </div>
        </div>

        {/* TEAM CARDS */}
        {team.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center text-slate-500 shadow-sm">
            No team members found
          </div>
        ) : (
          <div className="grid gap-6 pb-12 sm:grid-cols-2 xl:grid-cols-3">
            {team.map((item) => (
              <div
                key={item._id}
                className="flex min-h-[520px] flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* IMAGE */}
                <div className="h-[260px] w-full overflow-hidden bg-slate-100">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full rounded-t-[24px] object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-slate-400">
                      No Image
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-2xl font-bold text-[#063c40]">
                    {item.name}
                  </h3>

                  <div className="mt-3">
                    <span className="rounded-full bg-[#e8f6f7] px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-[#063c40]">
                      {item.role}
                    </span>
                  </div>

                  <p className="mt-5 line-clamp-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
                    <button
                      onClick={() => handleEdit(item)}
                      className="flex items-center justify-center gap-2 rounded-xl bg-blue-50 px-4 py-3 font-semibold text-blue-600 transition hover:bg-blue-100"
                    >
                      <Pencil size={16} />
                      Edit
                    </button>

                    <button
                      onClick={() => deleteTeam(item._id)}
                      className="flex items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-3 font-semibold text-red-600 transition hover:bg-red-100"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* POPUP FORM */}
        {openForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm">
            <form
              onSubmit={handleSubmit}
              className="flex max-h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-[30px] bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-100 p-6">
                <h2 className="text-2xl font-bold text-[#063c40]">
                  {editId ? "Update Team Member" : "Add Team Member"}
                </h2>

                <button
                  type="button"
                  onClick={closeForm}
                  className="rounded-full bg-slate-100 p-2 transition hover:bg-slate-200"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="hide-scroll overflow-y-auto p-6">
                <input
                  type="text"
                  placeholder="Doctor Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="mb-4 w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#6db7d8]"
                />

                <input
                  type="text"
                  placeholder="Role"
                  value={form.role}
                  onChange={(e) =>
                    setForm({ ...form, role: e.target.value })
                  }
                  className="mb-4 w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#6db7d8]"
                />

                <textarea
                  rows="4"
                  placeholder="Description"
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  className="mb-4 w-full resize-none rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#6db7d8]"
                />

                <label className="mb-4 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center transition hover:border-[#6db7d8]">
                  <Upload size={32} className="mb-2 text-[#063c40]" />

                  <span className="font-semibold text-[#063c40]">
                    Choose Team Image
                  </span>

                  <span className="mt-1 text-sm text-slate-500">
                    JPG, PNG, WEBP
                  </span>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChoose}
                    className="hidden"
                  />
                </label>

                {form.image && (
                  <img
                    src={form.image}
                    alt="Preview"
                    className="h-44 w-full rounded-2xl object-cover object-top"
                  />
                )}
              </div>

              <div className="border-t border-slate-100 bg-white p-6">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#063c40] px-5 py-4 font-semibold text-white transition hover:bg-[#052f32]"
                >
                  {editId ? <Pencil size={18} /> : <Plus size={18} />}
                  {editId ? "Update Team Member" : "Add Team Member"}
                </button>
              </div>
            </form>
          </div>
        )}

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