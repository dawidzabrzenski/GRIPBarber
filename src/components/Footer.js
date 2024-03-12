import SocialForm from "./SocialForm";
import OpeningHours from "./OpeningHours";
import FooterHeading from "./FooterHeading";
function Footer() {
  const socialFormObj = [
    {
      img: "./img/icon-tt.svg",
      url: "www.tiktok.com/gripbarber",
      alt: "Barber Shop TikTok icon",
    },
    {
      img: "./img/icon-fb.svg",
      url: "www.facebook.com/gripbarber",
      alt: "Barber Shop Facebook icon",
    },
    {
      img: "./img/icon-ig.svg",
      url: "www.instagram.com/gripbarber",
      alt: "Barber Shop Instagram icon",
    },
  ];

  const openingHoursObj = [
    {
      day: "PONIEDZIAŁEK:",
      hours: "10-20",
    },
    {
      day: "WTOREK:",
      hours: "12-18",
    },
    {
      day: "ŚRODA:",
      hours: "10-18",
    },
    {
      day: "CZWARTEK:",
      hours: "12-21",
    },
    {
      day: "PIĄTEK:",
      hours: "11-21",
    },
    {
      day: "SOBOTA:",
      hours: "ZAMKNIĘTE",
    },
    {
      day: "NIEDZIELA:",
      hours: "ZAMKNIĘTE",
    },
  ];

  return (
    <div className="w-full flex flex-col px-4 py-8 gap-12 bg-dark items-center justify-between lg:flex-row-reverse lg:gap-24 2xl:px-14">
      <div className="lg:w-1/3">
        <FooterHeading title="GODZINY OTWARCIA" />

        {openingHoursObj.map((x, index) => (
          <OpeningHours key={index} dayProp={x.day} hoursProp={x.hours} />
        ))}
      </div>

      <div>
        <FooterHeading title="ZAOBSERWUJ NAS" />
        <div>
          {socialFormObj.map((x, index) => (
            <SocialForm
              key={index}
              imgProp={x.img}
              urlProp={x.url}
              altProp={x.alt}
            />
          ))}
        </div>
      </div>

      <img
        className="w-full w-2/4 md:w-1/3 lg:w-1/4 xl:w-2/12"
        src="./img/logo.svg"
        alt="Grip Barber Logo"
      ></img>
    </div>
  );
}

export default Footer;
