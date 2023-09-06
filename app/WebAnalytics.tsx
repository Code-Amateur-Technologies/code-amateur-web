import GoogleAnalytics from "./GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";

export default function WebAnalytics() {
//   console.log("enviorment testing tag", process.env.NODE_ENV);
  return (
    <>
      {process.env.NODE_ENV === "production" && (
        <>
          <GoogleAnalytics />
          <Analytics />
        </>
      )}
    </>
  );
}
