import Image from "next/image";
import { BsGlobe } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { SlSocialTwitter } from "react-icons/sl";

export default function FeaturedSpeakers() {
  return (
    <div>
      <div
        id="speakers"
        className="text-center lg:w-[50%] mx-auto space-y-5 mt-20 lg:mt-40 px-5 lg:px-0"
      >
        <h5 className="text-cyan-400 font-semibold">FEATURED SPEAKERS</h5>
        <h4 className="text-white text-center text-5xl font-semibold">
          Learn from the Best
        </h4>

        <p className="text-white/50 text-lg mb-5">
          Industry leaders and faith innovators sharing insights that bridge
          technology and ministry.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 px-4">
        <div className="group overflow-hidden">
          <div className="h-100 w-full rounded-xl overflow-hidden relative">
            <Image
              src="/empty-profile.jpg"
              alt=""
              height={400}
              width={300}
              className="object-cover size-full duration-200 ease-in group-hover:scale-[102%]"
            />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-100 flex items-center gap-4">
              <button className="size-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center ">
                <SlSocialTwitter color="white" size={"1.5rem"} />
              </button>

              <button className="size-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center ">
                <FiLinkedin color="white" size={"1.5rem"} />
              </button>

              <button className="size-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center ">
                <FiLinkedin color="white" size={"1.5rem"} />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-white text-lg">Marcus Johnson</h4>
            <p className="text-sm text-white/50">Fullstack Developer</p>
            <p className="text-sm text-cyan-400">CCI</p>
          </div>
        </div>
        <div className="group overflow-hidden">
          <div className="h-100 w-full rounded-xl overflow-hidden relative">
            <Image
              src="/empty-profile.jpg"
              alt=""
              height={400}
              width={300}
              className="object-cover size-full duration-200 ease-in group-hover:scale-[102%]"
            />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-100 flex items-center gap-4">
              <button className="size-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center ">
                <SlSocialTwitter color="white" size={"1.5rem"} />
              </button>

              <button className="size-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center ">
                <FiLinkedin color="white" size={"1.5rem"} />
              </button>

              <button className="size-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center ">
                <BsGlobe color="white" size={"1.5rem"} />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-white text-lg">Taiwo Akinsanya</h4>
            <p className="text-sm text-white/50">---</p>
            <p className="text-sm text-cyan-400">Dynalimbs</p>
          </div>
        </div>
        <div className="group overflow-hidden">
          <div className="h-100 w-full rounded-xl overflow-hidden relative">
            <Image
              src="/empty-profile.jpg"
              alt=""
              height={400}
              width={300}
              className="object-cover size-full duration-200 ease-in group-hover:scale-[102%]"
            />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-100 flex items-center gap-4">
              <button className="size-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center ">
                <SlSocialTwitter color="white" size={"1.5rem"} />
              </button>

              <button className="size-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center ">
                <FiLinkedin color="white" size={"1.5rem"} />
              </button>

              <button className="size-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center ">
                <BsGlobe color="white" size={"1.5rem"} />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-white text-lg">Pastor Rotimi Bolaji</h4>
            <p className="text-sm text-white/50">---</p>
            <p className="text-sm text-cyan-400">---</p>
          </div>
        </div>
        <div className="group overflow-hidden">
          <div className="h-100 w-full rounded-xl overflow-hidden relative">
            <Image
              src="/empty-profile.jpg"
              alt=""
              height={400}
              width={300}
              className="object-cover size-full duration-200 ease-in group-hover:scale-[102%]"
            />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-100 flex items-center gap-4">
              <button className="size-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center ">
                <SlSocialTwitter color="white" size={"1.5rem"} />
              </button>

              <button className="size-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center ">
                <FiLinkedin color="white" size={"1.5rem"} />
              </button>

              <button className="size-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 flex items-center justify-center ">
                <BsGlobe color="white" size={"1.5rem"} />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-white text-lg">Mr. Paul Akolade</h4>
            <p className="text-sm text-white/50">---</p>
            <p className="text-sm text-cyan-400">Vant</p>
          </div>
        </div>
      </div>
    </div>
  );
}
