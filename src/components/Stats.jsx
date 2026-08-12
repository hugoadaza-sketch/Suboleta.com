import "./Stats.css";
import { motion } from "framer-motion";


function Stats() {


  const stats = [

    {
      number:"+15.000",
      label:"Experiencias vendidas"
    },

    {
      number:"+250",
      label:"Eventos disponibles"
    },

    {
      number:"+50",
      label:"Aliados estratégicos"
    },

    {
      number:"4.9⭐",
      label:"Calificación promedio"
    }

  ];



  return (


    <section className="stats">


      <div className="container">



        <motion.div

          className="stats-header"

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
            Una comunidad que vive experiencias
          </h2>


          <p>
            Conectamos personas con eventos, viajes y momentos inolvidables.
          </p>


        </motion.div>







        <div className="stats-grid">


          {
            stats.map((item,index)=>(


              <motion.div

                className="stat-card"

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
                  amount:.3
                }}


                transition={{
                  duration:.6,
                  delay:index * .15
                }}

                whileHover={{
                  y:-8
                }}

              >



                <motion.h3

                  initial={{
                    scale:.7,
                    opacity:0
                  }}

                  whileInView={{
                    scale:1,
                    opacity:1
                  }}

                  viewport={{
                    once:true
                  }}

                  transition={{
                    duration:.5,
                    delay:.2 + index*.15
                  }}

                >

                  {item.number}

                </motion.h3>





                <p>
                  {item.label}
                </p>



              </motion.div>


            ))
          }


        </div>


      </div>


    </section>


  );

}


export default Stats;