import { useEffect, useState } from "react";

import {
  HiMenu,
  HiX
} from "react-icons/hi";

import "./Header.css";

import logo from "../assets/images/logo/logo.png";


function Header(){


const [scrolled,setScrolled] = useState(false);

const [open,setOpen] = useState(false);



useEffect(()=>{


const handleScroll = ()=>{

setScrolled(window.scrollY > 50);

};



window.addEventListener(
"scroll",
handleScroll
);



return()=>{


window.removeEventListener(
"scroll",
handleScroll
);


};


},[]);





const closeMenu = ()=>{

setOpen(false);

};





return(



<header className={`header ${scrolled ? "header-scrolled":""}`}>



<div className="container">





<a href="#" className="logo-link">


<img

src={logo}

alt="Suboleta"

className="logo"

/>


</a>







<nav className="nav">


<a href="#eventos">
Eventos
</a>


<a href="#movilidad">
Movilidad
</a>


<a href="#hospedajes">
Hospedajes
</a>


<a href="#addons">
Tours
</a>


<a href="#experiencia">
Crear experiencia
</a>



</nav>








<a

className="btn-whatsapp"

href="https://wa.me/573019203710"

target="_blank"

rel="noreferrer"

>

Hablar ahora

</a>







<button

className="menu-btn"

onClick={()=>setOpen(!open)}

aria-label="Abrir menú"

>


{

open

?

<HiX/>

:

<HiMenu/>

}


</button>







</div>








<div className={`mobile-menu ${open ? "show":""}`}>



<a onClick={closeMenu} href="#eventos">
Eventos
</a>


<a onClick={closeMenu} href="#movilidad">
Movilidad
</a>


<a onClick={closeMenu} href="#hospedajes">
Hospedajes
</a>


<a onClick={closeMenu} href="#addons">
Tours
</a>


<a onClick={closeMenu} href="#experiencia">
Crear experiencia
</a>



</div>





</header>


);


}


export default Header;