
const aboutUsData = [
  {
    title: "Our Story",
    desc: "Welcome to our restaurant, where food, passion, and community come together. Our story began with a simple idea: to share delicious, homemade-style cuisine with our neighbors and friends."
  },
  {
    title: "Our Vision",
    desc: "We aim to create a warm and inviting space where everyone feels at home. Our chefs are dedicated to crafting dishes that not only taste amazing but also use only the freshest ingredients, sourced locally whenever possible."
  },
  {
    title: "Our Team",
    desc: "Meet our talented team of chefs, servers, and managers who work together to bring you an exceptional dining experience."
  },
  {
    title: "Our Values",
    desc: [
      "Quality: We're committed to serving only the best.",
      "Community: We believe in supporting local businesses and events.",
      "Hospitality: We strive to make every guest feel welcome and valued."
    ]
  },
  {
    title: "Our History",
    desc: "From our humble beginnings to our current location, learn about our journey and how we've grown."
  },
  {
    title: "Awards and Recognition",
    desc: "We're proud to have received [awards or recognition] for our efforts in providing excellent food and service."
  },
  {
    title: "Get in Touch",
    desc: "Contact us to learn more about our story, or to share your own experience with us!"
  }
];





export default function Aboutus(){
    return( 
   
      <div className="mt-28 px-4 md:px-6 lg:px-8 xl:px-12 pb-6">
      {aboutUsData.map((service, index) => (
        <section
          key={index}
          className="py-16 px-4 md:px-6 lg:px-8 xl:px-12 text-center shadow-md border-2 mt-4 rounded-lg max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-merriweather textcolor mb-4">{service.title}</h2>

{Array.isArray(service.desc) ?(
  <ul className=" list-inside text-left mx-auto">
  {
service.desc.map((item,i)=>(
  <li key={i}>        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-textcolor leading-relaxed font-playfair">{item}</p>
  
  </li>
))
  }
  </ul>
):(
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-textcolor leading-relaxed font-playfair">{service.desc}</p>
  
) }


          </div>
        </section>
      ))}
    </div>
   
    )
}








