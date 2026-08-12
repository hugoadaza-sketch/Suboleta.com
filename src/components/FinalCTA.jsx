import "./FinalCTA.css";


const FinalCTA = () => {

  return (

    <section className="final-cta">


      <div className="container">


        <div className="cta-box">



          <span className="cta-tag">

            🎉 Tu próxima experiencia comienza aquí

          </span>




          <h2>

            Vive el evento.

            <br />

            Nosotros organizamos el resto.

          </h2>




          <p>

            Entradas, hospedaje, transporte, tours y experiencias
            cuidadosamente seleccionadas para que solo tengas que disfrutar.

          </p>




          <div className="cta-buttons">



            <a 
              href="#experiencia"
              className="btn-primary"
            >

              Crear mi experiencia

            </a>





            <a

              href="https://wa.me/573019203710"

              target="_blank"

              rel="noreferrer"

              className="btn-secondary"

            >

              Hablar con un asesor

            </a>




          </div>




        </div>


      </div>


    </section>

  );

};


export default FinalCTA;