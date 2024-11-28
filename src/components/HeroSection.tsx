import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/src/assets/images/terazi-background.png')",
      }}
    >
      {/* İçerik */}
      <div className="text-center max-w-4xl space-y-6 px-4" data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Barış Can Yönel <br />
          <span className="text-orange-400">Hukuk ve Danışmanlık</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Her zaman yanınızdayız. Hukuk danışmanlığında uzman bir yaklaşım ile
          güvenilir çözümler sunuyoruz.
        </p>
        {/* Butonlar */}
        <div className="flex justify-center space-x-4">
          <a
            href="#services"
            className="bg-gray-700 hover:bg-indigo-600 px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Hizmetlerimiz
          </a>
          <a
            href="#contact"
            className="bg-gray-700 hover:bg-indigo-600 px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            İletişime Geçin
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
