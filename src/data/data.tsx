import { ArrowRight } from "lucide-react";
import firstImage from "../assets/foryousection/14289.jpg";
import secondImage from "../assets/foryousection/2149552278.jpg";
import thirdImage from "../assets/foryousection/47431.jpg";
import fourthImage from "../assets/foryousection/51767.jpg";

type ForYouDataType = {
  id: number;
  title: string;
  image: string;
  icon: JSX.Element;
};

export const ForYouData: ForYouDataType[] = [
  {
    id: 1,
    title: "Personal Training",
    image: firstImage,
    icon: <ArrowRight className="text-4xl text-white" />,
  },
  {
    id: 2,
    title: "Nutrition Plans",
    image: secondImage,
    icon: <ArrowRight className="text-4xl text-white" />,
  },
  {
    id: 3,
    title: "Fitness Challenges",
    image: thirdImage,
    icon: <ArrowRight className="text-4xl text-white" />,
  },
  {
    id: 4,
    title: "Wellness Coaching",
    image: fourthImage,
    icon: <ArrowRight className="text-4xl text-white" />,
  },
];
