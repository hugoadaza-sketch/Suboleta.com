import { useState } from "react";

import FinalCTA from "./components/FinalCTA";
import Testimonials from "./components/Testimonials";
import ExperienceGallery from "./components/ExperienceGallery";
import Stats from "./components/Stats";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Tours from "./components/Tours";
import Housing from "./components/Housing";
import Mobility from "./components/Mobility";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import HowItWorks from "./components/HowItWorks";
import ExperienceBuilder from "./components/ExperienceBuilder";
import WhySuboleta from "./components/WhySuboleta";
import Events from "./components/Events";


function App() {

  const [filters, setFilters] = useState(null);


  const handleSearch = (searchData) => {

    setFilters(searchData);

  };


  return (

    <>

      <Header />

      <Hero />

      <SearchBar
        onSearch={handleSearch}
      />

      <Stats />

      <ExperienceGallery />

      <Events
        filters={filters}
      />

      <Mobility />

      <Housing />

      <Tours />


      <Categories />

      <HowItWorks />

      <ExperienceBuilder />

      <WhySuboleta />

      <Testimonials />

      <FinalCTA />

      <Footer />

      <WhatsAppButton />

    </>

  );

}


export default App;