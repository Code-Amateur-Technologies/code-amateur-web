import { SlideUp } from "./animations/SlideAnimation";

export default function FirstHeading() {
  return (
    <SlideUp>
      <div className="firstheading">
        <h1 className="text-gunmetal">
          <span className="gradient-text">Quality.</span> <br />
          Excellence. <br />
          Innovation.
        </h1>
      </div>
    </SlideUp>
  );
}
