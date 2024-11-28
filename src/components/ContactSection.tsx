import React, { useState } from "react";

const ContactSection: React.FC = () => {
  // Form state'lerini tanımlıyoruz
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false); // Gönderim sonrası mesaj için

  // Input değişikliklerini takip eden fonksiyon
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

    // Form verilerini Formspree ile gönder
    fetch("https://formspree.io/f/mgvenobl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        alert("Mesajınız başarıyla gönderildi!");
        setSubmitted(true); // Teşekkür mesajını göster
        setFormData({ name: "", email: "", message: "" }); // Formu sıfırla
        setTimeout(() => setSubmitted(false), 5000); // 5 saniye sonra teşekkür mesajını kaldır
      })
      .catch(() => alert("Mesaj gönderilirken bir hata oluştu."));
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          İletişime Geçin
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* İletişim Bilgileri */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              İletişim Bilgilerimiz
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Adres:</strong> İstanbul, Beşiktaş, Türkiye
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Telefon:</strong> +90 555 123 4567
            </p>
            <p className="text-gray-600 mb-2">
              <strong>E-posta:</strong> info@avukatlikburosu.com
            </p>
          </div>
          {/* İletişim Formu */}
          <div data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Bize Ulaşın
            </h3>
            {/* Teşekkür Mesajı */}
            {submitted && (
              <div className="bg-green-100 text-green-800 p-4 mb-4 rounded-lg">
                Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
              </div>
            )}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  İsim
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Adınız ve Soyadınız"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                 Gönderici E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-posta adresiniz"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Mesaj
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mesajınızı buraya yazın"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
