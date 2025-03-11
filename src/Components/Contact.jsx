import React from "react";
import {useNavigate} from "react-router-dom"
const Contact = () => {
  const navigate = useNavigate()
  
  return (
<div>
<div  className="font-[sans-serif] py-12 px-4 sm:px-6 lg:px-8 bg-white">
         <div className="flex justify-center mb-16">
          <h2 className="text-4xl font-semibold font-merriweather text-gray-800  uppercase">VISIT US</h2>
          </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row  lg:flex-row  gap-20">
        
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-merriweather text-gray-800 mb-6 uppercase">Contact Us</h2>
          <form className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full bg-gray-100 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full bg-gray-100 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="w-full bg-gray-100 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
            <textarea
              name="message"
              placeholder="How can we serve you?"
              rows={5}
              className="w-full bg-gray-100 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-textcolor text-white py-3 rounded uppercase tracking-wide hover:bg-[#5a3d2e]"
            >
              Send
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 space-y-10">
          <h3 className="text-lg  text-gray-800 font-merriweather">SPECIAL REQUESTS ?</h3>
          <p className="text-gray-600 font-playfair lg:text-xl">
            Do you have dietary concerns? Questions about an upcoming event? Drop us a line, and we’ll get back to you soon!
          </p>
          <div className="space-y-4">
            <h3 className="text-lg text-gray-800 font-merriweather">PERTH RETREAT</h3>
            <p className="text-gray-600 font-playfair lg:text-xl">Stirling Arcade, Stirling, Stirlingshire, FK8 1AX</p>
            <p className="text-gray-600 font-playfair lg:text-xl">0141 611 3159</p>
            <p className="text-gray-600 font-playfair lg:text-xl">clearbusinessbyadrian@gmail.com</p>
          </div>
          <div>
           <button
           onClick={()=>window.open("https://maps.app.goo.gl/gUNXSAR4cvZfFoJz7","_blank")}
              className="w-44 bg-textcolor text-white py-3 rounded uppercase tracking-wide hover:bg-[#5a3d2e]"
            >
              GET Direction
            </button>
          </div>
        </div>
      </div>
    </div>
<div className="w-full">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2224.2436198439327!2d-3.9405329239888456!3d56.1183036637809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488862eacb14d8ad%3A0x2a3dfd0b94aec67f!2sThe%20Stirling%20Arcade!5e0!3m2!1sen!2s!4v1741557271743!5m2!1sen!2s" width="1800" height="450"  style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>


    </div>
  );
};

export default Contact;
