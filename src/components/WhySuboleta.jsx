import "./WhySuboleta.css";
import { motion } from "framer-motion";


function WhySuboleta(){


const reasons = [


{
icon:"🎟️",
title:"Todo en un solo lugar",
text:"Entradas, transporte, hospedaje y experiencias conectadas."
},



{
icon:"✨",
title:"Experiencias completas",
text:"Creamos planes para que disfrutes sin preocuparte por la logística."
},



{
icon:"🤝",
title:"Acompañamiento personalizado",
text:"Te ayudamos a organizar cada detalle antes y durante tu evento."
},



{
icon:"⭐",
title:"Aliados y confianza",
text:"Trabajamos con proveedores para ofrecer experiencias seguras."
}


];




return(


<section className="why-suboleta">


<div className="container">






<motion.div

className="why-header"

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

¿Por qué elegir Suboleta?

</h2>



<p>

Más que una entrada, creamos experiencias completas.

</p>


</motion.div>









<div className="why-grid">


{


reasons.map((item,index)=>(



<motion.div


className="why-card"

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



whileHover={{
y:-10
}}



>






<div className="why-icon">

{item.icon}

</div>






<h3>

{item.title}

</h3>






<p>

{item.text}

</p>






</motion.div>



))


}



</div>






</div>


</section>


);


}



export default WhySuboleta;