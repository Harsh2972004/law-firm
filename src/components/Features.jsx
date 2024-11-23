import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import Clipboard from "./Clipboard";

const Features = () => {
  return (
    <section className="max-w-[1350px] mx-auto grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 justify-center items-center text-textGrey pb-12">
      <div className="">
        <Clipboard />
        <h3 className="text-[20px] font-semibold my-4">Fight for Justice</h3>
        <p className="text-para w-[300px] text-[14px] font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatem
          rem porro consequuntur quisquam officiis ab veniam, repudiandae soluta
          veritatis?
        </p>
      </div>
      <div>
        <Clipboard />
        <h3 className="text-[20px] font-semibold my-4">Most Experienced</h3>
        <p className="text-para w-[300px] text-[14px] font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatem
          rem porro consequuntur quisquam officiis ab veniam, repudiandae soluta
          veritatis?
        </p>
      </div>
      <div>
        <Clipboard />
        <h3 className="text-[20px] font-semibold my-4">Best Case Strategy</h3>
        <p className="text-para w-[300px] text-[14px] font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatem
          rem porro consequuntur quisquam officiis ab veniam, repudiandae soluta
          veritatis?
        </p>
      </div>
      <div>
        <Clipboard />
        <h3 className="text-[20px] font-semibold my-4">Quick Case Solve</h3>
        <p className="text-para w-[300px] text-[14px] font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatem
          rem porro consequuntur quisquam officiis ab veniam, repudiandae soluta
          veritatis?
        </p>
      </div>
      <div className="row-span-2 col-span-2">
        <h3 className="text-[42px] my-4 font-semibold">
          Why You <br /> Choose Me?
        </h3>
        <p className="text-para w-[445px] text-[14px] font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum vero
          ut repudiandae quidem dolore dignissimos aperiam officia suscipit!
          Sit, quod temporibus iure autem ullam praesentium quia officiis
          accusamus similique doloremque explicabo distinctio odit fugit alias
          non?
        </p>
      </div>
    </section>
  );
};

export default Features;
