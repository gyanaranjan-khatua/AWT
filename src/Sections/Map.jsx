import React from 'react';

const Map = () => {
  return (
    <section className="relative w-full h-screen bg-gray-100 dark:bg-gray-900">
      <div className="absolute inset-0">
        <iframe
        title="Aquilo World Tour LLP Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d935.6475768698812!2d85.83292995872193!3d20.275819100000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a70384186e41%3A0xe7cb6b8967352748!2sAquilo%20World%20Tour%20LLP!5e0!3m2!1sen!2sin!4v1754369183725!5m2!1sen!2sin"
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
