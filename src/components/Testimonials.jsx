import "./Testimonials.css";


const testimonials = [

  {
    name: "María Fernanda",
    city: "Medellín",
    text: "Reservé el paquete completo para el Festival Vallenato y fue la mejor decisión. No tuve que preocuparme por el hotel, el transporte ni las entradas. Todo llegó organizado y a tiempo.",
    rating: 5,
  },


  {
    name: "Carlos Andrés",
    city: "Bogotá",
    text: "Pensé que tendría que buscar todo por separado, pero encontré una experiencia completa. Llegué al evento y simplemente disfruté sin preocuparme por la logística.",
    rating: 5,
  },


  {
    name: "Laura Gómez",
    city: "Barranquilla",
    text: "Lo que más me gustó fue la atención. Respondieron todas mis dudas por WhatsApp y el itinerario estuvo perfectamente organizado.",
    rating: 5,
  },

];



const Testimonials = () => {


  return (


    <section className="testimonials">


      <div className="container">



        <h2>
          Historias que inspiran confianza
        </h2>




        <p className="testimonials-subtitle">

          Miles de viajeros ya disfrutan eventos inolvidables con experiencias
          organizadas de principio a fin.

        </p>





        <div className="testimonials-grid">


          {

            testimonials.map((item,index)=>(



              <div

                className="testimonial-card"

                key={index}

              >




                <div className="stars">


                  {

                    [...Array(item.rating)].map((_,i)=>(

                      <span key={i}>
                        ★
                      </span>

                    ))

                  }


                </div>






                <p className="testimonial-text">

                  “{item.text}”

                </p>







                <div className="testimonial-user">



                  <div className="avatar">

                    {item.name.charAt(0)}

                  </div>





                  <div>


                    <h4>

                      {item.name}

                    </h4>



                    <span>

                      {item.city}

                    </span>



                  </div>



                </div>




              </div>



            ))

          }



        </div>




      </div>


    </section>


  );


};



export default Testimonials;