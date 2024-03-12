import React from "react";
import SectionHeading from "./Utility/SectionHeading";
import BoxServices from "./OurServices/BoxServices";
import { Link } from "react-router-dom";

const OurServices = () => {
  const boxServicesObj = [
    {
      imgSrc: "../../../img/ourServices/services_img_1.svg",
      desc: "Jesteśmy szkołą, która oferuje kursy dla początkujących berberów oraz dla osób, które chcą się doskonalić w różnych technikach i trendach fryzjerskich. U nas nauka odbywa się poprzez praktykę, a nie tylko obserwację. Jeśli potrzebujesz elastycznego grafiku, dopasujemy indywidualne godziny szkoleń do Twoich potrzeb, abyś mógł połączyć naukę z Twoją obecną pracą. Dzięki temu, możesz przejść drogę od zera do barbera i stać się prawdziwym profesjonalistą w tej dziedzinie. Dołącz do nas już dziś i odkryj swój talent w fascynującym świecie barberingu!",
      alt: "Professional Barbering Equipments",
    },
    {
      imgSrc: "../../../img/ourServices/services_img_2.svg",
      desc: "Nasza kadra instruktorska składa się z wyjątkowych profesjonalistów z wieloletnim doświadczeniem w branży barberingu. To osoby, które nie tylko doskonale opanowały techniki fryzjerskie, ale również miały ogromny wpływ na rozwój i budowanie trendów barberingu w Polsce. Dzięki ich wiedzy i umiejętnościom, jesteśmy w stanie zapewnić naszym uczniom najwyższy poziom szkolenia oraz wprowadzić ich w świat najnowszych trendów i technik. Każdy instruktor jest pasjonatem swojej pracy i chętnie dzieli się swoją wiedzą oraz doświadczeniem z naszymi uczniami. To dzięki nim nasza szkoła stała się znana jako miejsce, w którym można zdobyć kompleksowe i profesjonalne wykształcenie z zakresu barberingu.",
      alt: "Barbershop at work",
    },
    {
      imgSrc: "../../../img/ourServices/services_img_3.svg",
      desc: "Jesteśmy szkołą, która oferuje kursy dla początkujących berberów oraz dla osób, które chcą się doskonalić w różnych technikach i trendach fryzjerskich. U nas nauka odbywa się poprzez praktykę, a nie tylko obserwację. Jeśli potrzebujesz elastycznego grafiku, dopasujemy indywidualne godziny szkoleń do Twoich potrzeb, abyś mógł połączyć naukę z Twoją obecną pracą. Dzięki temu, możesz przejść drogę od zera do barbera i stać się prawdziwym profesjonalistą w tej dziedzinie. Dołącz do nas już dziś i odkryj swój talent w fascynującym świecie barberingu!",
      alt: "Barbering station",
    },
  ];

  return (
    <div
      className="flex flex-col items-center w-full bg-dark py-8 px-4 2xl:px-4"
      id="services"
    >
      <SectionHeading title="Kursy"></SectionHeading>
      <div className="gap-16 md:px-12 xl:flex 2xl:mt-12 2xl:gap-4">
        {boxServicesObj.map((input, index) => (
          <BoxServices
            key={index}
            imgProp={input.imgSrc}
            descProp={input.desc}
            altProp={input.alt}
          ></BoxServices>
        ))}
      </div>
      <h6 className="mt-10 mb-4 text-xs font-light tracking-widest text-white font-raleway 2xl:text-base">
        Zobacz pełny zakres i opis naszej oferty.
      </h6>
      <Link
        to="/services"
        className="flex items-center px-10 py-3 text-sm font-light leading-5 tracking-widest text-center text-white font-raleway bg-gold transition-all duration-300 ease-in-out hover:bg-darkgold lg:p-4 lg:font-normal 2xl:mb-12 2xl:px-14"
      >
        WIĘCEJ
      </Link>
    </div>
  );
};

export default OurServices;
