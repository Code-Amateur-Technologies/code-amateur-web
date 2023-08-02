import Link from "next/link";
import Image from "next/image";
import OfferingsSlides from "@/components/OfferingsSlides";
import OfferThirdSection from "@/components/OfferThirdSection";
export default function Offer() {
  return (
    <div className="text-gunmetal">
      <section className="py-8 px-4 sm:p-20">
        <h1 className="text-4xl md:text-8xl font-medium tracking-tighter">
          We believe the right design will bring your business to life
        </h1>
        <div className="my-10 sm:my-20 flex-between flex-col md:flex-row text-2xl md:text-4xl font medium tracking-tight">
          <div className="md:w-1/4 self-start">
            <h1 className="mb-5 text-xl">
              01<span className="text-gray-300"> - 03</span>
            </h1>
            <p>Examination of Problem</p>
          </div>
          <div className="md:w-1/4 self-start">
            <h1 className="mb-5 text-xl">
              02<span className="text-gray-300"> - 03</span>
            </h1>
            <p>Plan and complete the solutions</p>
          </div>
          <div className="md:w-1/4 self-start">
            <h1 className="mb-5 text-xl">
              03<span className="text-gray-300"> - 03</span>
            </h1>
            <p>Implementing proven solutions</p>
          </div>
        </div>
        <div className="dark-button">
          <Link href={"/contact"}>Contact Us</Link>
        </div>
      </section>
      <OfferingsSlides />
      <OfferThirdSection />
      <section className="py-8 px-4 sm:p-20 lg:px-40 flex flex-col lg:flex-row">
        <Image src={"/assets/images/offer_3.png"} alt={""} width={780} height={745} className="lg:w-1/2 rounded-3xl"/>
        <div className="md:py-24 sm:px-10 flex justify-between flex-col">
          <h2 className="py-4 text-2xl sm:text-5xl font-medium tracking-tighter">Sed est consectetur ut metus, enim duis. Velit sollicitudin.</h2>
          <div className="mb-4 flex">
            <Image src={"/assets/icons/tick_square.svg"} alt={""} width={40} height={40}/>
            <p className="ml-4 text-sm sm:text-xl">Viverra in pellentesque massa justo commodo.</p>
          </div>
          <div className="mb-4 flex">
            <Image src={"/assets/icons/tick_square.svg"} alt={""} width={40} height={40}/>
            <p className="ml-4 text-sm sm:text-xl">Imperdiet interdum morbi urna nibh interdum. Nunc leo congue.</p>
          </div>
          <div className="mb-4 flex">
            <Image src={"/assets/icons/tick_square.svg"} alt={""} width={40} height={40}/>
            <p className="ml-4 text-sm sm:text-xl">Feugiat faucibus nec malesuada a. In nec a neque lorem potenti.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
