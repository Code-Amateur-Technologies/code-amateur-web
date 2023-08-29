import ScaleUp from "./animate/ScaleUp";

export default function Quote() {
  return (
    <ScaleUp>
      <section className="py-8 px-4 md:py-32 flex-center bg-[url('/assets/images/second_background.svg')] bg-top bg-auto">
        <h1 className="quote-heading">
          We believe that the quality of the product is the most important thing
          for the customer
        </h1>
      </section>
    </ScaleUp>
  );
}
