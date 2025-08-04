import React from 'react';

const Map = () => {
  return (
    <section className="relative w-full h-screen bg-gray-100 dark:bg-gray-900">
      <div className="absolute inset-0">
        <iframe
          title="Aquilo World Tour Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.6882095363617!2d85.83517127500991!3d20.271761681194857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a75a908be517%3A0x225eac101435048e!2sUnit%203%2C%20Kharvela%20Nagar%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1754318962784!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="absolute top-5 left-5 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg z-10">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Visit Us</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">Aquilo World Tour LLP</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">Holiday & Tour Packages, Hotel Booking, Visa, Passport, Forex</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">Mumbai, India</p>
      </div>
    </section>
  );
};

export default Map;
