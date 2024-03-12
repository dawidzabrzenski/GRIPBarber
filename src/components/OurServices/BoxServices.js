const BoxServices = ({ imgProp, descProp, altProp }) => {
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 lg:w-3/3 xl:w-1/3 2xl:gap-10">
      <img
        src={imgProp}
        alt={altProp}
        className="shadow-custom border-2 border-gold w-full md:w-7/8 xl:w-7/8 2xl:w-5/6"
      ></img>
      <div className="w-32 h-1 bg-gold"></div>
      <p className="font-raleway text-base font-light text-justify mb-6 text-white tracking-wider sm:mb-20 sm:text-2xl md:w-7/8 md:text-xl lg:text-xl lg:tracking-wide 2xl:text-xl 2xl:w-5/6 ">
        {descProp}
      </p>
    </div>
  );
};

export default BoxServices;
