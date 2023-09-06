"use client";

import GoogleAnalytics from "./GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";

export default function WebAnalytics() {
  console.log(process.env.NODE_ENV);
  return (
    <>
      <GoogleAnalytics />
      <Analytics />
    </>
  );
}
