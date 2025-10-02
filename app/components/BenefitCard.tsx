import { ReactElement } from "react";
import { BiCalendar, BiCurrentLocation, BiShield } from "react-icons/bi";

import { GoGraph } from "react-icons/go";


type CardType = {
  id: number;
  icon: ReactElement;
  title: string;
  description: string;
};
const cardsData:CardType[] = [
    {
        id: 1,
        icon: <BiCalendar className="text-[#EE3638] text-3xl" />,
        title: "Easy Service Booking",
        description: "Connect with people and grow together.",
    },
    {
        id: 2,
        icon: <BiCurrentLocation className="text-[#EE3638] text-3xl" />,
        title: "Real-Time Tracking",
        description: "Monitor job progress, employee hours, and project timelines with live updates.",
    },
    {
        id: 3,
        icon: <GoGraph className="text-[#EE3638] text-3xl" />,
        title: "Performance Analytics",
        description: "Comprehensive reporting and insights to improve business operations and efficiency.",
    },
    {
        id: 4,
        icon: <BiShield className="text-[#EE3638] text-3xl" />,
        title: "Secure & Reliable",
        description: "Enterprise-grade security with 99.9% uptime guarantee and data protection.",
    },
];

export default function BenefitCards() {
    return (
        <div className="grid grid-cols-1 my-[130px] px-[120px] sm:grid-cols-2 md:grid-cols-4 gap-[72px]">
            {cardsData.map((card,index) => (
                <div key={card.id} className={`flex pl-9 flex-col items-start space-y-2 ${index !== 0 ? "border-l-1 border-[#F4F6F8]" : ""
                    }`}>
                    <div className=" p-2.5 bg-[#ee36381a] rounded-2xl">
                        {card.icon}
                    </div>
                    <h3 className="text-lg text-gray-700 font-bold mt-5">{card.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{card.description}</p>
                </div>
            ))}
        </div>
    );
}
