import {useEffect} from "react"
import live_music from "../assets/events/livemusic.png";
import quiz_night from "../assets/events/quiznight.png";
import sunday_roast from "../assets/events/roast.png";
import AOS from "aos";
import "aos/dist/aos.css";



const eventsData = [
  {
    name: "Live Music",
    description:"Join us for live music performances from local musicians, every Friday evening.",
    image: live_music,
  },
  {
    name: "Quiz Night",
    description:"Test your knowledge and win prizes on our weekly quiz night, every Wednesday",
    image: quiz_night,
  },
  {
    name: "Sunday Roast",
    description: "Join us for a traditional Sunday roast with all the trimmings, every Sunday.",
    image: sunday_roast,
  }
];

console.log("eventsData",eventsData)

export default function Events(){
   
     useEffect(() => {
       AOS.init({ duration: 1000, 
         easing: "ease-in-out",
       once:true
       });
     }, []);
   


   
    return(
        <div>
  {/* Heading */}
  <div className="flex justify-center">
    <h2 className="text-4xl font-semibold font-merriweather text-gray-800 uppercase mb-8">
      Events
    </h2>
  </div>

  {/* Events List */}
  <div className="flex flex-col items-center space-y-8 mt-4"> 
    {eventsData && eventsData.length ? (
      eventsData.map((item, i) => (
        <div key={i} data-aos="fade-right" className="hero w-full">
          <div className="hero-content border-2 w-80 sm:w-[550px] md:w-full lg:w-full shadow-md flex-col md:flex-row-reverse lg:flex-row-reverse gap-4 p-6">
            {/* Text Content */}
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold font-merriweather">
                {item.name}
              </h1>
              <p className="py-6 text-gray-600 font-playfair text-md sm:text-xl md:text-xl lg:text-2xl md:w-[350px] lg:w-[700px]">
                {item.description}
              </p>
            </div>

            {/* Image */}
            <img
              src={item.image}
              className="md:max-w-sm lg:max-w-sm rounded-lg shadow-2xl"
              alt="Our Restaurant Interior"
            />
          </div>
        </div>
      ))
    ) : (
      <p>Cart is not available</p>
    )}
  </div>
</div>

    )
}