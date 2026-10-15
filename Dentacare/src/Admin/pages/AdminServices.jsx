import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import { Trash2, Plus, Pencil, X, Upload } from "lucide-react";
import { useLocation } from "react-router-dom";
import { API_URL as BASE_URL } from "../../config";

const API_URL = `${BASE_URL}/api/services`;

export default function Services() {
  const [services, setServices] = useState([]);
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  const [openForm, setOpenForm] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get("search")?.toLowerCase() || "";

  const emptyForm = {
    title: "",
    description: "",
    image: "",
  };

  const [form, setForm] = useState(emptyForm);

  const getServices = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      if (data.success) {
        setServices(data.data || []);
      }
    } catch (error) {
      setMessage("Services load nahi ho rahi");
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  const filteredServices = services.filter((item) => {
    const searchText = `${item.title || ""} ${item.description || ""}`.toLowerCase();
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

    if (!form.title || !form.description || !form.image) {
      setMessage("All fields required");
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

      if (data.success) {
        setMessage(editId ? "Service update ho gayi" : "Service add ho gayi");
        setForm(emptyForm);
        setEditId(null);
        setOpenForm(false);
        getServices();
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
      title: item.title || "",
      description: item.description || "",
      image: item.image || "",
    });

    setOpenForm(true);
  };

  const deleteService = async (id) => {
    if (!window.confirm("Delete this service?")) return;

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Service deleted");
        setServices((prev) => prev.filter((item) => item._id !== id));
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
        {/* TOP HEADER */}
        <div className="mb-4 flex flex-col gap-4 rounded-[24px] bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#063c40]">
              Services Management
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
            Add Service
          </button>
        </div>

        {/* MESSAGE */}
        {message && (
          <div className="mb-5 rounded-2xl bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700">
            {message}
          </div>
        )}

        {/* TABLE SECTION */}
        <div className="rounded-[24px] bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-[#063c40]">
              All Services
            </h2>

            <div className="rounded-xl bg-[#063c40] px-4 py-2 text-sm font-semibold text-white">
              Total: {filteredServices.length}
            </div>
          </div>

          {filteredServices.length === 0 ? (
            <div className="rounded-2xl bg-slate-50 p-10 text-center text-slate-500">
              No services found
            </div>
          ) : (
            <div className="overflow-hidden rounded-[18px] border border-slate-200">
              <div className="hide-scroll overflow-x-auto">
                <table className="w-full min-w-[900px]">
                  <thead className="bg-[#eaf7ff] text-[#063c40]">
                    <tr>
                      <th className="px-4 py-4 text-left text-sm font-semibold">
                        Image
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">
                        Service Title
                      </th>
                      <th className="px-4 py-4 text-left text-sm font-semibold">
                        Description
                      </th>
                      <th className="px-4 py-4 text-center text-sm font-semibold">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white">
                    {filteredServices.map((item) => (
                      <tr
                        key={item._id}
                        className="border-b border-slate-100 transition hover:bg-slate-50"
                      >
                        <td className="px-4 py-3">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.title}
                              className="h-14 w-20 rounded-xl object-cover object-top shadow-sm"
                            />
                          ) : (
                            <div className="flex h-14 w-20 items-center justify-center rounded-xl bg-slate-100 text-[10px] text-slate-400">
                              No Img
                            </div>
                          )}
                        </td>

                        <td className="px-4 py-3">
                          <h3 className="text-sm font-bold text-[#063c40]">
                            {item.title}
                          </h3>
                        </td>

                        <td className="max-w-[380px] px-4 py-3">
                          <p className="line-clamp-2 text-sm leading-6 text-slate-600">
                            {item.description}
                          </p>
                        </td>

                        <td className="px-4 py-3">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => handleEdit(item)}
                              className="flex items-center gap-1 rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-100"
                            >
                              <Pencil size={14} />
                              Edit
                            </button>

                            <button
                              onClick={() => deleteService(item._id)}
                              className="flex items-center gap-1 rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                            >
                              <Trash2 size={14} />
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* POPUP FORM */}
        {openForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm">
            <form
              onSubmit={handleSubmit}
              className="flex max-h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-[30px] bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-100 p-6">
                <h2 className="text-2xl font-bold text-[#063c40]">
                  {editId ? "Update Service" : "Add Service"}
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
                  placeholder="Service Title"
                  value={form.title}
                  onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                  }
                  className="mb-4 w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#6db7d8]"
                />

                <textarea
                  rows="4"
                  placeholder="Service Description"
                  value={form.description}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      description: e.target.value,
                    })
                  }
                  className="mb-4 w-full resize-none rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-[#6db7d8]"
                />

                <label className="mb-4 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center transition hover:border-[#6db7d8]">
                  <Upload size={32} className="mb-2 text-[#063c40]" />

                  <span className="font-semibold text-[#063c40]">
                    Choose Service Image
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
                    className="h-36 w-full rounded-2xl object-cover object-top"
                  />
                )}
              </div>

              <div className="border-t border-slate-100 bg-white p-6">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#063c40] px-5 py-4 font-semibold text-white transition hover:bg-[#052f32]"
                >
                  {editId ? <Pencil size={18} /> : <Plus size={18} />}
                  {editId ? "Update Service" : "Add Service"}
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