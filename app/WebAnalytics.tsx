import GoogleAnalytics from "./GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";

export default function WebAnalytics() {
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
