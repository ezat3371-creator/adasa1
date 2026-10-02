import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  // فتح وقفل قائمة الموبايل
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "الرئيسية" },
    { to: "/blog", label: "المدونة" },
    { to: "/about", label: "من نحن" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-ink/95 backdrop-blur-xl border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-safelight to-orange-600 flex items-center justify-center">
              <i className="bi bi-camera text-white"></i>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">عدسة</span>
              <span className="text-xs text-safelight/80 hidden sm:block">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>

          {/* روابط سطح المكتب: شكل الحبة (pill) */}
          <div className="hidden md:flex items-center bg-surface rounded-full p-1.5 border border-line">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all " +
                  (isActive
                    ? "bg-gradient-to-r from-safelight to-orange-600 text-white"
                    : "text-neutral-400 hover:text-white")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/blog"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-safelight to-orange-600 text-white text-sm font-semibold"
            >
              ابدأ القراءة
            </Link>
          </div>

          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setOpen(!open)}
          >
            <i className={open ? "bi bi-x-lg" : "bi bi-list"}></i>
          </button>
        </div>

        {/* قائمة الموبايل */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="bg-surface rounded-2xl p-4 border border-line flex flex-col gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    "px-4 py-3 rounded-xl text-sm font-medium " +
                    (isActive
                      ? "bg-safelight/10 text-safelight border border-safelight/30"
                      : "text-neutral-400 hover:bg-ink hover:text-white")
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/blog"
                onClick={() => setOpen(false)}
                className="mt-2 text-center px-6 py-2.5 rounded-xl bg-gradient-to-r from-safelight to-orange-600 text-white text-sm font-semibold"
              >
                ابدأ القراءة
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
