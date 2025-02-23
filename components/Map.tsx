import React from "react";

const Map: React.FC = () => {
  return (
    <div className="w-full h-full">
      <h1 className="hidden">Mapa de Wellington CBD</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.9698118416386!2d174.77308671209136!3d-41.287761471193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afd5d5cd29c3%3A0xe7820ead68461f16!2s57%20Willis%20Street%2C%20Wellington%20Central%2C%20Wellington%206011!5e0!3m2!1ses-419!2snz!4v1740266115810!5m2!1ses-419!2snz"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
