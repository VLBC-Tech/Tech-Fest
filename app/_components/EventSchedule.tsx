"use client";

import { useState } from "react";

export default function EventSchedule() {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <div className="space-y-4">
      <div className="text-center lg:w-[50%] mx-auto space-y-5 mt-20 lg:mt-40">
        <h5 className="text-cyan-400 font-semibold">Event Schedule</h5>
        <h4 className="text-white text-center text-5xl font-semibold">
          Two Days of Innovation
        </h4>
      </div>

      <div className="lg:w-fit mx-auto mb-10 lg:mb-5 px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center just-center gap-2">
          <button
            className={`w-full lg:w-auto ${
              activeDay === 1
                ? "py-3 px-7 rounded-[30px] text-white bg-blue-500"
                : "py-3 px-7 rounded-[30px] text-white bg-white/5 hover:bg-white/10"
            }`}
            onClick={() => setActiveDay(1)}
          >
            Day 1 - July 19
          </button>
          <button
            className={`w-full lg:w-auto ${
              activeDay === 2
                ? "py-3 px-7 rounded-[30px] text-white bg-blue-500"
                : "py-3 px-7 rounded-[30px] text-white bg-white/5 hover:bg-white/10"
            }`}
            onClick={() => setActiveDay(2)}
          >
            Day 2 - June 21
          </button>
        </div>
      </div>

      {activeDay === 1 ? <EventSchedule1 /> : <EventSchedule2 />}
    </div>
  );
}

