import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import { Trash2, Plus, Pencil, X, Upload } from "lucide-react";
import { useLocation } from "react-router-dom";

const API_URL = "http://localhost:5000/api/doctors";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  const [openForm, setOpenForm] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search")?.toLowerCase() || "";

  const emptyForm = {
    name: "",
    role: "",
    image: "",
  };

  const [form, setForm] = useState(emptyForm);

  const getDoctors = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      if (data.success) {
        setDoctors(data.data || []);
      }
    } catch (error) {
      setMessage("Doctors load nahi ho rahe");
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  const filteredDoctors = doctors.filter((item) => {
    const searchText = `${item.name || ""} ${item.role || ""}`.toLowerCase();
    return searchText.includes(search);
  });

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

    if (!form.name || !form.role || !form.image) {
      setMessage("All fields required");
      return;
    }

    try {
      const url = editId ? `${API_URL}/${editId}` : API_URL;
      const method = editId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setMessage(editId ? "Doctor update ho gaya" : "Doctor add ho gaya");
        setForm(emptyForm);
        setEditId(null);
        setOpenForm(false);
        getDoctors();
      } else {
        setMessage(data.message);
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
      image: item.image || "",
    });

    setOpenForm(true);
  };

  const deleteDoctor = async (id) => {
    if (!window.confirm("Delete this doctor?")) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Doctor deleted");
        setDoctors((prev) => prev.filter((item) => item._id !== id));
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
      <div className="hide-scroll h-[calc(100vh-72px)] overflow-y-auto bg-[#f3f7fb] p-5">
        <div className="mb-3 flex flex-col gap-4 rounded-[30px] bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#063c40]">
              Doctors Management
            </h1>
          </div>

          <button
            onClick={() => {
              setOpenForm(true);
              setEditId(null);
              setForm(emptyForm);
            }}
            className="flex w-fit items-center gap-2 rounded-2xl bg-[#063c40] px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-[#052f32]"
          >
            <Plus size={20} />
            Add Doctor
          </button>
        </div>

        {message && (
          <div className="mb-5 rounded-2xl bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700">
            {message}
          </div>
        )}

        <div className="rounded-[30px] bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-[#063c40]">
              All Doctors
            </h2>

            <div className="rounded-xl bg-[#063c40] px-4 py-2 text-sm font-semibold text-white">
              Total: {filteredDoctors.length}
            </div>
          </div>

          {filteredDoctors.length === 0 ? (
            <div className="rounded-2xl bg-slate-50 p-10 text-center text-slate-500">
              No doctors found
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 pb-10 md:grid-cols-2 xl:grid-cols-3">
              {filteredDoctors.map((item) => (
                <div
                  key={item._id}
                  className="flex min-h-[390px] flex-col overflow-hidden rounded-[28px] bg-slate-50 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-56 w-full rounded-2xl object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-56 w-full items-center justify-center rounded-2xl bg-white text-slate-400">
                      No Image
                    </div>
                  )}

                  <div className="flex flex-1 flex-col pt-4">
                    <h3 className="text-lg font-bold text-[#063c40]">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-slate-500">
                      {item.role}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-3 pt-5">
                      <button
                        onClick={() => handleEdit(item)}
                        className="flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-100"
                      >
                        <Pencil size={16} />
                        Edit
                      </button>

                      <button
                        onClick={() => deleteDoctor(item._id)}
                        className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-100"
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
        </div>

        {openForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm">
            <form
              onSubmit={handleSubmit}
              className="flex max-h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-[30px] bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-100 p-6">
                <h2 className="text-2xl font-bold text-[#063c40]">
                  {editId ? "Update Doctor" : "Add Doctor"}
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
                  placeholder="Doctor Role"
                  value={form.role}
                  onChange={(e) =>
                    setForm({ ...form, role: e.target.value })
                  }
                  className="mb-4 w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#6db7d8]"
                />

                <label className="mb-4 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center transition hover:border-[#6db7d8]">
                  <Upload size={32} className="mb-2 text-[#063c40]" />

                  <span className="font-semibold text-[#063c40]">
                    Choose Doctor Image
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
                    className="h-40 w-full rounded-2xl object-cover object-top"
                  />
                )}
              </div>

              <div className="border-t border-slate-100 bg-white p-6">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#063c40] px-5 py-4 font-semibold text-white transition hover:bg-[#052f32]"
                >
                  {editId ? <Pencil size={18} /> : <Plus size={18} />}
                  {editId ? "Update Doctor" : "Add Doctor"}
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