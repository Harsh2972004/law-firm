import { useState } from "react";
import logo from "../assets/images/law_logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CollapsingNavbar from "./CollapsingNavbar";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const onclick = () => {
    setOpen(!open);
  };
  return (
    <nav
      className={` ${
        open ? "max-h-[200px]" : "sm:max-h-[65px] lgl:max-h-[400px]"
      } overflow-hidden transition-all ease-in-out duration-300`}
    >
      <div className="navbar justify-between text-nav font-medium py-4 p">
        <div className="center cursor-pointer">
          <img
            className="xl:w-[80px] lgl:mb-2 sm:mb-1 lgl:w-[50px] md:w-[38px] sm:w-[32px]"
            src={logo}
            alt="logo"
          />
          <h3 className="xl:text-[28px] font-lora font-semibold lgl:text-[20px] md:text-[18px] sm:text-[16px]">
            A & S Law Firm
          </h3>
        </div>
        <ul className="center xl:gap-12 lgl:gap-8 lgl:text-[15px] hide">
          <li className="hover:text-white transition-all ease-in">
            <a href="#">Home</a>
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
        <button className="bg-btn rounded-full xl:px-8 py-3 text-white/70 font-semibold lgl:px-6 lgl:text-[15px] hover:text-white hover:bg-yellow-700 transition-all ease-in hide">
          Make An Appointment
        </button>
        <div onClick={onclick} className="menu relative">
          {open ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
      <div className="relative lgl:hidden -z-100">
        <CollapsingNavbar />
      </div>
    </nav>
  );
};

export default NavBar;
