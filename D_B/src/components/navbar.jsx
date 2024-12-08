import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import useNavbar from "../hooks/useNavbar";
import { useAuth } from "../context/authContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useNavbar();
  const { isAuth, userName } = useAuth(); // Ambil status autentikasi dari context

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#fee799] w-full">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-20 h-20" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row items-center gap-8 lg:gap-16">
          {["Home", "Pembelajaran", "Dongeng"].map((menu, index) => {
            const path = `/${menu.toLowerCase()}`;
            return (
              <li key={index}>
                <Link
                  className={`font-semibold transition duration-300 ${pathname === path
                    ? "text-neutral-800 underline underline-offset-4"
                    : "hover:text-neutral-800 text-neutral-600"
                    }`}
                  to={path}
                >
                  {menu}
                </Link>
              </li>
            );
          })}

          {/* Kondisional: hanya tampil jika isAuth === true */}
          {isAuth && (
            <>
              <li>
                <Link
                  className={`font-semibold transition duration-300 ${pathname === "/event"
                    ? "text-neutral-800 underline underline-offset-4"
                    : "hover:text-neutral-800 text-neutral-600"
                    }`}
                  to="/event"
                >
                  Event
                </Link>
              </li>
              <li>
                <Link
                  className={`font-semibold transition duration-300 ${pathname === "/kuis"
                    ? "text-neutral-800 underline underline-offset-4"
                    : "hover:text-neutral-800 text-neutral-600"
                    }`}
                  to="/kuis"
                >
                  Kuis
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* User and Sidebar Toggle */}
        <div className="flex items-center gap-4">
          {/* Jika pengguna belum login, tampilkan tombol Login */}
          {!isAuth && (
            <Link className="font-semibold hidden md:block" to={"/login"}>

              Login
            </Link>
          )}
          <span className="text-lg font-semibold">{userName}</span>
          <Link className="hidden md:block" to={"/profile"}>
            <FaUserAlt className="text-current size-5" />
          </Link>
          <button
            className="block md:hidden text-xl focus:outline-none"
            onClick={toggleSidebar}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-[#fee799] shadow-lg z-50 flex flex-col p-6 space-y-4">
          <button
            className="self-end text-2xl focus:outline-none"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col space-y-6">
            {["Home", "Pembelajaran", "Dongeng"].map((menu, index) => {
              const path = `/${menu.toLowerCase()}`;
              return (
                <li key={index}>
                  <Link
                    className={`font-semibold transition duration-300 ${pathname === path
                      ? "text-neutral-800 underline underline-offset-4"
                      : "hover:text-neutral-800 text-neutral-600"
                      }`}
                    to={path}
                    onClick={toggleSidebar}
                  >
                    {menu}
                  </Link>
                </li>
              );
            })}

            {isAuth && (
              <>
                <li>
                  <Link
                    className={`font-semibold transition duration-300 ${pathname === "/event"
                      ? "text-neutral-800 underline underline-offset-4"
                      : "hover:text-neutral-800 text-neutral-600"
                      }`}
                    to="/event"
                    onClick={toggleSidebar}
                  >
                    Event
                  </Link>
                </li>
                <li>
                  <Link
                    className={`font-semibold transition duration-300 ${pathname === "/kuis"
                      ? "text-neutral-800 underline underline-offset-4"
                      : "hover:text-neutral-800 text-neutral-600"
                      }`}
                    to="/kuis"
                    onClick={toggleSidebar}
                  >
                    Kuis
                  </Link>
                </li>
              </>
            )}

            {!isAuth && (
              <Link
                className="block font-semibold text-neutral-800 mt-4"
                to={"/login"}
                onClick={toggleSidebar}
              >
                Login
              </Link>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
