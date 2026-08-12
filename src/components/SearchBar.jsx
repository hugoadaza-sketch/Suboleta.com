import "./SearchBar.css";


function SearchBar({ onSearch }) {

  const handleSubmit = (e) => {

    e.preventDefault();

    const formData = new FormData(e.target);

    const destination = formData.get("destination");
    const month = formData.get("month");
    const eventName = formData.get("eventName");


    onSearch({
      destination,
      month,
      eventName
    });


    // Bajar hasta Eventos

    setTimeout(() => {

      const section = document.getElementById("eventos");

      if (section) {

        section.scrollIntoView({
          behavior: "smooth"
        });

      }

    }, 100);

  };


  return (

    <section className="search-section">

      <div className="search-container">


        <div className="search-header">

          <h2>
            Encuentra tu experiencia
          </h2>


          <p>
            Busca eventos, hospedajes y planes completos en un solo lugar.
          </p>

        </div>



        <form
          className="search-box"
          onSubmit={handleSubmit}
        >


          {/* DESTINO */}

          <div className="search-item">

            <label>
              📍 Destino
            </label>


            <input
              type="text"
              name="destination"
              placeholder="Ej. Valledupar"
            />

          </div>



          {/* MES */}

          <div className="search-item">

            <label>
              📅 Mes del evento
            </label>


            <select
              name="month"
              defaultValue=""
            >

              <option value="">
                Selecciona un mes
              </option>

              <option value="Enero">
                Enero
              </option>

              <option value="Febrero">
                Febrero
              </option>

              <option value="Marzo">
                Marzo
              </option>

              <option value="Abril">
                Abril
              </option>

              <option value="Mayo">
                Mayo
              </option>

              <option value="Junio">
                Junio
              </option>

              <option value="Julio">
                Julio
              </option>

              <option value="Agosto">
                Agosto
              </option>

              <option value="Septiembre">
                Septiembre
              </option>

              <option value="Octubre">
                Octubre
              </option>

              <option value="Noviembre">
                Noviembre
              </option>

              <option value="Diciembre">
                Diciembre
              </option>

            </select>

          </div>



          {/* EVENTO */}

          <div className="search-item">

            <label>
              🎟 Evento
            </label>


            <input
              type="text"
              name="eventName"
              placeholder="Festival Vallenato"
            />

          </div>



          {/* BOTÓN */}

          <button type="submit">

            Buscar experiencias

          </button>


        </form>


      </div>

    </section>

  );

}


export default SearchBar;