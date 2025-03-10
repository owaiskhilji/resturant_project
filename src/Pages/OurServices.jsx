import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const data =[
  { title: "Online Ordering", desc: "Order your favorite dishes from the comfort of your own home and have them delivered or ready for pickup." },
  { title: "Reservations", desc: "Book a table in advance to ensure a smooth and hassle-free dining experience." },
  { title: "Takeout", desc: "Enjoy our delicious food from the comfort of your own home." },
  { title: "Delivery", desc: "Get our dishes delivered right to your doorstep." },
  { title: "Catering", desc: "Let us handle the food for your next event or party." },
  { title: "Private Dining", desc: "Book our private room for special occasions or events." },
  { title: "Events", desc: "Host your next event or party with us, and let us take care of the food and atmosphere." },
  { title: "Loyalty Program", desc: "Join our loyalty program and earn rewards and discounts." },
  { title: "Gift Cards", desc: "Purchase gift cards for friends and family." },
  { title: "Party Platters", desc: "Order large quantities of our dishes for your next gathering or event." },
  { title: "Meal Plans", desc: "Sign up for our meal plans and enjoy our food at a discounted rate." },
  { title: "Dietary Options", desc: "We offer gluten-free, vegan, and other options to cater to your dietary needs." },
]



export default function OurServices() {
  useEffect(() => {
    AOS.init({ duration: 1000 ,once:true});
  }, []);

  const animations = [
    "slide-right", "slide-left"
  ];

  return (
    <div className="mt-28 px-4 md:px-6 lg:px-8 xl:px-12 pb-6">
      {data.map((service, index) => (
        <section
          key={index}
          className="py-16 px-4 md:px-6 lg:px-8 xl:px-12 text-center shadow-md border-2 mt-4 rounded-lg max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
          data-aos={animations[index % animations.length]}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-merriweather textcolor mb-4">{service.title}</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-textcolor leading-relaxed font-playfair">{service.desc}</p>
          </div>
        </section>
      ))}
    </div>
  );
}