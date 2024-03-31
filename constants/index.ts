import img from "@/assets/img/img.png";

import { AiFillHome } from "react-icons/ai";
import {
  FaImage,
  FaWandMagicSparkles,
  FaPaintRoller,
  FaCartShopping,
} from "react-icons/fa6";
import { FaRemoveFormat } from "react-icons/fa";
import { PiSelectionBackgroundBold } from "react-icons/pi";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "/features",
  },
  {
    id: "1",
    title: "articles",
    url: "#pricing",
  },
  {
    id: "2",
    title: "courses",
    url: "/courses",
  },
  {
    id: "3",
    title: "snippets",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const pricingList = [
  {
    id: 0,
    tier: "Basic",
    desc: "To discover our tools and enjoy learning",
    price: "Free",
    features: ["Read articles and lastest news about coding"],
    warnings: [
      "Access to all FREE code snippets",
      "Free trial of our AI-tools",
      "Grade-3 Priority",
    ],
    paid: [
      "Access our monthly workshops",
      "Get our up-to-date and detailed courses",
    ],
  },
  {
    id: 1,
    tier: "Pro",
    desc: "Best option to improve skills and use AI-tools",
    price: "$9.99",
    features: [
      "Read articles and lastest news about coding",
      "+20 Free CS Points",
    ],
    warnings: [
      "Access to all PRO code snippets",
      "Pay-per-use access to our AI-tools",
      "Grade-2 Priorty",
    ],
    paid: ["Access our monthly workshops"],
  },
  {
    id: 2,
    tier: "Pro Max",
    desc: "Get high-priorty servers to freely use our tools",
    price: "$29.99",
    features: [
      "Read articles and lastest news about coding",
      "Access to the entire code snippets database",
      "Free access to our AI-tools",
      "Grade-1 Priorty",
    ],
    warnings: [""],
    paid: [""],
  },
];

export const athenaSideLink = [
  {
    id: 0,
    label: "Home",
    route: "",
    icon: AiFillHome,
  },
  {
    id: 1,
    label: "Image Restore",
    route: "/restore",
    icon: FaImage,
  },
  {
    id: 2,
    label: "Generative Fill",
    route: "/fill",
    icon: FaWandMagicSparkles,
  },
  {
    id: 3,
    label: "Remove Object",
    route: "/remove",
    icon: FaRemoveFormat,
  },
  {
    id: 4,
    label: "Recolor object",
    route: "/recolor",
    icon: FaPaintRoller,
  },
  {
    id: 5,
    label: "Remove Background",
    route: "/background",
    icon: PiSelectionBackgroundBold,
  },
  {
    id: 6,
    label: "Go Premium",
    route: "/pricing",
    icon: FaCartShopping,
  },
];

export const roadmap = [
  {
    id: "0",
    title: "AI-powered Image Generator: Athena",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "progress",
    imageUrl: img,
    colorful: true,
  },
  {
    id: "1",
    title: "Articles",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: img,
  },
  {
    id: "2",
    title: "Courses",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: img,
  },
  {
    id: "3",
    title: "Snippets",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: img,
  },
];
