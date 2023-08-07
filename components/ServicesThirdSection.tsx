import Image from "next/image";
import { RightArrow, LeftArrow } from "./Icons";

export default function ServicesThirdSection() {
  return (
    <div className="services-thirdsection">
      <div className="lg:w-1/2 h-full flex flex-col">
        <h1 className="text-2xl sm:text-5xl">
          Sed est consectetur ut metus, enim duis. Velit sollicitudin.
        </h1>
        <p className="py-10 text-sm sm:text-xl">
          Viverra in pellentesque massa justo commodo. Dignissim id egestas
          rhoncus, sit aliquet egestas lacus. Neque at est neque mauris commodo
          in. Mauris habitant at eget orci convallis risus vestibulum.
        </p>
        <div className="flex justify-around sm:justify-start">
          <button className="services-button sm:mx-4">
            <LeftArrow />
          </button>
          <button className="services-button mx-4">
            <RightArrow />
          </button>
        </div>
      </div>
      <Image
        src={"/assets/images/services_3.png"}
        alt={""}
        width={780}
        height={745}
        className="lg:w-1/3 rounded-3xl"
      />
    </div>
  );
}
