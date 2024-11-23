import clipboard from "../assets/images/clipboard.png";
import check from "../assets/images/check.png";

const Clipboard = () => {
  return (
    <div className="relative xl:right-3 w-[80px]">
      <img className="w-[80px]" src={clipboard} alt="clipboard" />
      <img
        className="absolute top-[38%] left-[32%] w-[30px]"
        src={check}
        alt="check"
      />
    </div>
  );
};

export default Clipboard;
