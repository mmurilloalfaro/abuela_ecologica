"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function PaypalDonateButton() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).PayPal) {
      (window as any).PayPal.Donation.Button({
        env: "production",
        hosted_button_id: "EUTTTVBKC9WJN",
      }).render("#donate-button");
    }
  }, []);

  return (
    <div className="w-full flex justify-center">
      {/* Script controlado por Next */}
      <Script
        src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js"
        strategy="afterInteractive"
        onLoad={() => {
          if ((window as any).PayPal) {
            (window as any).PayPal.Donation.Button({
              env: "production",
              hosted_button_id: "EUTTTVBKC9WJN",
            }).render("#donate-button");
          }
        }}
      />

      <div id="donate-button" />
    </div>
  );
}
