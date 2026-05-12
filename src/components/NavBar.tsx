import { useState } from "react";

import {
  FaUserCircle,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const NavbarCustom = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#070b17] border-b border-slate-800">
      <div className="w-full px-4 lg:px-8">
        
        {/* TOP BAR */}
        <div className="flex items-center justify-between py-4">
          
          {/* LOGO */}
          <div>
            <img
              src="https://rollingcodeschool.com/wp-content/uploads/2022/04/Logo-RollingCode-blanco.png"
              alt="logo"
              className="h-10"
            />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8 text-white">
            <NavLink
              to="/"
              className="hover:text-amber-600 transition"
            >
              Acción
            </NavLink>

            <NavLink
              to="/"
              className="hover:text-amber-600 transition"
            >
              Comedia
            </NavLink>

            <NavLink
              to="/"
              className="hover:text-amber-600 transition"
            >
              Drama
            </NavLink>

            <NavLink
              to="/"
              className="hover:text-amber-600 transition"
            >
              Terror
            </NavLink>

            <NavLink
              to="/"
              className="hover:text-amber-600 transition"
            >
              Documental
            </NavLink>
          </div>

          {/* RIGHT SIDE DESKTOP */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* SEARCH */}
            <div className="flex items-center border hover:text-amber-600 rounded-md overflow-hidden bg-[#111827]">
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-transparent text-white px-4 py-2 outline-none w-[220px]"
              />

              <button className="px-4 text-gray-300 hover:text-white">
                <FaSearch />
              </button>
            </div>

            {/* LOGIN */}
            <button className="flex items-center gap-2 border hover:text-amber-600 px-4 py-2 rounded-md text-white transition">
              <FaUserCircle />
              Login
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-white text-2xl "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col gap-4 pb-6 text-white">
            
            <NavLink to="/accion">Acción</NavLink>

            <NavLink to="/comedia">Comedia</NavLink>

            <NavLink to="/drama">Drama</NavLink>

            <NavLink to="/terror">Terror</NavLink>

            <NavLink to="/documental">Documental</NavLink>

            {/* SEARCH MOBILE */}
            <div className="flex items-center border border-slate-700 rounded-md overflow-hidden bg-[#111827]">
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-transparent text-white px-4 py-2 outline-none w-full"
              />

              <button className="px-4 text-gray-300">
                <FaSearch />
              </button>
            </div>

            {/* LOGIN MOBILE */}
            <button className="flex items-center justify-center gap-2 border border-slate-700 px-4 py-2 rounded-md text-white hover:bg-violet-600 transition">
              <FaUserCircle />
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarCustom;