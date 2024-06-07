import React from "react";
import PersonCard from "../Team/PersonCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const peopleData = [
  {
    id: 1,
    nameProp: "Adam",
    lastNameProp: "Kania",
    imgProp: "./img/team/adam-full.jpg",
    descProp: (
      <div>
        <p>
          Adam jest pasjonatem zawodu fryzjera oraz sportów motorowych. Po
          powrocie do Polski otworzył Grip Barber Shop, łącząc swoje dwie pasje.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    nameProp: "Anna",
    lastNameProp: "Odziomek",
    imgProp: "./img/team/anna-full.jpg",
    descProp: (
      <div>
        <p>
          Anna Odziomek to doświadczona fryzjerka z pasją, posiadająca 17-letnie
          doświadczenie w branży.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    nameProp: "Michał",
    lastNameProp: "Jurewicz",
    imgProp: "./img/team/michal-full.jpg",
    descProp: (
      <div>
        <p>
          Michał Jurewicz, specjalizuje się w dłuższych formach fryzur męskich z
          nowymi trendami cieniowania.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    nameProp: "Szymon",
    lastNameProp: "Lezuk",
    imgProp: "./img/team/szymon-full.jpg",
    descProp: (
      <div>
        <p>
          Szymon to doświadczony fryzjer z 20-letnim stażem, który pracował w
          wielu renomowanych salonach we Wrocławiu.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    nameProp: "Natalia",
    lastNameProp: "Dub",
    imgProp: "./img/team/natalia-full.jpg",
    descProp: (
      <div>
        <p>
          Natalia to utalentowana 21-letnia fryzjerka z imponującym dwuletnim
          stażem pracy..
        </p>
      </div>
    ),
  },
];

function Slider() {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        centeredSlides={true}
        slidesOffsetAfter={50}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          0: {
            slidesPerView: 1,
            navigation: { nextEl: "", prevEl: "" },
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {peopleData.map((person, index) => (
          <SwiperSlide key={index}>
            <PersonCard
              nameProp={person.nameProp}
              lastNameProp={person.lastNameProp}
              imgProp={person.imgProp}
              descProp={person.descProp}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-pagination-bullet {
          background-color: gold;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          transition: all 0.2s ease-out;
        }
        // .swiper-backface-hidden .swiper-slide {
        //   transform: scale(.80) translateZ(0);
        //   filter: grayscale(80%)
        //   opacity: 0.8;
        //   transition: all 0.2s ease-out;
        // }
                
        .swiper-slide.swiper-slide-active {  
          transform: scale(1) !important;
          opacity: 1 !important;
          filter: grayscale(0%)
        }

        .swiper-backface-hidden .swiper-slide.swiper-slide-active {
          transform: scale(1) translateZ(0) !important;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: gold;
          
        }

        .swiper-button-prev {
          transform: translateX(-0.7rem) scale(0.8);
        }

        .swiper-button-next {
          transform: translateX(0.7rem) scale(0.8);
        }
        
      `}</style>
    </div>
  );
}

export default Slider;
