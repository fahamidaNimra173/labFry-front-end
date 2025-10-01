"use client";

import { useState } from "react";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "Is the app free to use?",
    answer:
      "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.",
  },
  {
    id: 2,
    question: "Can I assign multiple employees to one job?",
    answer:
      "Yes! You can assign multiple employees to a single job and track progress easily from the dashboard.",
  },
  {
    id: 3,
    question: "Does it work on both mobile and desktop?",
    answer:
      "Yes! Our platform is fully responsive and works on both mobile and desktop devices.",
  },
  {
    id: 4,
    question: "How secure is my data?",
    answer:
      "We use enterprise-grade encryption and security protocols to keep your data safe and private.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="my-[140px] px-6 md:px-20">
      <h2 className="text-5xl font-bold text-gray-800 text-center mb-4">
        Your Questions, Answered
      </h2>
      <p className="text-gray-600 text-center mb-14 text-sm font-normal mt-1.5">
        We’ve gathered the answers you need, all in one place for your convenience.
      </p>

      <div className="space-y-4 max-w-[996px] mx-auto">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="border border-red-500 rounded-[22px] p-6 cursor-pointer transition-all hover:shadow-md"
            onClick={() => toggleFaq(faq.id)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-gray-800 font-bold text-lg">{faq.question}</h3>
              <span className="text-gray-600 text-xl">
                {openId === faq.id ? "-" : "+"}
              </span>
            </div>

            {openId === faq.id && (
              <p className="text-gray-600 mt-4 w-[868px] mx-auto text-left text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
