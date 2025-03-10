import { useRef } from "react";
import Hero from "../Components/Hero"
import Contact from "../Components/Contact"
import Ourstory from "../Components/Ourstory"
import Menuhightlight from "../Components/Menuhightlight"
import SpecialServices from "../Components/SpecialServices"
import SpecialsEvents from "../Components/SpecialsEvents"
import Events from "../Components/Events"

export default function Home({ contactRef }){
    return(
        <div>
        <Hero/>
        <Ourstory/>
        <Menuhightlight/>
        <SpecialsEvents/>
        <Events/>
        <SpecialServices/>
        <div ref={contactRef}>
        <Contact/>
        </div>
        </div>
    )
}