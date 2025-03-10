import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SpecialServices() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="mt-14 flex justify-center items-center w-full px-4 md:px-6 lg:px-8">
      <div
        className="w-full max-w-4xl p-8 text-center"
        data-aos="fade-up"
      >
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-black font-merriweather mb-3">
            Special Services
          </h2>
          <p className="text-md sm:text-xl md:text-xl lg:text-2xl text-gray-600 font-playfair">
            We offer unique experiences to make your visit memorable!
          </p>
        </div>

        {/* Special Services List */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-black font-merriweather">
              Live Music & Entertainment
            </h3>
            <p className="text-md sm:text-xl md:text-xl lg:text-2xl text-gray-600 font-playfair">
              Enjoy live performances while you dine.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-black font-merriweather">
              Outdoor Seating
            </h3>
            <p className="text-md sm:text-xl md:text-xl lg:text-2xl text-gray-600 font-playfair">
              Dine with fresh air and great views.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-black font-merriweather">
              Pet-Friendly Area
            </h3>
            <p className="text-md sm:text-xl md:text-xl lg:text-2xl text-gray-600 font-playfair">
              We welcome your furry friends!
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-black font-merriweather">
              Kids Special
            </h3>
            <p className="text-md sm:text-xl md:text-xl lg:text-2xl text-gray-600 font-playfair">
              Enjoy a kids menu and play area.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-black font-merriweather">
              Happy Hour Deals
            </h3>
            <p className="text-md sm:text-xl md:text-xl lg:text-2xl text-gray-600 font-playfair">
              Exclusive discounts on drinks and meals.<Link className="text-blue-600 " to="/ourservices"> learn more...</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
