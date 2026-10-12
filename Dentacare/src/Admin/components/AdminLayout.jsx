import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden bg-[#f1f5f9] lg:flex">
      <Sidebar open={open} setOpen={setOpen} />

      <main className="h-screen flex-1 overflow-hidden">
        <Header setOpen={setOpen} />

        <div className="h-[calc(100vh-80px)] overflow-hidden p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}