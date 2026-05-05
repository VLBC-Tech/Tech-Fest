import About from "./_components/About";
import EventSchedule from "./_components/EventSchedule";
import FeaturedSpeakers from "./_components/FeaturedSpeakers";
import Footer from "./_components/Footer";
import Home from "./_components/Home";
import Register from "./_components/Register";

export default function Page() {
  return (
    <div className="bg-[#0a0f1c] min-h-screen">
      <Home />
      <About />
      <FeaturedSpeakers />
      <EventSchedule />
      <Register />
      <Footer />
    </div>
  );
}
