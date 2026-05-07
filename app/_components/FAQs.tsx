"use client";

import { SetStateAction, useState } from "react";
import { GoDash } from "react-icons/go";
import { HiOutlinePlus } from "react-icons/hi";

interface FAQ {
  description: string;
  id: number;
  title: string;
}

const faqs = [
  {
    id: 1,
    title: "What is VLBC Tech Fest about?",
    description:
      "VLBC Tech Fest is a faith-driven Technology conference designed to equip, inspire, and connect creatives, developers, innovators, and digital leaders to build systems and solutions that serve God’s kingdom and society.",
  },
  {
    id: 2,
    title: "Who can attend the Tech Fest?",
    description:
      "The event is open to everyone, including Tech enthusiasts, Students, Professionals, Entrepreneurs, creatives, Church workers, and anyone interested in Technology and Innovation.",
  },
  {
    id: 3,
    title: "Where and when will the event be held?",
    description:
      "The event details VLBC, Opp. OGTV, Abeokuta, with Remote Centers in Lagos and Uyo. Friday 17 and Saturday 18, July, 2026.",
  },
  {
    id: 4,
    title: "Is there a registration fee?",
    description: "Registration is free.",
  },
  {
    id: 5,
    title: "How do I register for the event?",
    description:
      "You can register directly through the official VLBC Tech Fest website by filling out the registration form once it is live.",
  },
  {
    id: 6,
    title: "Will the event be virtual or physical?",
    description:
      "The Tech Fest includes both physical and virtual participation options. Specific session formats will be clearly indicated on the event schedule.",
  },
  {
    id: 7,
    title: "What kind of sessions should I expect?",
    description:
      "Expect keynote sessions, panel discussions, workshops, product showcases, networking sessions, and hands-on tech demonstrations.",
  },
  {
    id: 8,
    title: "Can I volunteer or participate as a team member?",
    description:
      "Yes. Volunteer opportunities are open for Media, Technical support, Coordination, Hospitality, and Logistics teams. Details will be shared on the website.",
  },
];

export default function FAQs() {
  const [openQus, setOpenQus] = useState<number | null>(null);

  return (
    <div id="faqs" className="text-white space-y-6">
      <div className="text-center lg:w-[50%] mx-auto space-y-5 mt-20 lg:mt-40">
        <h5 className="text-cyan-400 font-semibold">
          Frequently Asked Questions
        </h5>
        <h4 className="text-white text-center text-5xl font-semibold">
          You have any questions?
        </h4>
      </div>

      <ul className=" mx-auto w-[90%] sm:w-[60%]">
        {(faqs as FAQ[]).map((data) => (
          <Questions
            data={data}
            key={data.id}
            openQus={openQus}
            setOpenQus={setOpenQus}
          />
        ))}
      </ul>
    </div>
  );
}

function Questions({
  data,
  openQus,
  setOpenQus,
}: {
  data: FAQ;
  openQus: number | null;
  setOpenQus: React.Dispatch<SetStateAction<number | null>>;
}) {
  const { description, id, title } = data;

  return (
    <li
      className={`cursor-pointer border-white/20 border-y ${!openQus || id !== openQus ? "sm:h-12" : "sm:h-28"} py-6 transition-all ${!openQus || id !== openQus ? "h-18" : "h-38"} flex flex-col justify-center`}
      onClick={() => setOpenQus((s) => (s === id ? null : id))}
    >
      <div className="flex items-start justify-between sm:items-center">
        <p>{title}</p>
        <span>{openQus === id ? <GoDash /> : <HiOutlinePlus />}</span>
      </div>
      {openQus === id && (
        <p className=" mt-5 text-sm text-white/50">{description}</p>
      )}
    </li>
  );
}
