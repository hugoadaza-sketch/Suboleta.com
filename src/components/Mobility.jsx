import "./Mobility.css";
import mobility from "../data/mobility";
import { motion } from "framer-motion";


function Mobility(){


return(


<section 
id="movilidad" 
className="mobility"
>


<div className="container">





<motion.div

className="mobility-header"

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
Movilidad
</h2>


<p className="subtitle">

Opciones para llegar, moverte y disfrutar sin preocupaciones.

</p>


</motion.div>








<div className="mobility-grid">


{


mobility.map((item,index)=>(



<motion.div


className="mobility-card"

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
y:-10
}}



>





<div className="mobility-icon">

{item.icon}

</div>






<h3>

{item.title}

</h3>






<p>

{item.description}

</p>







<strong>

{item.price}

</strong>







<a

href="https://wa.me/573019203710"

target="_blank"

rel="noreferrer"

>

Consultar

</a>





</motion.div>



))


}



</div>




</div>


</section>


)


}


export default Mobility;