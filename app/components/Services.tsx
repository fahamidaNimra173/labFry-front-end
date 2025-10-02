"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type CardType = {
  id: number;
  image: string;
  badge: string;
  title: string;
  description: string;
  points: string[];
};

const cardsData:CardType[] = [
  {
    id: 1,
    image: "/image 2.png",
    badge: "Users",
    title: "Book Services, Monitor Progress, Get Updates",
    description: "From booking to completion, manage everything effortlessly with live progress and instant updates.",
    points: ["Book services in seconds", "STrack real-time job updates", "Schedule appointments at your convenience"],
  },
  {
    id: 2,
    image: "/image 3.png",
    badge: "Business Owners",
    title: "Manage Jobs, Monitor Results & Streamline Operatio",
    description: "Stay in control by organizing tasks, monitoring outcomes, and streamlining daily operations.",
    points: ["Assign jobs to the right team member", "Monitor performance in real time", "Manage clients and services seamlessly"],
  },
  {
    id: 3,
    image: "/image 4.png",
    badge: "Employees",
    title: "Manage Tasks, Monitor Time & Navigate with Ease",
    description: "From assigning tasks to reaching destinations, manage everything smoothly and efficiently.",
    points: ["Assign jobs to the right team member", "Monitor performance in real time", "Manage clients and services seamlessly"],
  },
];

export default function ServicesCards() {
  return (
    <section className="px-[120px] mt-[188px] mb-[150px]">
      {/* Section Title */}
      <div className=" mb-10">
        <h2 className="text-5xl mb-3 font-bold text-center text-gray-800">Designed for All</h2>
        <p className="text-sm text-gray-600 text-center mx-auto w-[551px] mt-2">Whether you are booking services, managing tasks, or running operations, we have designed the perfect experience for you.</p>
      </div>

      {/* Cards */}
      <div className="flex flex-col space-y-[100px]">
        {cardsData.map((card, index) => (
          <div
            key={card.id}
            className={`flex items-center gap-12 ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <Image
                src={card.image}
                alt={card.title}
                width={500}
                height={521}
                className="w-[682px] h-[521px] object-cover 
                  rounded-tl-[8px] rounded-br-[8px] rounded-tr-[70px] rounded-bl-[70px]"
              />
            </div>

            {/* Text Content */}
            <div className="">
              {/* Badge */}
              <div className="border-1 px-5 py-2 mb-6 inline-block rounded-[60px] border-[#EE3638] text-sm font-semibold text-[#EE3638]">
                {card.badge}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 w-[523px] mb-6">{card.description}</p>

              {/* Points with animation */}
              <div className="space-y-3">
                {card.points.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-[#EE3638] pl-6 py-2 text-gray-700"
                  >
                    {point}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
