import CoffeeMachine from "@/components/svg/coffeeMachine";
import Network from "@/components/svg/network";
import Printer from "@/components/svg/printer";
import Productivity from "@/components/svg/productivity";
import SaveMoney from "@/components/svg/saveMoney";
import Tap from "@/components/svg/tap";
import { Wifi } from "lucide-react";
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
    icon: <Productivity />,
  },
  {
    title: " Printing and Copying Facilities (at Extra Charge)",
    icon: <Printer />,
  },
  {
    title: "High Speed Internet",
    icon: <Wifi />,
  },
  {
    title: "Complimentary Tea and Coffee (Self-Serviced)",
    icon: <CoffeeMachine />,
  },
  {
    title: "Networking & Collaboration with other Professionals",
    icon: <Network />,
  },
  {
    title: "Save Money & Time",
    icon: <SaveMoney />,
  },
  {
    title: "Fully Equipped and Technology Ready Workspaces",
    icon: <Tap />,
  },

];
