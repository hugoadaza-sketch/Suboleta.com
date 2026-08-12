import "./Addons.css";
import addons from "../data/addons";
import { motion } from "framer-motion";

function Addons() {

    return (

        <section
            className="addons"
            id="addons"
        >

            <div className="container">

                <motion.div
                    className="addons-header"
                    initial={{
                        opacity: 0,
                        y: 40
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3
                    }}
                    transition={{
                        duration: 0.8
                    }}
                >

                    <h2>
                        Tours, Licores y Extras
                    </h2>

                    <p className="subtitle">
                        Agrega detalles extra y disfruta una experiencia completa.
                    </p>

                </motion.div>


                <div className="addon-grid">

                    {addons.map((item, index) => (

                        <motion.div
                            className="addon-card"
                            key={item.id || index}

                            initial={{
                                opacity: 0,
                                y: 60
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}

                            viewport={{
                                once: true,
                                amount: 0.2
                            }}

                            transition={{
                                duration: 0.7,
                                delay: index * 0.15
                            }}

                            whileHover={{
                                y: -10
                            }}
                        >

                            <div className="addon-image">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                />

                            </div>


                            <div className="addon-content">

                                <div className="addon-icon">
                                    {item.icon}
                                </div>

                                <h3>
                                    {item.title}
                                </h3>

                                <p>
                                    {item.description}
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

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Addons;