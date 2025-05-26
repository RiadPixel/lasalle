import { CgGym } from "react-icons/cg";
import { GiGymBag } from "react-icons/gi";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { SiOpenaigym } from "react-icons/si";
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
    icon: <CgGym className="text-4xl text-primary" />,
  },
  {
    id: 2,
    title: "Nutrition Plans",
    image: secondImage,
    icon: <GiGymBag className="text-4xl text-primary" />,
  },
  {
    id: 3,
    title: "Fitness Challenges",
    image: thirdImage,
    icon: <MdOutlineSportsGymnastics className="text-4xl text-primary" />,
  },
  {
    id: 4,
    title: "Wellness Coaching",
    image: fourthImage,
    icon: <SiOpenaigym className="text-4xl text-primary" />,
  },
];
