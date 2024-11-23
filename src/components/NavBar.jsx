import logo from "../assets/images/law_logo.png";

const NavBar = () => {
  return (
    <nav className="contain justify-between text-nav font-medium py-4 p">
      <div className="center cursor-pointer">
        <img className="w-[80px] mb-2" src={logo} alt="logo" />
        <h3 className="text-[28px] font-lora font-semibold">A & S Law Firm</h3>
      </div>
      <ul className="center gap-12">
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
      <button className="bg-btn rounded-full px-8 py-3 text-white/70 font-semibold hover:text-white hover:bg-yellow-700 transition-all ease-in">
        Make An Appointment
      </button>
    </nav>
  );
};

export default NavBar;
