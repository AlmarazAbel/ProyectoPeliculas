import { useState } from "react";
import { FaUserCircle, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface Props {
  onSearch: (value: string) => void;
}

const NavbarCustom = ({ onSearch }: Props) => {

const [menuOpen, setMenuOpen] = useState(false);
const navigate = useNavigate();
const categories = ["Acción", "Comedia", "Drama", "Terror", "Ciencia ficción"];

  return (
    <nav className="bg-[#070b17] border-b border-slate-800 sticky top-0 z-[100]">
      <div className="w-full px-4 md:px-12">
        
        {/* TOP BAR */}
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <img
              src=""//insertar Logo
              alt="logo"
              className="h-10 w-auto"
            />
          </div>

          {/* DESKTOP MENU (Visible desde md: 768px) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-white">
            {categories.map((cat) => (
              <a
    key={cat}
    // Generamos el href dinámicamente: "Acción" -> "#accion"
    href={`#${cat.toLowerCase().replace(/\s+/g, '')}`} 
    className="hover:text-amber-600 transition text-sm lg:text-base font-medium cursor-pointer"
  >
    {cat}
  </a>
))}
          </div>

          {/* RIGHT SIDE DESKTOP */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center border border-slate-700 hover:border-amber-600 rounded-md overflow-hidden bg-[#111827] transition">
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-transparent text-white px-3 py-2 outline-none w-[150px] lg:w-[220px] text-sm"
                onChange={(e) => onSearch(e.target.value)}
              />
              <button className="px-3 text-gray-300 hover:text-white">
                <FaSearch />
              </button>
            </div>

            <button onClick={() => navigate("/login")}
            className="flex items-center gap-2 border border-slate-700 hover:border-amber-600 px-4 py-2 rounded-md text-white hover:text-amber-600 transition text-sm">
              <FaUserCircle />
              Login
            </button>
          </div>

          {/* MOBILE BUTTON (Visible hasta 767px) */}
          <button
            className="md:hidden text-white text-2xl p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}>
          <div className="flex flex-col gap-4 text-white border-t border-slate-800 pt-4">
            {categories.map((cat) => (
              <a
    key={cat}
    // Generamos el href dinámicamente: "Acción" -> "#accion"
    href={`#${cat.toLowerCase().replace(/\s+/g, '')}`} 
    className="hover:text-amber-600 transition text-sm lg:text-base font-medium cursor-pointer"
  >
    {cat}
  </a>
            ))}

            <div className="flex items-center border border-slate-700 rounded-md overflow-hidden bg-[#111827] mt-2">
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-transparent text-white px-4 py-2 outline-none w-full"
              />
              <button className="px-4 text-gray-300">
                <FaSearch />
              </button>
            </div>

            <button className="flex items-center justify-center gap-2 bg-amber-600 px-4 py-3 rounded-md text-white font-bold mt-2">
              <FaUserCircle />
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarCustom;