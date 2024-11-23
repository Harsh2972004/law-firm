import FeatureCard from "./FeatureCard";

const featureData = [
  "Fight for Justice",
  "Most Experienced",
  "Best Case Strategy",
  "Quick Case Solve",
];

const Features = () => {
  return (
    <section className="xl:mx-24 lgl:mx-20 md:mx-14 sm:mx-6 mx-auto grid xl:grid-flow-col lgl:grid-flow-row xl:grid-cols-3 lgl:grid-cols-2 xl:grid-rows-2 lgl:grid-rows-3 md:gap-8 sm:gap-20 justify-center items-center text-textGrey lgl:pb-12 sm:pb-6 lgl:pt-0 sm:pt-12">
      {featureData.map((e) => (
        <FeatureCard title={e} />
      ))}
      <div className="xl:row-span-2 md:row-span-1 xl:col-span-1 md:col-span-2 grid-center xl:pt-0 md:pt-8">
        <h3 className="lgl:text-[42px] sm:text-[30px] xl:w-[262px] my-4 font-semibold">
          Why You Choose Me?
        </h3>
        <p className="text-para sm:w-auto md:w-auto xl:w-[445px] lgl:text-[14px] md:text-[12px] font-semibold">
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
