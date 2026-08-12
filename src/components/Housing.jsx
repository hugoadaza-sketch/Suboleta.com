import "./Housing.css";
import housing from "../data/housing";
import { motion } from "framer-motion";


function Housing(){


return(


<section 
id="hospedajes" 
className="housing"
>


<div className="container">





<motion.div

className="housing-header"

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
Hospedajes
</h2>


<p className="subtitle">

Encuentra el lugar perfecto para disfrutar tu experiencia.

</p>


</motion.div>








<div className="housing-grid">



{


housing.map((item,index)=>(



<motion.div


className="housing-card"

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





<div className="housing-image">


<img

src={item.image}

alt={item.title}

/>


</div>







<div className="housing-content">





<h3>

{item.title}

</h3>






<p>

📍 {item.location}

</p>






<p>

👥 {item.capacity}

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





</div>






</motion.div>



))


}



</div>





</div>


</section>


);


}


export default Housing;