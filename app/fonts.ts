import { MuseoModerno, Sora, Space_Grotesk } from "next/font/google";

export const primary_font = MuseoModerno({ subsets: ["latin"], weight: "400" });
export const bold_primary_font = MuseoModerno({
  weight: "700",
  subsets: ["latin"],
});
export const secondary_font = Sora({ weight: "300", subsets: ["latin"] });
export const bold_secondary_font = Sora({
  weight: "500",
  subsets: ["latin"],
});
export const code_font = Space_Grotesk({ weight: "400", subsets: ["latin"] });
export const bold_code_font = Space_Grotesk({
  weight: "700",
  subsets: ["latin"],
});
