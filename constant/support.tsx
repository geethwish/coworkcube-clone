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


type workSpaceList = string[]
export interface WorkSpaceType {
  title: string
  subtitle: string
  sectionDescription: string
  list: workSpaceList,
  price1: string,
  price2: string
}

export const workSpace: WorkSpaceType[] = [
  {
    title: 'Shared Workspace - Hotdesking:',
    subtitle: '(City Pass / Global Pass)',
    sectionDescription: 'Work from any center in your city or across our global network.',
    list: ['Individual desks booked for a limited time.', 'Will be used by other users when usage time is over.', 'Can be booked according to availability at time of booking'],
    price1: 'LKR 20,000.00/month',
    price2: 'LKR 20,000.00/month'
  },
  {
    title: 'Shared Workspace – Dedicated Desks:',
    subtitle: '(City Pass / Global Pass)',
    sectionDescription: 'Work from any center in your city or across our global network.',
    list: ['Individual desks booked for a limited time.', 'Will be used by other users when usage time is over.', 'Can be booked according to availability at time of booking'],
    price1: 'LKR 20,000.00/month',
    price2: 'LKR 20,000.00/month'
  },
  {
    title: 'Private Workspaces:',
    subtitle: '(City Pass / Global Pass)',
    sectionDescription: 'Work from any center in your city or across our global network.',
    list: ['Individual desks booked for a limited time.', 'Will be used by other users when usage time is over.', 'Can be booked according to availability at time of booking'],
    price1: 'LKR 20,000.00/month',
    price2: 'LKR 20,000.00/month'
  }
]

export interface package2Type {
  title: string
  price: string
  description: string
  list: string[]
}

export const package2: package2Type[] = [
  {
    title: 'Half-Day Pass',
    price: '100,000',
    description: '',
    list: ['1-Person Pass', 'Usage: 4 Hours', 'For Hot Desking only']
  },
  {
    title: '1- Day Pass',
    price: '100,000',
    description: '',
    list: ['1-Person Pass', 'Usage: 9 hours (including break)', 'For Hot Desking only']
  },
  {
    title: 'Weekly Pass',
    price: '100,000',
    description: '',
    list: ['1-Person Pass', 'Usage: 1 Work Week – that is 5 full weekdays used at a stretch.', 'For Hot Desking only']
  },
  {
    title: '10-day Pass',
    price: '100,000',
    description: '',
    list: ['1-Person Pass', 'Usage: 2 Work Weeks – that is 10 full weekdays used at a stretch.', 'For Hot Desking and Dedicated Desks only']
  },
  {
    title: '1-Month Pass',
    price: '100,000',
    description: '',
    list: ['1-Person Pass', 'Usage: 1 Month used at a stretch. Weekdays only', 'For Hot Desking, Dedicated Desks and Private Workspaces.']
  },
  {
    title: 'Team Pass:',
    price: '100,000',
    description: '',
    list: ['5-Person Pass', 'Usage: 1 Month used at a stretch. Weekdays only.', 'For Hot Desking, Dedicated Desks and Private Workspaces.', 'Free 8-hour pass for Meeting Spaces taken by the hour']
  }
]

export interface FAQTypes {
  title: string,
  description: string
}
export const fqaList: FAQTypes[] =
  [
    {
      title: 'How can I get to Coworking Cube?',
      description: 'Coworking Cube is located in Kottawa, just outside Colombo. Therefore, you can easily travel there from within Colombo and from other areas. The premises itself has its own spacious car park (so using your own vehicle if perfectly viable), while also being just 5 minutes away from Makumbura Multimodal Center which offers both bus and train services with access to highways.'
    },
    {
      title: 'Is Sri Lanka good for Digital Nomads?',
      description: 'Yes. Despite not yet as famous as Bali and Thailand among Digital Nomads, it is a great place to spend your workcation. With some famed beaches, historical monuments and serene spaces, it gives you space to focus and do your work surrounded by quiet nature. Sri Lanka is also budget-friendly with lots of sights that won’t break your bank. If you’re a Digital Nomad contact us and we shall help you find accommodation within short distance of us for easy working space.'
    },
    {
      title: 'What about Food?',
      description: 'Currently we only offer complimentary tea and coffee (on self-service) in terms of food. There’s no separate lunch area at the moment. However, there are many budget-friendly eateries and restaurants in Kottawa town and at Makumbura Multimodal Center just 5 minutes away.'
    },
    {
      title: 'My company wants a Remote Working /Hybrid Working Space for our employees. Is this possible?',
      description: 'We are happy to host small companies depending on their size. If your employees are working on hybrid basis and want to use Coworking Cube as their office space, you can also opt for a cost-effective hot-desking method within a private workspace using a work schedule. Contact us directly for Bespoke Office Solutions such as this which will fit your needs perfectly.'
    },
    {
      title: 'What Internet Speed do you offer? And How Much Data do we get?',
      description: 'We provide high-speed SLT Fibre 5G router connections for all users of Coworking Cube, with an average data speed of 200Mbps or higher. The Private Workspace offers 5GB of data for a full day of booking, with 50GB data for the 10-day pass package and a generous 150GB for the 1-month pass. Other spaces offer 2GB data per day as part of the package. You can request additional data charged per GB if your data runs out.'
    },
    {
      title: 'Do you offer any Discounts?',
      description: 'The package passes offer a discounted rate, especially for long-term packages. We can also offer companies and teams additional discounts for long-term bespoke office solutions. This will be dependent on the solution they discuss. Contact us directly for more information.'
    }
  ]
