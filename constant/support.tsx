import { ReactElement } from "react";
import { FaWifi } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { GiKitchenTap } from "react-icons/gi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LiaUsersSolid } from "react-icons/lia";
import { MdCoffeeMaker } from "react-icons/md";
import { TfiPrinter } from "react-icons/tfi";

interface FeaturesType {
  title: string;
  variant: "info" | "warning";
}

interface BenefitsProps {
  title: string;
  icon: any;
}
export const features: FeaturesType[] = [
  {
    title: "Quick Commute",
    variant: "info",
  },
  {
    title: "Low Const",
    variant: "warning",
  },
  {
    title: "Serene Environment",
    variant: "info",
  },
  {
    title: "Thriving Community",
    variant: "info",
  },
];

export const benefits: BenefitsProps[] = [
  {
    title: "Enhanced Productivity",
    icon: <LiaUsersSolid />,
  },
  {
    title: " Printing and Copying Facilities (at Extra Charge)",
    icon: <TfiPrinter />,
  },
  {
    title: "High Speed Internet",
    icon: <FaWifi />,
  },
  {
    title: "Complimentary Tea and Coffee (Self-Serviced)",
    icon: <MdCoffeeMaker />,
  },
  {
    title: "Networking & Collaboration with other Professionals",
    icon: <FaUserGroup />,
  },
  {
    title: "Save Money & Time",
    icon: <IoSpeedometerOutline />,
  },
  {
    title: "Fully Equipped and Technology Ready Workspaces",
    icon: <GiKitchenTap />,
  },

];
