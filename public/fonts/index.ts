import localFont from "next/font/local";
import { Poppins } from "next/font/google";

// Google fonts
export const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

// Local fonts
export const bigCaslon = localFont({
  src: [
    {
      path: "./big-caslon-bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./big-caslon-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bigCaslon",
});

export const guntur = localFont({
  src: [
    {
      path: "./HindGuntur-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./HindGuntur-Regular.ttf",
      weight: "300",
      style: "light",
    },
  ],
  variable: "--font-guntur",
});

export const interstate = localFont({
  src: [
    {
      path: "./interstate-bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./interstate-light.otf",
      weight: "300",
      style: "light",
    },
  ],
  variable: "--font-interstate",
});
