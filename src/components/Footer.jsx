import "./Footer.css";
import logo from "../assets/images/logo/logo.png";


function Footer(){

return(

<footer className="footer">


<div className="container footer-grid">


{/* Marca */}

<div className="footer-brand">

<img 
src={logo}
alt="Suboleta"
/>


<p>
Creamos experiencias completas:
eventos, movilidad, hospedaje y turismo.
</p>


<div className="footer-trust">

<span>
✓ Compra segura
</span>

<span>
✓ Atención personalizada
</span>

<span>
✓ Experiencias completas
</span>

</div>


</div>





{/* Servicios */}

<div className="footer-links">


<h3>
Servicios
</h3>


<a href="#evento">
Eventos
</a>


<a href="#movilidad">
Movilidad
</a>


<a href="#hospedajes">
Hospedajes
</a>


<a href="#tours">
Tours
</a>


<a href="#licores">
Addons
</a>


</div>







{/* Contacto */}

<div className="footer-contact">


<h3>
Contacto
</h3>


<p>
📱 +57 301 920 3710
</p>


<p>
📍 Colombia
</p>


<p>
✉️ ventas@suboleta.com
</p>



<a 
href="https://wa.me/573019203710"
target="_blank"
rel="noreferrer"
className="footer-whatsapp"
>
Hablar con nosotros
</a>


</div>








{/* Redes */}

<div className="footer-social">


<h3>
Síguenos
</h3>


<a href="#">
Instagram
</a>


<a href="#">
TikTok
</a>


<a href="#">
Facebook
</a>


</div>




</div>







<div className="footer-bottom">


<p>
© 2026 Suboleta. Todos los derechos reservados.
</p>


</div>





</footer>

)

}


export default Footer;