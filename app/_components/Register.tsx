"use client";

import { capitalizeFirstLetter } from "@/utils/helpers";
import { registerUser } from "@/utils/registration";
import { useMutation } from "@tanstack/react-query";
import { SetStateAction, useState } from "react";
import toast from "react-hot-toast";
import { BsLightningCharge } from "react-icons/bs";
import { GiJigsawPiece } from "react-icons/gi";
import { HiOutlineLightningBolt } from "react-icons/hi";

const stacks = [
  "JS(React/NextJS/Vue/)",
  "JS(Node.js/Express/NestJS)",
  "Python(FastAPI/DJango/Flask)",
  "Mobile(Flutter/React-Native)",
  "Fullstack(Multiple)",
  "Other",
];

const occupations = [
  "student",
  "software-developer",
  "designer",
  "product-manager",
  "pastor",
  "entrepreneur",
  "educator",
  "other",
];

const experienceLevel = [
  "Less than 1 year",
  "1-2 years",
  "3-5 years",
  "5 years+",
];

// const professionalLevel = ["Beginner", "Intermediate", "Professional"];

export default function Register() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [occupation, setOccupation] = useState<string>("");
  const [churchName, setChurchName] = useState<string>("");
  const [branchName, setBranchName] = useState<string>("");
  const [unit, setUnit] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  // const [experienceLevel, setExperienceLevel] = useState<string>("");

  const [isApplying, setIsApplying] = useState<boolean | null>(null);
  const [primarySKill, setPrimarySKill] = useState<string>("");
  const [stack, setStack] = useState<string>("");
  const [yearsOfExperience, setYearsOfExperience] = useState<string>("");
  const [webUrl, setWebUrl] = useState<string>("");
  const [participationIntent, setParticipationIntent] = useState<string>("");

  const [step, setStep] = useState<number>(1);

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      registerUser({
        fullName,
        email,
        phoneNumber,
        occupation,
        churchName,
        branchName,
        churchUnit: unit,
        location,
        // experienceLevel,
        skill: primarySKill,
        stack,
        yearsOfExperience,
        webUrl,
        participationIntent,
      }),
    onSuccess: () => {
      toast.success("Registration complete. Please check your email");
      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setOccupation("");
      // setExperienceLevel("");
      setIsApplying(null);
      setPrimarySKill("");
      setStack("");
      setYearsOfExperience("");
      setWebUrl("");
      setParticipationIntent("");
      setStep(1);
    },
    onError: (err) => toast.error(err.message),
  });

  const disableNext =
    !fullName ||
    !email ||
    !occupation ||
    !churchName ||
    !branchName ||
    !unit ||
    !location; //|| !experienceLevel;
  const disableSubmit =
    step === 2 &&
    (!primarySKill || !stack || !yearsOfExperience || !participationIntent);

  return (
    <div  className="space-y-4 px-5 lg:px-0" id="register">
      <div className="text-center lg:w-[50%] mx-auto space-y-5 mt-20 lg:mt-40">
        <h5 className="text-cyan-400 font-semibold">Join Us</h5>
        <h4 className="text-white text-center text-5xl font-semibold">
          Secure Your Spot
        </h4>
        <p className="text-white/50 text-lg">
          Choose your path. Both experiences are designed to be transformative.
        </p>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        <button className="group flex w-full md:w-auto items-center gap-3 px-6 py-4 rounded-2xl bg-white/4 border border-white/1 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300">
          <span className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20">
            <GiJigsawPiece size="1.2rem" color="cyan" />
          </span>

          <span>
            <p className="text-white font-semibold">Register for Tech Fest</p>
            <p className="text-sm text-white/40">2-day general attendance</p>
          </span>
        </button>

        <button className="group flex w-full md:w-auto items-center gap-3 px-6 py-4 rounded-2xl bg-white/4 border border-white/1 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-300">
          <span className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20">
            <BsLightningCharge size="1.2rem" color="violet" />
          </span>

          <span>
            <p className="text-white font-semibold">Register for Hackathon</p>
            <p className="text-sm text-white/40">
              Includes general access + Hackathon
            </p>
          </span>
        </button>
      </div>

      <form className="relative rounded-3xl max-w-4xl mx-auto bg-[#0d1526]/90 border border-white/8 backdrop-blur-xl p-8 md:p-10 mb-40">
        <div className="flex items-center gap-1 justify-center mb-8">
          <div className="flex flex-col w-max items-center">
            <div className="p-3 rounded-full border-2 border-violet-500 size-10 text-white flex items-center justify-center">
              <p>1</p>
            </div>
            <p className="text-violet-400">About you</p>
          </div>

          {isApplying !== false && (
            <>
              <div
                className={`h-[0.5px] w-18 ${step === 2 ? "bg-violet-500" : "bg-white/20"} mb-5`}
              ></div>

              <div className="flex flex-col w-max items-center">
                <div
                  className={`p-3 rounded-full border-2 ${step === 2 ? "border-violet-500 text-white" : "border-white/10 text-white/30"} size-10  flex items-center justify-center`}
                >
                  <p>2</p>
                </div>
                <p
                  className={`${step === 2 ? "text-violet-400" : "text-white/30"}`}
                >
                  Hackathon
                </p>
              </div>
            </>
          )}
        </div>
        {step === 1 && (
          <>
            <h3 className="text-white text-2xl font-semibold">
              Tell us about yourself
            </h3>
            <p className="text-white/40">
              Basic info to get you registered for Tech Fest 2026.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <label className="text-sm font-bold text-white/70 inline-block mb-2">
                  Full Name
                </label>
                <input
                  required={true}
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-white/4 border text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300 border-white/8 hover:border-white/20"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-white/70 inline-block mb-2">
                  Email Address
                </label>
                <input
                  required={true}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-white/4 border text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300 border-white/8 hover:border-white/20"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-white/70 inline-block mb-2">
                  Phone Number
                </label>
                <input
                  required={true}
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-white/4 border text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300 border-white/8 hover:border-white/20"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-white/70 inline-block mb-2">
                  Occupation / Role
                </label>
                <select
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/4 border text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300 border-white/8 hover:border-white/20"
                >
                  <option disabled={true}>Select your role</option>
                  {occupations.map((cur) => (
                    <option key={cur} value={cur} className="bg-[#0a0f1c]">
                      {capitalizeFirstLetter(cur.replace("-", " "))}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-bold text-white/70 inline-block mb-2">
                  Church
                </label>
                <input
                  required={true}
                  value={churchName}
                  onChange={(e) => {
                    setChurchName(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-white/4 border text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300 border-white/8 hover:border-white/20"
                />
              </div>
              <div>
                <label className="text-sm font-bold text-white/70 inline-block mb-2">
                  Branch
                </label>
                <input
                  required={true}
                  value={branchName}
                  onChange={(e) => {
                    setBranchName(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-white/4 border text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300 border-white/8 hover:border-white/20"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-white/70 inline-block mb-2">
                  Church Unit
                </label>
                <input
                  required={true}
                  value={unit}
                  onChange={(e) => {
                    setUnit(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-white/4 border text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300 border-white/8 hover:border-white/20"
                />
              </div>
              {/* <div>
                <label className="text-sm font-bold text-white/70 inline-block mb-2">
                  Church Unit
                </label>
                <input
                  required={true}
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-white/4 border text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300 border-white/8 hover:border-white/20"
                />
              </div> */}

              <div>
                <label className="text-sm font-bold text-white/70 inline-block mb-2">
                  Location
                </label>
                <input
                  required={true}
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-white/4 border text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300 border-white/8 hover:border-white/20"
                />
              </div>
            </div>

            {/* <div className="mt-8">
              <label className="text-sm font-bold text-white/70 inline-block mb-2">
                Experience Level
              </label>

              <div className="flex flex-wrap gap-3">
                {professionalLevel.map((cur) => (
                  <button
                    key={cur}
                    type="button"
                    onClick={() => setExperienceLevel(cur.toLowerCase())}
                    className={`px-4 py-3 ${cur.toLowerCase() === experienceLevel && "bg-linear-to-r from-blue-500/30 to-violet-500/30 border-violet-500/50 text-white!"} transition-all duration-300 rounded-full text-sm font-medium  border bg-white/3 border-white/8 text-white/70 hover:border-white/20 hover:text-white/60`}
                  >
                    {cur}
                  </button>
                ))}
              </div>
            </div> */}

            <div className="text-white md:flex gap-3 mt-4 relative p-5 rounded-2xl border border-violet-500/20 bg-linear-to-br from-violet-500/5 to-pink-500/5 backdrop-blur-sm">
              <div>
                <div
                  className={`bg-pink-500 rounded-xl text-white flex items-center justify-center mb-3 w-max p-2`}
                >
                  <HiOutlineLightningBolt className="size-6" />
                </div>
              </div>

              <div>
                <h3>Join the Mini-Hackathon</h3>
                <p className="text-white/70">
                  A premium 24-hour challenge for builders, designers, and
                  problem-solvers. Limited spots available.
                </p>

                <div className="space-x-5 mt-4 flex flex-col md:flex-row space-y-4">
                  <span className="w-full md:w-auto">
                    <button
                      className={`w-full md:w-auto ${isApplying && "bg-linear-to-r from-violet-500/30 to-pink-500/30 border-violet-500/50 text-white!"} px-4 py-4 rounded-xl text-sm font-medium transition-all duration-300 border bg-white/3 border-white/8 text-white/70 hover:border-white/20 hover:text-white/60`}
                      onClick={() => setIsApplying(true)}
                      type="button"
                    >
                      Yes, apply me!
                    </button>
                  </span>

                  <span className="w-full md:w-auto">
                    <button
                      className={`w-full md:w-auto ${isApplying === false && "bg-linear-to-r from-violet-500/30 to-pink-500/30 border-violet-500/50 text-white!"} px-4 py-4 rounded-xl text-sm font-medium transition-all duration-300 border bg-white/3 border-white/8 text-white/70 hover:border-white/20 hover:text-white/60`}
                      onClick={() => setIsApplying(false)}
                      type="button"
                    >
                      Not this time
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </>
        )}

        {step === 2 && isApplying && (
          <HackathonForm
            stack={stack}
            setStack={setStack}
            participationIntent={participationIntent}
            setParticipationIntent={setParticipationIntent}
            yearsOfExperience={yearsOfExperience}
            setYearsOfExperience={setYearsOfExperience}
            primarySkill={primarySKill}
            setPrimarySkill={setPrimarySKill}
            setWebUrl={setWebUrl}
            webUrl={webUrl}
          />
        )}

        <div className="flex items-center justify-between mt-8">
          {step === 1 ? (
            <div></div>
          ) : (
            <button
              type="button"
              className="px-8 py-3 rounded-full font-medium transition-all duration-300 border bg-white/3 border-white/8 text-white/70 hover:border-white/20 hover:text-white/60"
              disabled={isPending}
              onClick={() => setStep(1)}
            >
              Previous
            </button>
          )}
          <button
            type="button"
            disabled={isPending || disableNext || disableSubmit}
            className="px-8 py-3 rounded-full font-medium transition-all duration-300 border bg-white/3 border-white/8 text-white/70 hover:border-white/20 hover:text-white/60"
            onClick={() => {
              if (step === 1 && isApplying) setStep(2);
              else mutate();
            }}
          >
            {step === 2 && isApplying
              ? "Submit"
              : step === 1 && isApplying
                ? "Continue"
                : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

const skills = [
  "Student",
  "Frontend",
  "Backend",
  "Mobile",
  "Fullstack",
  "Design",
];

function HackathonForm({
  primarySkill,
  setPrimarySkill,
  stack,
  setStack,
  yearsOfExperience,
  setYearsOfExperience,
  webUrl,
  setWebUrl,
  participationIntent,
  setParticipationIntent,
}: {
  primarySkill: string;
  setPrimarySkill: React.Dispatch<SetStateAction<string>>;
  stack: string;
  setStack: React.Dispatch<SetStateAction<string>>;
  yearsOfExperience: string;
  setYearsOfExperience: React.Dispatch<SetStateAction<string>>;
  webUrl: string;
  setWebUrl: React.Dispatch<SetStateAction<string>>;
  participationIntent: string;
  setParticipationIntent: React.Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="space-y-8">
      <div className="lg:flex gap-4">
        <div
          className={`bg-pink-500 rounded-xl text-white flex items-center justify-center mb-3 w-max p-2`}
        >
          <HiOutlineLightningBolt className="size-10" />
        </div>
        <div>
          <h3 className="text-white text-2xl font-semibold">
            Hackathon Application
          </h3>
          <p className="text-white/40">This takes about 2 minutes.</p>
        </div>
      </div>

      <div>
        <label className="text-sm font-bold text-white/70 inline-block mb-2">
          Primary Skill
        </label>

        <div className="flex flex-wrap gap-3">
          {skills.map((cur) => (
            <button
              key={cur}
              type="button"
              onClick={() => setPrimarySkill(cur.toLowerCase())}
              className={`${cur.toLowerCase() === primarySkill && "bg-linear-to-r from-blue-500/30 to-violet-500/30 border-violet-500/50 text-white!"} px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 border bg-white/3 border-white/8 text-white/70 hover:border-white/20 hover:text-white/60`}
            >
              {cur}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:grid space-y-8 lg:space-y-0 grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <label className="text-sm font-bold text-white/70 inline-block mb-2">
            Main Tech Stack
          </label>

          <select
            value={stack}
            onChange={(e) => setStack(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/4 border text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300 border-white/8 hover:border-white/20"
          >
            <option disabled>Select your stack</option>
            {stacks.map((cur) => (
              <option key={cur} className="bg-[#0a0f1c]">
                {cur}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-bold text-white/70 inline-block mb-2">
            Years of Experience
          </label>

          <select
            value={yearsOfExperience}
            onChange={(e) => setYearsOfExperience(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/4 border text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300 border-white/8 hover:border-white/20"
          >
            <option disabled>Select Range</option>
            {experienceLevel.map((cur) => (
              <option className="bg-[#0a0f1c]" key={cur}>
                {cur}
              </option>
            ))}
          </select>
        </div>

        <div className="lg:col-span-2">
          <label className="text-sm font-bold text-white/70 inline-block mb-2">
            Github/Portfolio
          </label>

          <input
            value={webUrl}
            onChange={(e) => setWebUrl(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/4 border text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300 border-white/8 hover:border-white/20"
          />
        </div>

        <div className="col-span-2">
          <label className="text-sm font-bold text-white/70 inline-block mb-2">
            Why do you want to participate?
          </label>

          <textarea
            value={participationIntent}
            onChange={(e) => setParticipationIntent(e.target.value)}
            placeholder="share your motivation"
            className="w-full resize-none h-40 px-4 py-3 rounded-xl bg-white/4 border text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300 border-white/8 hover:border-white/20"
          />
        </div>
      </div>
    </div>
  );
}
