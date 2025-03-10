import { useNavigate } from "react-router-dom"
import imag from "../assets/storyimage.png"


export default function Ourstory(){

  const navigate = useNavigate()

  return(
        <div>
            <div className="hero min-h-screen mt-4">
  <div className="hero-content flex-col md:flex-row-reverse lg:flex-row-reverse gap-10">
    
    <div>
      <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-bold font-merriweather">Our Story</h1>
      <p className="py-6 text-gray-600 font-playfair text-md sm:text-xl md:text-xl lg:text-2xl">
      Our restaurant is a family-run restaurant with a love for traditional British cooking. Our chefs use only the freshest, locally-sourced ingredients to create dishes that are both familiar and exciting!
      </p>
      <button className="btn bg-textcolor text-white" onClick={()=>navigate("/about")}>Learn more</button>
    </div>
    <img
      src={imag}
      className="md:max-w-sm lg:max-w-lg rounded-lg shadow-2xl" 
      alt="Our Restaurant Interior"
    />
  </div>
</div>

        </div>
    )
}