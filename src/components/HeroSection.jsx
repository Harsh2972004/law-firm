import lawyer from "../assets/images/lawyer.png";

const HeroSection = () => {
  return (
    <section className="contain justify-between sm:py-6 md:h-[360px] lgl:h-[580px] md:gap-0 sm:gap-12">
      <div className=" basis-[50%]">
        <h1 className="xl:text-[52px] lgl:text-[40px] sm:text-[36px] md:text-[32px] font-bold text-textGrey">
          I'm John Carter,
          <br /> Corporate Lawyer
        </h1>
        <p className="xl:w-[480px] lgl:w-[380px] md:w-[280px] text-para mt-4 mb-8 lgl:text-[14px] md:text-[12px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          reiciendis veritatis voluptate mollitia! Cumque, neque maiores. Vel ea
          error illo reiciendis, repellendus possimus adipisci quas!
        </p>
        <button className="bg-btn rounded-full xl:px-10 lgl:px-7 sm:px-5 lgl:text-[15px] md:text-[13px] py-3 text-white/70 font-semibold hover:text-white hover:bg-yellow-700 transition-all ease-in">
          Make An Appointment
        </button>
      </div>
      <div className="basis-[50%] image-container">
        <img className="rounded-2xl" src={lawyer} alt="lawyer-image" />
      </div>
    </section>
  );
};

export default HeroSection;
