import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { brand, distributors, contactPage } from "../data/wimate";
import { LinkedInIcon, FacebookIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-paper-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-wimate-500/40 to-transparent" />
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* About */}
          <div className="lg:col-span-4">
            <Logo className="h-12 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-600 dark:text-white">
              We believe that the world around us can be simple. The same ideology
              runs through our approach, products and solutions.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={brand.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-paper-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-ink-700 dark:text-slate-200 hover:text-wimate-600 dark:hover:text-wimate-400 hover:border-wimate-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={brand.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-paper-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-ink-700 dark:text-slate-200 hover:text-wimate-600 dark:hover:text-wimate-400 hover:border-wimate-500/40 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-paper-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-ink-700 dark:text-slate-200 hover:text-wimate-600 dark:hover:text-wimate-400 hover:border-wimate-500/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-500 dark:text-white">
              Solutions
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["Building Management", "/solutions#building-management"],
                ["Industry 4.0", "/solutions#industry-4-0"],
                ["RO Plant Monitoring", "/solutions#ro-plant"],
                ["Sewage Treatment Plant", "/solutions#stp-monitoring"],
                ["Energy Management", "/solutions#energy-management"],
                ["Machine Health Monitoring", "/solutions#machine-health"],
                ["Connected Logistics", "/solutions#connected-logistics"],
                ["Asset Mgmt. & Ticketing", "/solutions#asset-management-ticketing"],
              ].map(([l, h]) => (
                <li key={l}>
                  <Link to={h} className="text-ink-700 dark:text-white hover:text-wimate-600 dark:hover:text-wimate-400 transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-500 dark:text-white">
              Products
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["Unifier 300 — 3G/4G", "/products#unifier-300"],
                ["Unifier 400 — Sensing", "/products#unifier-400"],
                ["Unifier 500 — Multiport", "/products#unifier-500"],
                ["Wi-link", "/products#wi-link-100"],
                ["IO Card", "/products#io-card"],
                ["HMI 4.3\"", "/products#hmi-4-3"],
                ["HMI 7\"", "/products#hmi-7"],
                ["WiSense 100 (Temp / RH / CO2)", "/products#wisense-100"],
                ["WiSense 200 (Vibration)", "/products#wisense-200"],
                ["WiSense 300 (Occupancy)", "/products#wisense-300"],
                ["Cloudtesla IoT Platform", "/cloudtesla"],
              ].map(([l, h]) => (
                <li key={l}>
                  <Link to={h} className="text-ink-700 dark:text-white hover:text-wimate-600 dark:hover:text-wimate-400 transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-500 dark:text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["About Us", "/why-wimate"],
                ["Contact", "/contact"],
                ["Mail", "https://mail.google.com"],
                ["Payroll", "https://wimate.keka.com"],
                ["Privacy", "https://www.wimate.in/privacy-policy-2/"],
              ].map(([l, h]) => (
                <li key={l}>
                  {h.startsWith("http") ? (
                    <a href={h} target="_blank" rel="noreferrer" className="text-ink-700 dark:text-white hover:text-wimate-600 dark:hover:text-wimate-400 transition-colors">
                      {l}
                    </a>
                  ) : (
                    <Link to={h} className="text-ink-700 dark:text-white hover:text-wimate-600 dark:hover:text-wimate-400 transition-colors">
                      {l}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-500 dark:text-white">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-700 dark:text-white">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-wimate-500" />
                <span>
                  {contactPage.address.lines.map((l, i) => (
                    <span key={i} className="block">{l}</span>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-wimate-500" />
                <a href={contactPage.phone.href} className="hover:text-wimate-600 dark:hover:text-wimate-400">
                  {contactPage.phone.value}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-wimate-500" />
                <a href={`mailto:${brand.email}`} className="hover:text-wimate-600 dark:hover:text-wimate-400">
                  {brand.email}
                </a>
              </li>
              <li className="text-xs text-ink-500 dark:text-white">{brand.hours}</li>
            </ul>
          </div>
        </div>

        {/* Distributors (matches wimate.in footer) */}
        <div className="mt-12 border-t border-paper-200 dark:border-slate-800 pt-8">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-500 dark:text-white">
            Distributors
          </h4>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {distributors.map((d) => (
              <li key={d.company} className="rounded-xl border border-paper-200 dark:border-slate-800 bg-paper-50/60 dark:bg-slate-800/60 p-4 text-sm">
                <div className="text-xs font-semibold uppercase tracking-widest text-wimate-600 dark:text-wimate-400">
                  {d.city}
                </div>
                <div className="mt-1 font-semibold text-ink-800 dark:text-slate-100">{d.company}</div>
                <div className="mt-1 text-xs leading-relaxed text-ink-600 dark:text-white">{d.address}</div>
                {d.phone && (
                  <a href={`tel:${d.phone.replace(/[^0-9+]/g, "")}`} className="mt-1 block text-xs text-wimate-600 dark:text-wimate-400 hover:text-wimate-700">
                    Ph: {d.phone}
                  </a>
                )}
                {d.email && (
                  <a href={`mailto:${d.email}`} className="block text-xs text-wimate-600 dark:text-wimate-400 hover:text-wimate-700">
                    {d.email}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-paper-200 dark:border-slate-800 pt-6 text-xs text-ink-500 dark:text-white sm:flex-row sm:items-center">
          <p>© Copyright 2026 Wimate Technology Solutions Pvt Ltd</p>
          <ul className="flex items-center gap-4">
            <li><Link to="/contact" className="hover:text-wimate-600 dark:hover:text-wimate-400">Contact</Link></li>
            <li><a href="https://www.wimate.in/privacy-policy-2/" target="_blank" rel="noreferrer" className="hover:text-wimate-600 dark:hover:text-wimate-400">Privacy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
