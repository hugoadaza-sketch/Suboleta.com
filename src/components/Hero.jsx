import "./Hero.css";
import heroImage from "../assets/images/hero/hero.png";
import { motion } from "framer-motion";


function Hero() {

  return (

    <section className="hero">


      <motion.img
        src={heroImage}
        alt="Experiencia Suboleta"
        className="hero-image"

        initial={{
          scale: 1.1,
          opacity: 0
        }}

        animate={{
          scale: 1,
          opacity: 1
        }}

        transition={{
          duration: 1.5,
          ease: "easeOut"
        }}

      />



      <div className="hero-overlay"></div>




      <div className="hero-content">



        <motion.span

          className="hero-tag"

          initial={{
            opacity: 0,
            y: 30
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: .7,
            delay: .3
          }}

        >

          🎶 EXPERIENCIAS • EVENTOS • FESTIVALES

        </motion.span>







        <motion.h1

          initial={{
            opacity: 0,
            y: 40
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: .8,
            delay: .5
          }}

        >

          Disfruta el evento completo.

        </motion.h1>







        <motion.h2

          initial={{
            opacity: 0,
            y: 40
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: .8,
            delay: .7
          }}

        >

          Entradas, movilidad, hospedaje y experiencias
          en un solo lugar.

        </motion.h2>







        <motion.p

          initial={{
            opacity: 0,
            y: 40
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: .8,
            delay: .85
          }}

        >

          Suboleta conecta todo lo que necesitas para vivir
          momentos inolvidables sin preocuparte por los detalles.

        </motion.p>








        <motion.div

          className="hero-buttons"

          initial={{
            opacity: 0,
            y: 30
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: .6,
            delay: 1
          }}

        >



          <a
            href="#eventos"
            className="primary"
          >

            Explorar experiencias

          </a>






          <a
            href="https://wa.me/573019203710"
            className="secondary"
            target="_blank"
            rel="noreferrer"
          >

            Hablar por WhatsApp

          </a>





        </motion.div>





      </div>





    </section>

  );

}


export default Hero;