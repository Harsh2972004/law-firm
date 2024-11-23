import lawyer from "../assets/images/lawyer.png";

const HeroSection = () => {
  return (
    <section className="contain justify-between h-[550px]">
      <div className=" basis-[50%] w-[400px] break-words ">
        <h1 className="text-[52px] font-bold text-white">
          I'm John Carter,
          <br /> Corporate Lawyer
        </h1>
        <p className="w-[480px] text-para mt-4 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          reiciendis veritatis voluptate mollitia! Cumque, neque maiores. Vel ea
          error illo reiciendis, repellendus possimus adipisci quas!
        </p>
        <button className="bg-btn rounded-full px-10 py-3 text-white/70 font-semibold hover:text-white hover:bg-yellow-700 transition-all ease-in">
          Make An Appointment
        </button>
      </div>
      <div className="basis-[50%] image-container">
        {/* <div className="img-slice slice1"></div>
        <div className="img-slice slice2"></div>
        <div className="img-slice slice3"></div> */}
        <img className="rounded-2xl" src={lawyer} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
