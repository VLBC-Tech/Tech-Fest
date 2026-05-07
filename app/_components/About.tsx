import { BsStars } from "react-icons/bs";
import { FaCode, FaRegHeart } from "react-icons/fa";
import { HiOutlineClock, HiOutlineLightningBolt } from "react-icons/hi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LiaFighterJetSolid, LiaMicrophoneAltSolid } from "react-icons/lia";
import { LuBrain, LuUsersRound } from "react-icons/lu";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { PiGlobeSimple } from "react-icons/pi";
import { TbUsers } from "react-icons/tb";
import { TiSpanner } from "react-icons/ti";

const cards = [
  {
    title: "Keynotes & Fireside Chats",
    iconColor: "bg-blue-600",
    icon: <LiaMicrophoneAltSolid className="size-6" />,
    description:
      " Hear from church and tech leaders on the future of faith-driven innovation and ministry technology.",
  },
  {
    title: "Panels & Conversations",
    iconColor: "bg-purple-600",
    icon: <TiSpanner className="size-6" />,
    description:
      "Dive into critical topics: AI in the church, tech adoption, mental health for tech savvy, and monetising skills without losing calling.",
  },
  {
    title: "Mini-Hackathon",
    iconColor: "bg-cyan-600",
    icon: <FaCode className="size-6" />,
    description:
      "Build real, church-focused solutions to real problems. Prototype tools that serve leaders, and the church communities.",
  },
  {
    title: "Networking & Collaboration",
    iconColor: "bg-pink-600",
    icon: <TbUsers className="size-6" />,
    description:
      "Connect with faith-driven developers, creatives, designers, and technologists from within and beyond.",
  },
];

const about = [
  {
    title: "24 Hours",
    iconColor: "bg-gradient-to-br from-violet-500/20 to-pink-500/20",
    icon: <HiOutlineClock className="size-6" />,
    description: "of intense building",
  },
  {
    title: "Team-Based",
    iconColor: "bg-gradient-to-br from-violet-500/20 to-pink-500/20",
    icon: <LuUsersRound className="size-6" />,
    description: "3-5 members per team",
  },
  {
    title: "Prizes",
    iconColor: "bg-gradient-to-br from-violet-500/20 to-pink-500/20",
    icon: <HiOutlineTrophy className="size-6" />,
    description: "in prizes",
  },
  {
    title: "Real Impact",
    iconColor: "bg-gradient-to-br from-violet-500/20 to-pink-500/20",
    icon: <BsStars className="size-6" />,
    description: "Solutions that serve the local church",
  },
];

const explore = [
  {
    title: "AI & Machine Learning",
    iconColor: "bg-blue-400",
    icon: <PiGlobeSimple className="size-6" />,
    description: "Ethical AI for ministry",
    altDescription:
      "Explore how artificial intelligence can enhance pastoral care, automate administrative tasks, and create personalized spiritual growth experiences while maintaining ethical boundaries.",
    hoverBg: "bg-blue-500/20",
    borderB: "bg-blue-500",
  },
  {
    title: "Media, Sound & Digital Excellence ",
    iconColor: "bg-violet-400",
    icon: <LuBrain className="size-6" />,
    description: "Connected communities",
    altDescription:
      "Build accessible, engaging digital platforms that connect congregations, facilitate small groups, and extend your ministry reach to those who cannot attend in person.",
    hoverBg: "bg-violet-500/20",
    borderB: "bg-violet-500",
  },
  {
    title: "Media, Sound & Digital Excellence ",
    iconColor: "bg-pink-400",
    icon: <IoColorPaletteOutline className="size-6" />,
    description: "Visual storytelling",
    altDescription:
      "Master the art of digital media production, from worship graphics and social content to immersive experiences that communicate timeless truths in contemporary ways.",
    hoverBg: "bg-pink-500/20",
    borderB: "bg-pink-500",
  },
  {
    title: "The Church of the Future",
    iconColor: "bg-emerald-400",
    icon: <LiaFighterJetSolid className="size-6" />, //<LuShield className="size-6" />,
    description: "What we hope to see", //"Protecting the flock",
    altDescription:
      "Learn essential cybersecurity practices to protect sensitive member data, secure online giving platforms, and maintain trust in an increasingly digital ministry environment.",
    hoverBg: "bg-emerald-500/20",
    borderB: "bg-emerald-500",
  },
  {
    title: "Tech Entrepreneurship & Kingdom Business",
    iconColor: "bg-orange-400",
    icon: <FaRegHeart className="size-6" />,
    description: "Community impact",
    altDescription: "Dive into Techpreneurship",
    hoverBg: "bg-orange-500/20",
    borderB: "bg-orange-500",
  },
  {
    title: "Mental Health & Sustainable Service",
    iconColor: "bg-yellow-400",
    icon: <MdOutlineHealthAndSafety className="size-6" />,
    description: "Community impact",
    altDescription: "Learn more about you mental health",
    hoverBg: "bg-yellow-500/20",
    borderB: "bg-yellow-500",
  },
];

