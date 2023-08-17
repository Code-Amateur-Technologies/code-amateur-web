import { counter } from "@/utils/counter";
interface AboutBox {
  id: number;
  value: number;
  valueString: string;
  aboutText: string;
}

const aboutBox: AboutBox[] = [
  {
    id: 1,
    value: 100,
    valueString: "+",
    aboutText: "Compeleted projects",
  },
  {
    id: 2,
    value: 99,
    valueString: "%",
    aboutText: "Success rate",
  },
  {
    id: 3,
    value: 50,
    valueString: "+",
    aboutText: "Team strength",
  },
];

export default function AboutCountBox() {
  
  return (
    <div className="about-gridcontainer">
      {aboutBox.map((items) => (
        <div key={items.id} className="about-box">
          <div className="about-pill animate-math">
            <p>{items.value}</p>
            <p>{items.valueString}</p>
          </div>
          <p className="text-sm lg:text-2xl">{items.aboutText}</p>
        </div>
      ))}
    </div>
  );
}
