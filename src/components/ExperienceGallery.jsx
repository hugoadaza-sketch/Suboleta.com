import "./ExperienceGallery.css";

import { motion } from "framer-motion";

import concert from "../assets/images/experience/concert.png";
import hotel from "../assets/images/experience/hotel.png";
import tour from "../assets/images/experience/tour.png";
import transport from "../assets/images/experience/transport.png";


const items = [

  {
    title:"Conciertos",
    image:concert,
  },

  {
    title:"Hospedajes",
    image:hotel,
  },

  {
    title:"Tours",
    image:tour,
  },

  {
    title:"Movilidad",
    image:transport,
  },

];



function ExperienceGallery(){

return(


<section className="experience-gallery">


<div className="container">



<motion.div

className="gallery-header"

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true,
amount:.3
}}

transition={{
duration:.8
}}

>


<h2>
Vive la experiencia completa
</h2>


<p>
Todo lo que necesitas para disfrutar tu evento en un solo lugar.
</p>


</motion.div>







<div className="gallery-grid">


{
items.map((item,index)=>(


<motion.div


className="gallery-card"

key={index}


initial={{
opacity:0,
y:60
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true,
amount:.2
}}


transition={{
duration:.7,
delay:index*.15
}}


whileHover={{
scale:1.03,
y:-10
}}


>


<img

src={item.image}

alt={item.title}

/>





<div className="gallery-overlay">


<h3>
{item.title}
</h3>


</div>





</motion.div>


))
}



</div>



</div>



</section>


);


}



export default ExperienceGallery;