export default function About() {
  return (
    <div>
      <div
        id="about"
        className="text-center lg:w-[70%] mx-auto space-y-5 mt-6 lg:mt-40  px-5 lg:px-0"
      >
        <h5 className="text-cyan-400 font-semibold">ABOUT THE EVENT</h5>
        <h4 className="text-white text-center text-6xl font-semibold">
          Innovation with Purpose
        </h4>

        <p className="text-white/50 text-lg">
          Tech Fest, themed Kingdom Stack: Designing Systems that Serve the
          King, is a faith-based technology gathering where Media, Sound, Tech
          teams and Christian Creatives from churches across the city come
          together with one shared conviction — the Church must lead, not lag.
          Over two days, we explore how technology can solve real church
          challenges, shape the Church of the future, and firmly establish the
          body of Christ as a centre of innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mt-20">
        {cards.map((cur, i) => (
          <Card
            title={cur.title}
            description={cur.description}
            key={cur.title + i}
            iconColor={cur.iconColor}
            icon={cur.icon}
          />
        ))}
      </div>
      <div
        id="hackathon"
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative  mt-20 lg:mt-40"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-200 h-200 rounded-full bg-violet-500/10 blur-[120px]"></div>
        <div className="px-6 space-y-4">
          <div>
            <div className="flex items-center gap-2">
              <div
                className={`bg-pink-500 rounded-xl text-white flex items-center justify-center mb-3 w-max p-2`}
              >
                <HiOutlineLightningBolt className="size-6" />
              </div>
              <p className="text-violet-400 font-medium">MINI-HACKATHON</p>
            </div>
          </div>
          <h6 className="text-2xl md:text-4xl font-bold text-white">
            Leveraging Technology <br />
            <span className="text-violet-400">
              to Strengthen Church Impact
            </span>{" "}
          </h6>
          <p className="text-white/50 text-lg">
            Description: An intensive 24-hour challenge where teams design and
            prototype technology-driven solutions to real operational,
            engagement, or outreach challenges within the church context.
          </p>
          <ul className="text-white/70 space-y-4 list-disc marker:text-violet-500">
            <li>Solve real problems faced by local nonprofits</li>
            <li>Mentor support from industry professionals</li>
            <li>Present to judges and community leaders</li>
          </ul>
          <button className="px-8 py-3 font-medium transition-all ease text-white rounded-full bg-violet-500 hover:bg-violet-600">
            Join the Hackathon
          </button>{" "}
        </div>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 px-6 mt-20">
            {about.map((cur) => (
              <Card
                title={cur.title}
                description={cur.description}
                key={cur.title}
                iconColor={cur.iconColor}
                icon={cur.icon}
                size="md"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 lg:mt-40">
        <div className="text-center space-y-4 px-5 lg:px-0">
          <h5 className="text-cyan-400 font-semibold">FOCUS AREAS</h5>
          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Explore What Drives Us
          </h2>

          <ul className="text-white/70 space-y-4 list-disc marker:text-violet-500 mb-5">
            <li>
              Volunteer & Workforce Coordination — Streamlining scheduling, task
              assignments, and burnout tracking for church volunteers
            </li>
            <li>
              Mentorship & Career Development — Structured mentorship matching,
              opportunity boards, and skill development pathways for young
              members
            </li>
            <li>
              Event Management & Communication — Unified systems for event
              registration, check-in, announcements, and engagement tracking
            </li>
            <li>
              Community Outreach & Social Impact Tracking — Tools to identify
              community needs, coordinate assistance, and measure long-term
              impact
            </li>
          </ul>
          {/* <p className="text-white/70 text-lg mb-5">
            Dive deep into the technologies shaping the future of faith-based
            innovation.
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-6">
          {explore.map((cur) => (
            <div className="group" key={cur.title}>
              <Card2
                title={cur.title}
                description={cur.description}
                iconColor={cur.iconColor}
                icon={cur.icon}
                size="md"
                hoverBg={cur.hoverBg}
                borderB={cur.borderB}
                altDescription={cur.altDescription}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({
  icon,
  title,
  iconColor,
  description,
  size,
}: {
  icon: React.ReactNode;
  title: string;
  iconColor: string;
  description: string;
  size?: "md" | "lg";
}) {
  return (
    <div className="border border-white/8 hover:border-white/15 bg-white/3 hover:bg-white/6 rounded-xl p-5 transition-all ease-in">
      <div
        className={`size-14 ${iconColor} rounded-xl text-white flex items-center justify-center ${size === "lg" ? "mb-3 " : "mb-1"}`}
      >
        {icon}
      </div>

      <h3
        className={`text-xl font-semibold text-white ${size === "lg" ? "mb-3 " : "mb-1"} min-h-14`}
      >
        {title}
      </h3>
      <p className="text-white/50">{description}</p>
    </div>
  );
}

function Card2({
  icon,
  title,
  iconColor,
  description,
  size,
  hoverBg,
  borderB,
  altDescription,
}: {
  icon: React.ReactNode;
  title: string;
  iconColor: string;
  description: string;
  size?: "md" | "lg";
  hoverBg?: string;
  borderB?: string;
  altDescription?: string;
}) {
  return (
    <div className="relative overflow-hidden border border-white/8 hover:border-white/15 bg-white/3 hover:bg-white/6 rounded-xl p-8 transition-all ease-in">
      <div
        className={`absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 ${hoverBg}`}
      ></div>
      <div
        className={`group-hover:scale-110 transition-all ease-in size-14 ${iconColor} rounded-xl text-white flex items-center justify-center ${size === "lg" ? "mb-3 " : "mb-1"}`}
      >
        {icon}
      </div>

      <h3
        className={`text-xl font-semibold text-white ${size === "lg" ? "mb-3 " : "mb-1"} mt-3 min-h-14`}
      >
        {title}
      </h3>
      <p className="text-white/50 group-hover:h-0 transition-all ease-in group-hover:opacity-0">
        {description}
      </p>
      <p className="text-white/50 opacity-0 translate-y-10 transition-all ease-in group-hover:opacity-100 group-hover:translate-y-0 h-0 group-hover:h-auto">
        {altDescription?.slice(0, 40)}
      </p>
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${borderB}`}
      ></div>
    </div>
  );
}
