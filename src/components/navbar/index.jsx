
import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import CarrierAgreementModal from "../CarrierAgreementModal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openAgreement, setOpenAgreement] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        {/* Top Bar */}
        <div className="bg-[#0B1C39] text-white hidden lg:block">
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-xs">
            <div className="flex gap-6">
              <span>info@loblawtransportusinc.com<br />Alfred@loblawtransportusinc.com</span>
              <span>Call: +92 300 0000000</span>
            </div>

            <div>
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center h-[75px]">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Navbar Logo"
                  className="w-40 h-30 object-contain"
                />
              </Link>

              {/* Desktop Menu */}
              <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#0B1C39]">
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="hover:text-red-600 transition duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Desktop Agreement Button */}
              <div className="hidden lg:block">
                <button
                  onClick={() => setOpenAgreement(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-md transition duration-300 text-sm font-medium"
                >
                  Carrier Setup | Agreement
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="lg:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? (
                    <HiX className="text-3xl text-[#0B1C39]" />
                  ) : (
                    <HiOutlineMenuAlt3 className="text-3xl text-[#0B1C39]" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="lg:hidden bg-white border-t shadow-md">
              <ul className="flex flex-col px-6 py-5 gap-4 text-sm font-medium text-[#0B1C39]">
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="hover:text-red-600"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

                {/* Mobile Agreement Button */}
                <button
                  onClick={() => {
                    setOpenAgreement(true);
                    setMenuOpen(false);
                  }}
                  className="bg-red-600 text-white py-2.5 rounded-md mt-2 text-sm text-center"
                >
                  Carrier Setup | Agreement
                </button>
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Agreement Modal */}
      <CarrierAgreementModal
        isOpen={openAgreement}
        onClose={() => setOpenAgreement(false)}
      />
    </>
  );
};

export default Navbar;