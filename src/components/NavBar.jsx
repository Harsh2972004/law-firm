import logo from "../assets/images/law_logo.png";

const NavBar = () => {
  return (
    <nav className="contain justify-between text-nav font-medium py-4 p">
      <div className="center cursor-pointer">
        <img className="xl:w-[80px] mb-2 lgl:w-[50px]" src={logo} alt="logo" />
        <h3 className="xl:  text-[28px] font-lora font-semibold lgl:text-[20px]">
          A & S Law Firm
        </h3>
      </div>
      <ul className="center xl:gap-12 lgl:gap-8 lgl:text-[15px]">
        <li className="hover:text-white transition-all ease-in">
          <a href="">Home</a>
        </li>
        <li className="hover:text-white transition-all ease-in">
          <a href="">Services</a>
        </li>
        <li className="hover:text-white transition-all ease-in">
          <a href="">About</a>
        </li>
        <li className="hover:text-white transition-all ease-in">
          <a href="">Contact</a>
        </li>
      </ul>
      <button className="bg-btn rounded-full xl:px-8 py-3 text-white/70 font-semibold lgl:px-6 lgl:text-[15px] hover:text-white hover:bg-yellow-700 transition-all ease-in">
        Make An Appointment
      </button>
    </nav>
  );
};

export default NavBar;
