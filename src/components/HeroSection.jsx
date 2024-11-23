import lawyer from "../assets/images/lawyer.png";

const HeroSection = () => {
  return (
    <section className="contain justify-between h-[580px]">
      <div className=" basis-[50%]">
        <h1 className="xl:text-[52px] lgl:text-[40px] font-bold text-textGrey">
          I'm John Carter,
          <br /> Corporate Lawyer
        </h1>
        <p className="xl:w-[480px] lgl:w-[380px] text-para mt-4 mb-8 lgl:text-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          reiciendis veritatis voluptate mollitia! Cumque, neque maiores. Vel ea
          error illo reiciendis, repellendus possimus adipisci quas!
        </p>
        <button className="bg-btn rounded-full xl:px-10 lgl:px-7 lgl:text-[15px] py-3 text-white/70 font-semibold hover:text-white hover:bg-yellow-700 transition-all ease-in">
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
