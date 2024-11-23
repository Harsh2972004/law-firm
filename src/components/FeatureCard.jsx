import Clipboard from "./Clipboard";

const FeatureCard = ({ title }) => {
  return (
    <div className="grid-center">
      <Clipboard />
      <h3 className="lgl:text-[20px] md:text-[18px] font-semibold my-4">
        {title}
      </h3>
      <p className="text-para sm:w-auto md:w-[300px] lgl:text-[14px] md:text-[12px] font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatem
        rem porro consequuntur quisquam officiis ab veniam, repudiandae soluta
        veritatis?
      </p>
    </div>
  );
};

export default FeatureCard;
