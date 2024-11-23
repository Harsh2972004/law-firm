import FeatureCard from "./FeatureCard";

const featureData = [
  "Fight for Justice",
  "Most Experienced",
  "Best Case Strategy",
  "Quick Case Solve",
];

const Features = () => {
  return (
    <section className="xl:mx-24 lgl:mx-20 md:mx-14 mx-auto grid xl:grid-flow-col lgl:grid-flow-row xl:grid-cols-3 lgl:grid-cols-2 xl:grid-rows-2 lgl:grid-rows-3 gap-8 justify-center items-center text-textGrey pb-12">
      {featureData.map((e) => (
        <FeatureCard title={e} />
      ))}
      <div className="xl:row-span-2 lgl:row-span-1 xl:col-span-1 lgl:col-span-2 grid-center">
        <h3 className="text-[42px] xl:w-[262px] my-4 font-semibold">
          Why You Choose Me?
        </h3>
        <p className="text-para xl:w-[445px] text-[14px] font-semibold">
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
