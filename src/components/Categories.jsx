import "./Categories.css";
import { motion } from "framer-motion";


const categories = [


{
icon:"🎟️",
title:"Eventos",
description:"Conciertos, festivales y experiencias únicas.",
link:"#evento"
},



{
icon:"🚌",
title:"Movilidad",
description:"Transporte seguro para llegar y regresar de tu evento.",
link:"#movilidad"
},



{
icon:"🏨",
title:"Hospedajes",
description:"Hoteles, casas y alojamientos cerca del evento.",
link:"#hospedajes"
},



{
icon:"✨",
title:"Experiencias",
description:"Arma planes completos con todo incluido.",
link:"#experiencia"
},



{
icon:"🌎",
title:"Tours",
description:"Convierte un evento en un viaje inolvidable.",
link:"#addons"
},



{
icon:"🍾",
title:"Extras",
description:"Combos, bebidas y detalles para disfrutar más.",
link:"#addons"
}


];




function Categories(){


return(


<section className="categories">


<div className="container">





<motion.div

className="categories-header"

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

Todo lo que necesitas para vivir la experiencia

</h2>


</motion.div>







<div className="category-grid">


{


categories.map((category,index)=>(



<motion.div


className="category-card"

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
delay:index*.1
}}



whileHover={{
y:-10
}}



>





<div className="category-icon">

{category.icon}

</div>







<h3>

{category.title}

</h3>







<p>

{category.description}

</p>








<a href={category.link}>

Explorar →

</a>






</motion.div>



))


}



</div>






</div>


</section>


);


}



export default Categories;