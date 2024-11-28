import React from "react";

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Dava Danışmanlığı",
      description:
        "Hukuki davalarınızda size rehberlik etmek için deneyimli ekibimizle yanınızdayız.",
      icon: "/src/assets/images/service-1.png",
    },
    {
      title: "Arabuluculuk Hizmetleri",
      description:
        "Sorunlarınızı daha hızlı ve etkili bir şekilde çözmek için arabuluculuk hizmetleri sunuyoruz.",
      icon: "/src/assets/images/service-2.png",
    },
    {
      title: "Gayrimenkul Hukuku",
      description:
        "Gayrimenkul alım-satım işlemlerinde hukuki destek sağlayarak süreci kolaylaştırıyoruz.",
      icon: "/src/assets/images/service-3.png",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Hizmetlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
