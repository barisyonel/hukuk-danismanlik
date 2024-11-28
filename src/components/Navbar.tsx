import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobil menü durumu
  const [isScrolled, setIsScrolled] = useState(false); // Scroll durumunu kontrol et
  const [activeSection, setActiveSection] = useState("home"); // Aktif menü durumu

  // Scroll durumunu kontrol eden efekt
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // 50px aşağı kaydıysa true yap
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Aktif menü öğesini değiştiren fonksiyon
  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        isScrolled ? "bg-gradient-to-r from-blue-500 to-blue-800 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Sol Kısım (Logo + İsim) */}
        <div className="flex items-center">
          <img
            src="/src/assets/logo.png" // Logonuzu buraya ekleyin
            alt="Logo"
            className="w-14 h-15 mr-4"
          />
          <span className="text-white font-bold text-lg">
            Barış Can Yönel <span className="text-sm">/ Hukuk ve Danışmanlık</span>
          </span>
        </div>

        {/* Menü (Desktop) */}
        <ul className="hidden md:flex space-x-6 text-white font-semibold">
          <li
            className={`cursor-pointer transition ${
              activeSection === "home" ? "text-blue-300 font-bold" : "hover:text-blue-300"
            }`}
          >
            <a href="#home" onClick={() => handleSetActive("home")}>
              Ana Sayfa
            </a>
          </li>
          <li
            className={`cursor-pointer transition ${
              activeSection === "services" ? "text-blue-300 font-bold" : "hover:text-blue-300"
            }`}
          >
            <a href="#services" onClick={() => handleSetActive("services")}>
              Hizmetler
            </a>
          </li>
          <li
            className={`cursor-pointer transition ${
              activeSection === "contact" ? "text-blue-300 font-bold" : "hover:text-blue-300"
            }`}
          >
            <a href="#contact" onClick={() => handleSetActive("contact")}>
              İletişim
            </a>
          </li>
        </ul>

        {/* Menü (Mobil için Açılır) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobil Menüsü */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-500 to-blue-800 text-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li
              className={`cursor-pointer ${
                activeSection === "home" ? "text-blue-300 font-bold" : ""
              }`}
            >
              <a href="#home" onClick={() => handleSetActive("home")}>
                Ana Sayfa
              </a>
            </li>
            <li
              className={`cursor-pointer ${
                activeSection === "services" ? "text-blue-300 font-bold" : ""
              }`}
            >
              <a href="#services" onClick={() => handleSetActive("services")}>
                Hizmetler
              </a>
            </li>
            <li
              className={`cursor-pointer ${
                activeSection === "contact" ? "text-blue-300 font-bold" : ""
              }`}
            >
              <a href="#contact" onClick={() => handleSetActive("contact")}>
                İletişim
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
