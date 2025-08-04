import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaStore,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Import your images
 // Example image

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 lg:grid-col-4 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-2">About us</h3>
          <div className="w-20 h-[2px] bg-gradient-to-r from-blue-500 mb-4"></div>
         <p className="text-sm leading-relaxed text-gray-300">

  <strong>Aquilo World Tour LLP</strong> is your trusted partner for{" "}
  <strong>holiday & tour packages, hotel reservations, passport and visa assistance, air ticketing, and forex services</strong>. 
  We are committed to delivering <strong>personalized, hassle-free, and cost-effective travel solutions</strong> for individuals, families, and corporate clients. 
  Let us help you plan your next <strong>vacation, business trip, international journey, or spiritual tour</strong> with confidence and convenience.
</p>


          <div className="w-20 h-[2px] bg-gradient-to-r from-blue-500 mb-4"></div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-5 py-2 rounded hover:bg-orange-700 transition"
          >
            Latest Blogs <FaExternalLinkAlt className="w-4 h-4" />
          </Link>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-2">Services</h3>
          <div className="w-20 h-[2px] bg-gradient-to-r from-blue-500 mb-4"></div>
          <ul className="space-y-2 text-gray-300 text-sm">
             <li>
              <Link to="/" className="hover:text-white">
              Holiday & Tour Packages
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Hotel Preservation
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
               Passport & VISA
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Cruise Booking
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
               Forex Assistance
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
              Air Ticketing
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
               Forex
              </Link>
            </li>
        
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <div className="w-20 h-[2px] bg-gradient-to-r from-blue-500 mb-4"></div>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
             <li>
              <Link to="/gallery" className="hover:text-white">
              Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Network */}
        <div>
          <h3 className="text-xl font-bold mb-2">Social Network</h3>
          <div className="w-20 h-[2px] bg-gradient-to-r from-blue-500 mb-4"></div>
          <div className="flex gap-3 mb-4">
            <a
              href="#"
              className="p-2 bg-gray-800 hover:bg-lime-600 rounded"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 hover:bg-lime-600 rounded"
            >
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-gray-800 hover:bg-lime-600 rounded">
              <FaStore />
            </a>
          </div>
          <p className="text-sm text-white font-semibold">Address:</p>
          <p className="text-sm text-gray-300 leading-relaxed">
         Plot No-Scr 25, Back Side of Boyonika Bhawan,Unit-III
            <br />
Kharvel Nagar Bhubaneswar, Odisha 751001
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            {/* Plot No. - 440, Swarnapuri Road, Kanan Vihar Phase - 2 , Patia, Bhubaneswar, Odisha. <br />
              Hello Drive: Pincode- 751024   */}
          </p>
          <p className="text-sm text-white font-semibold">Phone:</p>
          <p className="text-sm text-gray-300 leading-relaxed">
       +919668504726
          </p>
          <p className="text-sm text-white font-semibold">Email:</p>
          <p className="text-sm text-gray-300 leading-relaxed">
           aqualoworldtour@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-3 mb-3 md:mb-0">
            <p>
              Copyright 2025 -{" "}
              <span className="text-white font-semibold">Aquilo World Tour LLP</span>
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/contact" className="hover:text-white">
              Help & Support
            </Link>
            <span className="text-white">|</span>
            <Link to="/faq" className="hover:text-white">
              FAQs
            </Link>
          </div>
        </div>

        {/* Approved Line with Images */}
        
      </div>
    </footer>
  );
};

export default Footer;