function EventSchedule2() {
  return (
    <div className="px-5">
      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow">
          <p className="text-sm text-white/40 font-medium">10:00 AM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow">
            <h4 className="text-white font-medium mb-1">
              Opening Prayer & Worship
            </h4>
          </div>
        </div>
      </div>
      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">10:10 AM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow space-y-2">
            <h4 className="text-white font-medium mb-1">
              Welcome + Vision Casting + Video
            </h4>

            <p className="text-white/50">Speaker: Dr. Sarah Chen</p>
          </div>
        </div>
      </div>
      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">10:18 AM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow space-y-2">
            <h4 className="text-white font-medium mb-1">
              The Church as an Innovation Hub (Keynote)
            </h4>

            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-[30px] text-sm bg-white/10 text-white/50">
                Scaling Ministry Tech
              </div>
              <div className="px-4 py-2 rounded-[30px] text-sm bg-white/10 text-white/50">
                Content Strategy
              </div>
              <div className="px-4 py-2 rounded-[30px] text-sm bg-white/10 text-white/50">
                Data Privacy
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">10:40 AM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow">
            <h4 className="text-white font-medium mb-1">
              Panel 1: Technology Adoption in Church
            </h4>
          </div>
        </div>
      </div>

      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">11:10 AM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow space-y-2">
            <h4 className="text-white font-medium mb-1">
              Innovation Spotlight: Practical Church Tech Demos
            </h4>
          </div>
        </div>
      </div>

      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">11:25 AM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow space-y-2">
            <h4 className="text-white font-medium mb-1">
              Networking Sprint + Interactive Games
            </h4>

            {/* <p className="text-white/50">Speaker: Marcus Johnson</p> */}
          </div>
        </div>
      </div>

      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">11:40 AM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow space-y-2">
            <h4 className="text-white font-medium mb-1">Break</h4>
            <p className="text-white/50">Speaker: Rev. Emily Torres</p>
          </div>
        </div>
      </div>

      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">11:50 AM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow space-y-2">
            <h4 className="text-white font-medium mb-1">
              Mental Health: Serving Without Burning Out
            </h4>
          </div>
        </div>
      </div>

      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">12:10 PM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow space-y-2">
            <h4 className="text-white font-medium mb-1">
              Business Session: Monetising Tech Skills Without Losing Calling
            </h4>
          </div>
        </div>
      </div>

      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">12:30 PM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow space-y-2">
            <h4 className="text-white font-medium mb-1">
              Panel 2: AI, Automation & the Church of 2035
            </h4>
          </div>
        </div>
      </div>

      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">1:00 PM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow space-y-2">
            <h4 className="text-white font-medium mb-1">Hackathon Finals</h4>
          </div>
        </div>
      </div>

      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">1:25 PM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow space-y-2">
            <h4 className="text-white font-medium mb-1">
              Awards & Final Pitch Recognition
            </h4>
          </div>
        </div>
      </div>

      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">1:40 PM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow space-y-2">
            <h4 className="text-white font-medium mb-1">
              Breakout Sessions: Sound Lab & Content Creation
            </h4>
          </div>
        </div>
      </div>
      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">2:05 PM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow space-y-2">
            <h4 className="text-white font-medium mb-1">
              Closing Keynote: Designing for the King — Excellence as Worship
            </h4>
          </div>
        </div>
      </div>

      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">2:25 PM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow space-y-2">
            <h4 className="text-white font-medium mb-1">
              Closing Prayer & Commissioning
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
function EventSchedule1() {
  return (
    <div className="px-5">
      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow">
          <p className="text-sm text-white/40 font-medium">4:30 PM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow">
            <h4 className="text-white font-medium mb-1">
              Opening Prayer & Worship
            </h4>
          </div>
        </div>
      </div>
      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">4:38 PM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow space-y-2">
            <h4 className="text-white font-medium mb-1">
              Welcome & Theme Reveal
            </h4>

            <p className="text-white/50">Speaker: Dr. Sarah Chen</p>
          </div>
        </div>
      </div>
      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">4:45 PM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow space-y-2">
            <h4 className="text-white font-medium mb-1">
              Is the Church Ready for the Next Tech Wave?
            </h4>

            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-[30px] text-sm bg-white/10 text-white/50">
                AI Foundations
              </div>
              <div className="px-4 py-2 rounded-[30px] text-sm bg-white/10 text-white/50">
                Web Dev 101
              </div>
              <div className="px-4 py-2 rounded-[30px] text-sm bg-white/10 text-white/50">
                Design Thinking
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">5:10 PM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow">
            <h4 className="text-white font-medium mb-1">
              Designing Systems That Actually Work in Church
            </h4>
          </div>
        </div>
      </div>

      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">5:35 PM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow space-y-2">
            <h4 className="text-white font-medium mb-1">
              Fireside Chat: From Cables to Calling
            </h4>

            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-[30px] text-sm bg-white/10 text-white/50">
                Building with React
              </div>
              <div className="px-4 py-2 rounded-[30px] text-sm bg-white/10 text-white/50">
                Mobile Apps
              </div>
              <div className="px-4 py-2 rounded-[30px] text-sm bg-white/10 text-white/50">
                Cybersecurity
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">6:05 PM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow space-y-2">
            <h4 className="text-white font-medium mb-1">
              Tech Fest Preview + Mini Challenge + Games
            </h4>

            <p className="text-white/50">Speaker: Marcus Johnson</p>
          </div>
        </div>
      </div>

      <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">6:35 PM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow space-y-2">
            <h4 className="text-white font-medium mb-1">
              Closing Prayer & Charge
            </h4>
          </div>
        </div>
      </div>

      {/* <div className="flex relative gap-10 max-w-4xl mx-auto">
        <div className="absolute bg-blue-400/40 left-20 top-0 w-0.75 h-full"></div>

        <div className="grid grid-cols-[1fr_3fr] lg:flex gap-3 lg:gap-10 grow mt-10">
          <p className="text-sm text-white/40 font-medium">8:00 AM</p>
          <div className="bg-white/5 rounded-2xl border border-white/20 p-4 grow space-y-2">
            <h4 className="text-white font-medium mb-1">Hackathon Begins</h4>
          </div>
        </div>
      </div> */}
    </div>
  );
}
