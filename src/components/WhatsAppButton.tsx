import React from "react";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "905301129440";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`} 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      title="WhatsApp İletişim"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 15.004A7.982 7.982 0 0018 11a8 8 0 10-8 8 7.982 7.982 0 004.004-1.138l3.746.832-.888-3.69z"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
