import Clipboard from "./Clipboard";

const FeatureCard = ({ title }) => {
  return (
    <div className="grid-center">
      <Clipboard />
      <h3 className="text-[20px] font-semibold my-4">{title}</h3>
      <p className="text-para w-[300px] text-[14px] font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatem
        rem porro consequuntur quisquam officiis ab veniam, repudiandae soluta
        veritatis?
      </p>
    </div>
  );
};

export default FeatureCard;
