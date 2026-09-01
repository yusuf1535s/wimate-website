import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Plus, Minus } from "lucide-react";
import { navItems, type NavItem } from "../data/content";
import { useHoverOpen } from "../hooks/useHoverOpen";
import { NavBadgePill, MegaArrow } from "./NavMenuBits";
import Logo from "./Logo";

type ActiveKey = string | null;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<ActiveKey>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
  }, [drawerOpen]);

  // Close any open mega when route changes
  useEffect(() => {
    const close = () => setActiveKey(null);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  const closeAll = () => setActiveKey(null);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-paper-200 shadow-soft-sm"
          : "bg-white/70 backdrop-blur-md border-b border-transparent"
      }`}
      onMouseLeave={closeAll}
    >
      <div className="container-x flex h-16 lg:h-20 items-center justify-between">
        <Link to="/" className="flex items-center" onClick={() => setDrawerOpen(false)}>
          <Logo className="h-9 lg:h-11 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <DesktopNavItem
              key={item.label}
              item={item}
              activeKey={activeKey}
              setActiveKey={setActiveKey}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2.5 lg:hidden">
          <Link
            to="/contact"
            onClick={() => setDrawerOpen(false)}
            className="rounded-xl bg-wimate-600 px-3.5 py-2 text-xs font-semibold text-white shadow-soft-sm hover:bg-wimate-700 transition-colors"
          >
            Contact
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setDrawerOpen((s) => !s)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-paper-200 bg-white text-ink-800 shadow-soft-sm"
          >
            {drawerOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mega menu surface (desktop) */}
      <AnimatePresence>
        {activeKey && (
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="hidden lg:block absolute inset-x-0 top-full"
            onMouseEnter={() => setActiveKey(activeKey)}
            onMouseLeave={closeAll}
          >
            <div className="border-t border-paper-200 bg-white shadow-soft-lg">
              <div className="container-x py-8">
                <ActivePanel
                  item={navItems.find((i) => i.label === activeKey)!}
                  onNavigate={closeAll}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white/98 backdrop-blur-2xl border-t border-paper-200 overflow-y-auto pb-12"
          >
            <motion.nav
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="container-x py-6 flex flex-col gap-2"
            >
              {navItems.map((item) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  onNavigate={() => setDrawerOpen(false)}
                />
              ))}
              <div className="mt-4 pt-4 border-t border-paper-200 flex flex-col gap-2">
                <Link
                  to="/contact"
                  onClick={() => setDrawerOpen(false)}
                  className="w-full text-center rounded-xl bg-wimate-600 py-3 text-sm font-semibold text-white shadow-soft-sm hover:bg-wimate-700 transition-colors"
                >
                  Get in Touch / Contact Us
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* -------------------- Desktop -------------------- */

function DesktopNavItem({
  item,
  activeKey,
  setActiveKey,
}: {
  item: NavItem;
  activeKey: ActiveKey;
  setActiveKey: (k: ActiveKey) => void;
}) {
  const hover = useHoverOpen(140);
  const isOpen = activeKey === item.label;
  const isExpandable = item.kind === "mega" || item.kind === "menu";

  const showPanel = () => {
    if (isExpandable) setActiveKey(item.label);
  };
  const scheduleHide = () => {
    if (isExpandable) {
      // Defer to allow movement into the panel
      setTimeout(() => {
        if (!hoverIsPointerIn(hover)) setActiveKey(null);
      }, 80);
    }
  };

  if (item.kind === "link") {
    return (
      <NavLink
        to={item.to}
        end={item.to === "/"}
        className={({ isActive }) =>
          `relative px-3.5 py-2 text-sm font-semibold transition-colors ${
            isActive ? "text-wimate-600" : "text-ink-700 hover:text-wimate-600"
          }`
        }
      >
        {({ isActive }) => (
          <>
            {item.label}
            {isActive && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 -z-10 rounded-full bg-wimate-50 ring-1 ring-wimate-500/20"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </>
        )}
      </NavLink>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        hover.onOpen();
        showPanel();
      }}
      onMouseLeave={scheduleHide}
    >
      <NavLink
        to={item.to}
        className={({ isActive }) =>
          `relative inline-flex items-center gap-1 px-3.5 py-2 text-sm font-semibold transition-colors ${
            isOpen || isActive
              ? "text-wimate-600"
              : "text-ink-700 hover:text-wimate-600"
          }`
        }
      >
        {item.label}
        <MegaArrow
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </NavLink>
    </div>
  );
}

function ActivePanel({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  if (item.kind === "mega") {
    return <MegaPanel item={item} onNavigate={onNavigate} />;
  }
  if (item.kind === "menu") {
    return <MenuPanel item={item} onNavigate={onNavigate} />;
  }
  return null;
}

function MegaPanel({
  item,
  onNavigate,
}: {
  item: Extract<NavItem, { kind: "mega" }>;
  onNavigate: () => void;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-3">
        <div className="chip">Products</div>
        <h3 className="mt-3 h-display text-xl font-semibold text-ink-800">
          Hardware engineered <br /> in India.
        </h3>
        <p className="mt-2 text-sm text-ink-600">
          Industrial-grade gateways, HMIs, I/O cards and sensors with an
          18-month warranty.
        </p>
        <Link
          to={item.to}
          onClick={onNavigate}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-wimate-600 hover:text-wimate-700"
        >
          View all products <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="lg:col-span-9 grid gap-6 sm:grid-cols-3">
        {item.groups.map((g) => (
          <div key={g.title}>
            <Link
              to={g.to}
              onClick={onNavigate}
              className="group inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-wimate-600 hover:text-wimate-700"
            >
              {g.title}
              <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <ul className="mt-3 space-y-1">
              {g.items.map((it) => (
                <li key={it.label}>
                  <Link
                    to={it.to}
                    onClick={onNavigate}
                    className="group flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-ink-800 transition-colors hover:bg-wimate-50 hover:text-wimate-700"
                  >
                    <span className="font-medium">{it.label}</span>
                    <NavBadgePill badge={it.badge} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function MenuPanel({
  item,
  onNavigate,
}: {
  item: Extract<NavItem, { kind: "menu" }>;
  onNavigate: () => void;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-3">
        <div className="chip">{item.label}</div>
        <h3 className="mt-3 h-display text-xl font-semibold text-ink-800">
          Solutions for every <br /> industrial outcome.
        </h3>
        <p className="mt-2 text-sm text-ink-600">
          From the shop floor to the rooftop, our solutions connect assets and
          surface insights.
        </p>
        <Link
          to={item.to}
          onClick={onNavigate}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-wimate-600 hover:text-wimate-700"
        >
          View all <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="lg:col-span-9">
        <ul className="grid gap-1 sm:grid-cols-2">
          {item.items.map((it) => (
            <li key={it.label}>
              <Link
                to={it.to}
                onClick={onNavigate}
                className="group flex items-center gap-2 rounded-lg px-2.5 py-2.5 text-sm text-ink-800 transition-colors hover:bg-wimate-50 hover:text-wimate-700"
              >
                <span className="font-medium">{it.label}</span>
                <NavBadgePill badge={it.badge} />
                <ChevronRight className="ml-auto h-4 w-4 text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:text-wimate-500" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* -------------------- Mobile -------------------- */

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (item.kind === "link") {
    return (
      <NavLink
        to={item.to}
        end={item.to === "/"}
        onClick={onNavigate}
        className={({ isActive }) =>
          `flex items-center justify-between rounded-xl border px-4 py-3 text-base font-semibold ${
            isActive
              ? "border-wimate-500/30 bg-wimate-50 text-wimate-700"
              : "border-paper-200 bg-white text-ink-800"
          }`
        }
      >
        <span>{item.label}</span>
      </NavLink>
    );
  }

  return (
    <div className="rounded-xl border border-paper-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-semibold text-ink-800"
      >
        <span className="inline-flex items-center gap-1.5">
          {item.label}
          <MegaArrow
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </span>
        {open ? (
          <Minus className="h-4 w-4 text-ink-400" />
        ) : (
          <Plus className="h-4 w-4 text-ink-400" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-paper-200"
          >
            <div className="p-2">
              <Link
                to={item.to}
                onClick={onNavigate}
                className="flex items-center justify-between rounded-lg bg-wimate-50/80 px-3 py-2 text-xs font-semibold text-wimate-700 hover:bg-wimate-100 transition-colors mb-2"
              >
                <span>View all {item.label}</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
              {item.kind === "mega" &&
                item.groups.map((g) => (
                  <div key={g.title} className="py-1">
                    <Link
                      to={g.to}
                      onClick={onNavigate}
                      className="block px-2 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-wimate-600"
                    >
                      {g.title}
                    </Link>
                    <ul className="mt-1 space-y-0.5">
                      {g.items.map((it) => (
                        <li key={it.label}>
                          <Link
                            to={it.to}
                            onClick={onNavigate}
                            className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-ink-800 hover:bg-wimate-50"
                          >
                            <span className="font-medium">{it.label}</span>
                            <NavBadgePill badge={it.badge} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

              {item.kind === "menu" && (
                <ul className="py-1">
                  {item.items.map((it) => (
                    <li key={it.label}>
                      <Link
                        to={it.to}
                        onClick={onNavigate}
                        className="flex items-center gap-2 rounded-md px-2 py-2.5 text-sm text-ink-800 hover:bg-wimate-50"
                      >
                        <span className="font-medium">{it.label}</span>
                        <NavBadgePill badge={it.badge} />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* tiny helper */
function hoverIsPointerIn(hover: { open: boolean }) {
  return hover.open;
}
