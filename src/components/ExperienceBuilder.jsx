import "./ExperienceBuilder.css";
import { motion } from "framer-motion";


const experiences = [


{
icon:"🎟️",
title:"Solo Evento",
description:
"Compra tu entrada y disfruta del concierto o festival.",
button:"Comprar entrada"
},



{
icon:"🚐",
title:"Evento + Movilidad",
description:
"Entrada más transporte para llegar y regresar sin preocupaciones.",
button:"Cotizar transporte"
},



{
icon:"🏨",
title:"Experiencia Completa",
description:
"Entrada, hospedaje y movilidad en un solo paquete.",
button:"Crear experiencia"
},



{
icon:"✨",
title:"Experiencia Suboleta",
description:
"Diseñamos un plan personalizado según tu evento y necesidades.",
button:"Hablar con asesor",
featured:true
}


];





function ExperienceBuilder(){


return(


<section

className="experience-builder"

id="experiencia"

>


<div className="container">






<motion.div

className="experience-header"

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

Arma tu experiencia

</h2>



<p>

Combina servicios y nosotros organizamos todo por ti.

</p>


</motion.div>









<div className="experience-grid">


{


experiences.map((item,index)=>(



<motion.div


className={`experience-card ${item.featured ? "featured":""}`}


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
duration:.6,
delay:index*.15
}}




>


<div className="experience-icon">

{item.icon}

</div>






<h3>

{item.title}

</h3>







<p>

{item.description}

</p>







<a

href="https://wa.me/573019203710"

target="_blank"

rel="noreferrer"

>

{item.button}

</a>






</motion.div>



))


}



</div>






</div>


</section>


);


}



export default ExperienceBuilder;