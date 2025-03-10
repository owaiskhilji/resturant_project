import fish_chips from "../assets/menuheightlight/fishandchips.png";
import full_english from "../assets/menuheightlight/fullenglish.png";
import roast_beef from "../assets/menuheightlight/roastbeef.png";
import vegetarian from "../assets/menuheightlight/vegetarian.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const menuItems = [
  {
    name: "Fish and Chips",
    description:
      "Fresh cod in a crispy batter, served with chunky chips and mushy peas.",
    image: fish_chips,
  },
  {
    name: "Roast Beef Sunday Lunch",
    description:
      "Slow-cooked roast beef with roasted vegetables, Yorkshire pudding, and gravy.",
    image: roast_beef,
  },
  {
    name: "Full English Breakfast",
    description: "Bacon, sausages, eggs, grilled tomatoes, mushrooms, and toast.",
    image: full_english,
  },
  {
    name: "Vegetarian Options",
    description: "Stuffed portobello mushrooms, vegetable curry, and quiche of the day.",
    image: vegetarian,
  },
];

export default function MenuHighlight() {
 
 
 
 
  useEffect(() => {
    AOS.init({ duration: 1000, 
      easing: "ease-in-out",
    once:true
    });
  }, []);

  return (
    <div className="container mx-auto p-6 mt-4">
      <h2 className="text-center text-4xl font-semibold font-merriweather text-gray-800 uppercase mb-8">
        Menu Highlights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-700 font-merriweather">{item.name}</h3>
              <p className="text-gray-600 mt-2 font-playfair">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
