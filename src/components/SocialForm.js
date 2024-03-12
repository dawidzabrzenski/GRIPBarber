const SocialForm = ({ urlProp, imgProp, altProp }) => {
  return (
    <div className="flex items-center text-sm gap-6 mb-4 font-light">
      <img src={imgProp} alt={altProp}></img>
      <div className="tracking-wider text-white font-raleway sm:text-xl lg:text-base xl:text-sm 2xl:text-lg">
        {urlProp}
      </div>
    </div>
  );
};

export default SocialForm;
