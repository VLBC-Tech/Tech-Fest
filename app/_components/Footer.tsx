import { CiMail, CiPhone } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import { LiaMapMarkerAltSolid } from "react-icons/lia";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8">
      <div className="mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">TF</span>
              </div>
              <div>
                <span className="text-white font-semibold text-lg">
                  Tech Fest
                </span>
                <span className="text-white/30  block">Kingdom Stack 2026</span>
              </div>
            </div>
            <p className="text-white/40 leading-relaxed mb-6 max-w-sm">
              Where faith meets the future. A transformative experience of
              technology, creativity, and community impact.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/1 transition-all"
                data-arr-index="0"
                data-arr-variable-name="socialLinks"
              >
                <FaInstagram size={"1.5rem"} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/1 transition-all"
                data-arr-index="1"
                data-arr-variable-name="socialLinks"
              >
                <FiTwitter size={"1.5rem"} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/1 transition-all"
                data-arr-index="2"
                data-arr-variable-name="socialLinks"
              >
                <FiYoutube size={"1.5rem"} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/1 transition-all"
                data-arr-index="3"
                data-arr-variable-name="socialLinks"
              >
                <FiLinkedin size={"1.5rem"} />
              </a>
            </div>
          </div>
          <div>
            <h4
              className="text-white font-semibold mb-4"
              data-collection-item-field="title"
            >
              Event
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/40 hover:text-white/70 transition-colors "
                  data-collection-item-field="link"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/40 hover:text-white/70 transition-colors "
                  data-collection-item-field="link"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/40 hover:text-white/70 transition-colors "
                  data-collection-item-field="link"
                >
                  Workshops
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/40 hover:text-white/70 transition-colors "
                  data-collection-item-field="link"
                >
                  Hackathon
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/40 hover:text-white/70 transition-colors "
                  data-collection-item-field="link"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="text-white font-semibold mb-4"
              data-collection-item-field="title"
            >
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/40 hover:text-white/70 transition-colors "
                  data-collection-item-field="link"
                >
                  Code of Conduct
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/40 hover:text-white/70 transition-colors "
                  data-collection-item-field="link"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/40 hover:text-white/70 transition-colors "
                  data-collection-item-field="link"
                >
                  Travel Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/40 hover:text-white/70 transition-colors "
                  data-collection-item-field="link"
                >
                  Parking
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="text-white font-semibold mb-4"
              data-collection-item-field="title"
            >
              Church
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/40 hover:text-white/70 transition-colors "
                  data-collection-item-field="link"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/40 hover:text-white/70 transition-colors "
                  data-collection-item-field="link"
                >
                  Ministries
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/40 hover:text-white/70 transition-colors "
                  data-collection-item-field="link"
                >
                  Sermons
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/40 hover:text-white/70 transition-colors "
                  data-collection-item-field="link"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 py-8 border-t border-white/8 mb-8">
          <div className="flex items-center gap-3 text-white/40">
            <LiaMapMarkerAltSolid size={"1.5rem"} color="#a684ff" />

            <span className="">Victory City, Opp. OGTV, Abeokuta</span>
          </div>
          <div className="flex items-center gap-3 text-white/40">
            <CiMail size={"1.5rem"} color="#a684ff" />
            <span className="">vlbconline@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-white/40">
            <CiPhone size={"1.5rem"} color="#51a2ff" />
            <span className="">(+234) 8035-555-012</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/8">
          <div className="text-white/30 ">
            © {new Date().getFullYear()} Victory Life Bible Church. All rights
            reserved.
          </div>
          <div className="flex gap-6 ">
            <a
              href="#"
              className="text-white/30 hover:text-white/50 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-white/50 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
