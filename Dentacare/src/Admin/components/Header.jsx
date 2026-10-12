import React, { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header({ setOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  // URL se search value lena
  const params = new URLSearchParams(location.search);

  const [search, setSearch] = useState(
    params.get("search") || ""
  );

  // SEARCH FUNCTION
  const handleSearch = (e) => {
    const value = e.target.value;

    setSearch(value);

    const newParams = new URLSearchParams(
      location.search
    );

    // SEARCH VALUE SET
    if (value.trim()) {
      newParams.set("search", value);

      // ALL SECTIONS SEARCH
      newParams.set("type", "all");
    } else {
      newParams.delete("search");
      newParams.delete("type");
    }

    navigate(
      `${location.pathname}?${newParams.toString()}`
    );
  };

  // CLEAR SEARCH
  const clearSearch = () => {
    setSearch("");

    navigate(location.pathname);
  };

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between bg-white px-4 shadow-md sm:px-6">
      
      {/* LEFT */}
      <div className="flex items-center gap-4">
        
        {/* MOBILE MENU */}
        <button
          onClick={() => setOpen(true)}
          className="rounded-xl bg-slate-800 p-2 text-white transition hover:bg-slate-700 lg:hidden"
        >
          <Menu />
        </button>

        {/* TITLE */}
        <div>
          <h2 className="text-xl font-bold text-black">
            Admin Dashboard
          </h2>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden items-center gap-3 md:flex">

        {/* SEARCH BAR */}
        <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3">
          
          <Search
            size={18}
            className="text-slate-500"
          />

          <input
            value={search}
            onChange={handleSearch}
            placeholder="Search all sections..."
            className="w-72 bg-transparent text-sm text-black placeholder:text-slate-400 outline-none"
          />

          {/* CLEAR BUTTON */}
          {search && (
            <button
              type="button"
              onClick={clearSearch}
            >
              <X
                size={16}
                className="text-slate-500"
              />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}