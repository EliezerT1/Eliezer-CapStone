import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="bg-white text-gray-800 px-6 py-16 md:py-24 flex flex-col items-center">
      {/* Header and intro */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        {/* <p className="text-lg text-gray-600">
          Have questions or just want to say hello? Fill out the form below and I’ll get back to you.
        </p> */}
      </motion.div>

      {/* Contact form */}
      <motion.form
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-md space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-3 focus:border-gray-400 focus:ring-0 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-3 focus:border-gray-400 focus:ring-0 transition-colors"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-3 h-32 focus:border-gray-400 focus:ring-0 transition-colors"
            placeholder="Your message..."
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-slate-600 text-white font-semibold py-3 rounded-md shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Social links (optional) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 flex space-x-6"
      >
        <a
          href="https://www.linkedin.com/in/eliezer-then/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-600 hover:text-indigo-700 transition-colors"
        >
          <FaLinkedin className="w-6 h-6" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://www.instagram.com/eliezer_t1/?igsh=MXZvenMxcW82cGZodA%3D%3D&utm_source=qr#"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors"
        >
          <FaInstagram className="w-6 h-6" />
          <span>Instagram</span>
        </a>
        <div className="flex items-center space-x-2 text-gray-600">
          <FaEnvelope className="w-6 h-6" />
          <span>eliezerthen080@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <FaPhone className="w-6 h-6" />
          <span>(917) 724-5578</span>
        </div>
      </motion.div>
    </section>
  );
};