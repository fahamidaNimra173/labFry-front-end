"use client";

import { BiSolidQuoteLeft } from "react-icons/bi";
import Slider from "react-slick";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "Farzana H.",
        role: "Rafiq M., Homeowner",
        comment:
            "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.",
        image: "/Ellipse 452 (1).png",
    },
    {
        id: 2,
        name: "Farzana H.",
        role: "Owner, CleanPro Services",
        comment:
            "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
        image: "/Ellipse 452 (2).png",
    },
    {
        id: 3,
        name: "Ahmed R.",
        role: "Technician",
        comment:
            "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
        image: "/Ellipse 452.png",
    },
    {
        id: 4,
        name: "Sophia Martinez",
        role: "Product Manager",
        comment:
            "This platform has simplified my work process tremendously. Highly recommended!",
        image: "/Ellipse 452 (1).png"
    },
    {
        id: 5,
        name: "James Carter",
        role: "Software Engineer",
        comment:
            "Great user experience and reliable service. I’m really impressed with the support team.",
        image: "/Ellipse 452 (2).png",
    },
    {
        id: 6,
        name: "Olivia Johnson",
        role: "Designer",
        comment:
            "The intuitive design and functionality have made my tasks much easier and enjoyable.",
        image: "/Ellipse 452.png",
    },
];

export default function TestimonialSection() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // tablet
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640, // mobile
                settings: { slidesToShow: 1 },
            },
        ],
   
    };

    return (
        <section className="mt-[150px] mb-[60px] px-[120px]">
            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="text-5xl mb-1.5 font-bold text-gray-800">
                    See Why People Love Us
                </h2>
                <p className="text-gray-600 mt-2 max-w-[455px] mx-auto">
                    Join thousands of satisfied users who choose us to make life easier
                    and better.
                </p>
            </div>

            {/* Slider */}
            <Slider {...settings}>
                {testimonials.map((t) => (
                    <div key={t.id} className="px-[15px] py-20">
                        {/* Card wrapper must be relative for absolute child */}
                        <div className="relative bg-white rounded-[22px] w-[387px] h-[208px] p-7 shadow-xl transition overflow-hidden">

                            {/* Quote Background Icon */}
                            <BiSolidQuoteLeft className="absolute left-2 mt-2 top-1/2 -translate-y-1/2 text-[100px] text-[#f7f7f7] opacity-60 pointer-events-none" />

                            {/* User Info */}
                            <div className="flex items-center gap-[14px] mb-[26px] relative z-[1]">
                                <Image
                                    src={t.image}
                                    alt={t.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full object-cover"
                                />
                                <div className="flex flex-col">
                                    <span className="font-bold text-[16px] text-gray-800">{t.name}</span>
                                    <span className="text-sm font-normal text-gray-500">{t.role}</span>
                                </div>
                            </div>

                            {/* Comment */}
                            <p className="text-gray-600 leading-6 text-sm relative z-[1] w-[331px]">
                                {t.comment}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>

        </section>
    );
}
