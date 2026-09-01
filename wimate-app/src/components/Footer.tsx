import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { brand } from "../data/content";
import { LinkedInIcon, FacebookIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-paper-200 bg-white">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-wimate-500/40 to-transparent" />
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo className="h-12 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-600">
              End-to-end Industrial IoT — designed, developed and manufactured
              in India. Hardware, cloud platform and analytics on a single stack.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={brand.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-paper-200 bg-white text-ink-700 hover:text-wimate-600 hover:border-wimate-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={brand.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-paper-200 bg-white text-ink-700 hover:text-wimate-600 hover:border-wimate-500/40 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-paper-200 bg-white text-ink-700 hover:text-wimate-600 hover:border-wimate-500/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-500">
              Solutions
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["Industry 4.0", "/solutions#industry-4-0"],
                ["Energy Management", "/solutions#energy-management"],
                ["Building Management", "/solutions#building-management"],
                ["Machine Health", "/solutions#machine-health"],
                ["Smart Logistics", "/solutions#smart-logistics"],
                ["Asset Management", "/solutions#asset-management"],
              ].map(([l, h]) => (
                <li key={l}>
                  <Link to={h} className="text-ink-700 hover:text-wimate-600 transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-500">
              Products
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["Unifier Gateways", "/products#gateways"],
                ["HMI & I/O", "/products#hmi"],
                ["WiSense Sensors", "/products#sensors"],
                ["WiMate Cloud", "/products#cloud"],
              ].map(([l, h]) => (
                <li key={l}>
                  <Link to={h} className="text-ink-700 hover:text-wimate-600 transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-500">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["Why WiMate", "/why-wimate"],
                ["Industries", "/industries"],
                ["Case Studies", "/case-studies"],
                ["Contact", "/contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <Link to={h} className="text-ink-700 hover:text-wimate-600 transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-500">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-700">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-wimate-500" />
                <span>{brand.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-wimate-500" />
                <a href={`tel:${brand.phone}`} className="hover:text-wimate-600">
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-wimate-500" />
                <a href={`mailto:${brand.email}`} className="hover:text-wimate-600">
                  {brand.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-paper-200 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Wimate Technology Solutions Pvt Ltd. All rights reserved.</p>
          <p>Designed & manufactured in India · Make in India</p>
        </div>
      </div>
    </footer>
  );
}
