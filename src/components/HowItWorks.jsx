import "./HowItWorks.css";
import { motion } from "framer-motion";


const steps = [


{
number:"01",
icon:"🎟️",
title:"Elige tu evento",
description:
"Explora conciertos, festivales y experiencias disponibles."
},



{
number:"02",
icon:"✨",
title:"Personaliza tu experiencia",
description:
"Agrega transporte, hospedaje, vehículos, tours y más."
},



{
number:"03",
icon:"💬",
title:"Reserva por WhatsApp",
description:
"Nuestro equipo te ayuda a organizar todos los detalles."
}


];




function HowItWorks(){


return(


<section className="how-it-works">


<div className="container">






<motion.div

className="how-header"

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

¿Cómo funciona Suboleta?

</h2>



<p>

Creamos experiencias completas para que solo disfrutes.

</p>


</motion.div>








<div className="steps">


{


steps.map((step,index)=>(



<motion.div


className="step"

key={index}


initial={{
opacity:0,
y:50
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


<div className="step-number">

{step.number}

</div>





<div className="step-icon">

{step.icon}

</div>





<h3>

{step.title}

</h3>





<p>

{step.description}

</p>





</motion.div>



))


}



</div>






</div>


</section>


);


}



export default HowItWorks;