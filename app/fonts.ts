import { MuseoModerno, Rubik } from "next/font/google";

export const primary_font = MuseoModerno({ subsets: ["latin"], weight: "400" });
export const bold_primary_font = MuseoModerno({
  weight: "700",
  subsets: ["latin"],
});
export const secondary_font = Rubik({ weight: "400", subsets: ["latin"] });
export const bold_secondary_font = Rubik({
  weight: "700",
  subsets: ["latin"],
});
