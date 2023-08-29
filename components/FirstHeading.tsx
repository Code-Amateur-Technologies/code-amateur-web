import SlideUp from "./animate/SlideUp";

export default function FirstHeading() {
  return (
    <SlideUp>
      <div className="firstheading">
        <h1 className="gradient-text">Quality.</h1>
        <h1 className="text-gunmetal">Excellence.</h1>
        <h1 className="text-gunmetal">Innovation.</h1>
      </div>
    </SlideUp>
  );
}
