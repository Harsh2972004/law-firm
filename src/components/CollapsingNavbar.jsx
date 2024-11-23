const CollapsingNavbar = () => {
  return (
    <nav className="sm:mx-6 md:mx-14 flex flex-col items-start justify-center text-[16px] text-nav pb-4">
      <ul>
        <li className="hover:text-white transition-all ease-in">
          <a href="#">Home</a>
        </li>
        <li className="hover:text-white transition-all ease-in mt-2">
          <a href="">Services</a>
        </li>
        <li className="hover:text-white transition-all ease-in mt-2">
          <a href="">About</a>
        </li>
        <li className="hover:text-white transition-all ease-in mt-2">
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default CollapsingNavbar;
