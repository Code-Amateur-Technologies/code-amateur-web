import { portfolioList } from "@/data/data";
export default function Portfolio() {
  const data = portfolioList;
  return (
    <div className="py-8 px-4 md:p-20">
      <p className="text-2xl sm:text-7xl font-medium tracking-tighter text-gunmetal text-center">Portfolio</p>
      <div className="flex flex-wrap">
        {data.map((items) => (
          <div className="w-full md:w-1/2 h-fit flex-center" key={items.id}>
            <img
              src={items.img}
              className="w-auto h-auto p-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
