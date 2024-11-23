import clipboard from "../assets/images/clipboard.png";
import check from "../assets/images/check.png";

const Clipboard = () => {
  return (
    <div className="relative sm:right-2 xl:right-3 lgl:w-[80px] md:w-[60px]">
      <img
        className="lgl:w-[80px] md:w-[60px]"
        src={clipboard}
        alt="clipboard"
      />
      <img
        className="absolute sm:top-[38%] sm:left-[6%] md:top-[38%] md:left-[32%] lgl:w-[30px] sm:w-[22px]"
        src={check}
        alt="check"
      />
    </div>
  );
};

export default Clipboard;
