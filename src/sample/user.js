// ContactForm.js
import React from 'react';

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">GET IN TOUCH</h1>
          <p className="mt-2 text-gray-600">
            We Thrive when coming innovative ideas but also understand that a smart concept should be supported with measurable result
          </p>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Enter Your Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Enter Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700">Enter Your Subject</label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Enter Your Message</label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            <strong>Office Address:</strong> 4455, Galle Road, Colombo 343, Pettah, Colombo 11
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Email:</strong> arsath@gmail.com
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Phone:</strong> +94 0112233443
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
