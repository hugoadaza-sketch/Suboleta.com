import "./Events.css";
import events from "../data/events";
import { whatsappMessage } from "../utils/whatsapp";


function Events({ filters }) {


  // =========================
  // FILTRAR EVENTOS
  // =========================

  const filteredEvents = events.filter((event) => {


    // Convertimos todo a minúsculas
    // para que la búsqueda no dependa
    // de mayúsculas o minúsculas.

    const destination =
      filters?.destination?.toLowerCase().trim() || "";

    const month =
      filters?.month?.toLowerCase().trim() || "";

    const eventName =
      filters?.eventName?.toLowerCase().trim() || "";


    // Datos del evento

    const eventLocation =
      event.location.toLowerCase();

    const eventTitle =
      event.title.toLowerCase();

    const eventCategory =
      event.category?.toLowerCase() || "";

    const eventDate =
      event.date.toLowerCase();


    // =========================
    // FILTRO DESTINO
    // =========================

    const matchesDestination =
      !destination ||
      eventLocation.includes(destination);


    // =========================
    // FILTRO MES
    // =========================

    const matchesMonth =
      !month ||
      eventDate.includes(month);


    // =========================
    // FILTRO EVENTO
    // =========================

    const matchesEvent =
      !eventName ||
      eventTitle.includes(eventName) ||
      eventCategory.includes(eventName);


    return (
      matchesDestination &&
      matchesMonth &&
      matchesEvent
    );

  });


  return (

    <section
      id="eventos"
      className="events"
    >

      <div className="container">


        <h2>
          Eventos destacados
        </h2>


        <p className="events-subtitle">

          Vive conciertos y festivales con una experiencia completa.

        </p>



        {/* =========================
            RESULTADOS
        ========================= */}

        {

          filteredEvents.length === 0 ? (

            <div className="no-results">

              <div className="no-results-icon">
                🔎
              </div>

              <h3>
                No encontramos experiencias
              </h3>

              <p>
                No encontramos eventos que coincidan con tu búsqueda.
                Prueba con otro destino, mes o evento.
              </p>

            </div>

          ) : (


            <div className="event-grid">


              {

                filteredEvents.map((event) => (


                  <div
                    className="event-card"
                    key={event.id}
                  >


                    {/* IMAGEN */}

                    <div className="event-image">

                      <img
                        src={event.image}
                        alt={event.title}
                      />

                    </div>



                    {/* CONTENIDO */}

                    <div className="event-content">


                      <h3>
                        {event.title}
                      </h3>



                      <p>
                        📍 {event.location}
                      </p>



                      <p>
                        📅 {event.date}
                      </p>



                      <strong>
                        {event.price}
                      </strong>



                      <a

                        href={
                          whatsappMessage(
                            `Hola Suboleta 👋, estoy interesado en el evento ${event.title}. Quiero recibir información sobre entradas y experiencias disponibles.`
                          )
                        }

                        target="_blank"

                        rel="noreferrer"

                      >

                        Reservar ahora

                      </a>


                    </div>


                  </div>

                ))

              }


            </div>

          )

        }


      </div>

    </section>

  );

}


export default Events;