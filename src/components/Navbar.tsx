"use client";
 
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";


const navItems = [
  { name: "Home", path: "#home" },
  {
    name: "About Us",
    path: "#about-story",
    submenu: [
      { name: "Our Story", path: "#about-story" },
      { name: "Mission & Vision", path: "#about-mission" },
      { name: "Why Choose Us", path: "#about-why" },
    ],
  },
  {
    name: "Services",
    path: "#services-kitchen",
    submenu: [
      { name: "Modular Kitchen", path: "#services-kitchen" },
      { name: "TV Unit Design", path: "#services-tv" },
      { name: "Wardrobe Design", path: "#services-wardrobe" },
      { name: "Bedroom Interiors", path: "#services-bedroom" },
      { name: "Living Room", path: "#services-living" },
      { name: "Full Home Interiors", path: "#services-full-home" },
    ],
  },
  {
    name: "Design Gallery",
    path: "#gallery-kitchens",
    submenu: [
      { name: "Kitchens", path: "#gallery-kitchens" },
      { name: "TV Units", path: "#gallery-tv" },
      { name: "Wardrobes", path: "#gallery-wardrobes" },
      { name: "Bedrooms", path: "#gallery-bedrooms" },
      { name: "Living Rooms", path: "#gallery-living" },
    ],
  },
  { name: "Our Process", path: "#process" },
  { name: "Materials", path: "#materials" },
  { name: "Testimonials", path: "#testimonials" },
  { name: "Contact", path: "#contact" },
];

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    className="h-6.5 w-6.5 drop-shadow-md text-zinc-900 group-hover:text-[#E8621A] transition-colors duration-200"
  >
    <line
      x1="4"
      y1="6"
      x2="20"
      y2="6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className={`transition-all duration-150 ease-in-out origin-center ${
        isOpen ? "rotate-45 translate-y-[6px]" : ""
      }`}
    />
    <line
      x1="4"
      y1="12"
      x2="20"
      y2="12"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className={`transition-all duration-150 ease-in-out ${
        isOpen ? "opacity-0" : ""
      }`}
    />
    <line
      x1="4"
      y1="18"
      x2="20"
      y2="18"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className={`transition-all duration-150 ease-in-out origin-center ${
        isOpen ? "-rotate-45 -translate-y-[6px]" : ""
      }`}
    />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});
  const [activeSection, setActiveSection] = useState("home");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    let frameId: number;
    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 60;
        setScrolled(prev => prev !== isScrolled ? isScrolled : prev);
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Scrollspy with Intersection Observer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    const sections = [
      "home", 
      "about-story", "about-mission", "about-why",
      "services-kitchen", "services-tv", "services-wardrobe", "services-bedroom", "services-living", "services-full-home",
      "gallery-kitchens", "gallery-tv", "gallery-wardrobes", "gallery-bedrooms", "gallery-living",
      "process", "materials", "testimonials", "contact"
    ];
    
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleSubmenu = (name: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, path: string) => {
    e.preventDefault();
    
    let targetId = path;
    let tab: string | null = null;
    
    if (path.includes("?tab=")) {
      const parts = path.split("?tab=");
      targetId = parts[0];
      tab = parts[1];
    }
    
    targetId = targetId.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      
      if (tab) {
        window.dispatchEvent(new CustomEvent("changeGalleryTab", { detail: tab }));
      }
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <header
        className="fixed top-0 z-40 w-full transition-[background-color,border-color] duration-200 ease"
        style={{
          backgroundColor: scrolled ? "#FFFFFF" : "rgba(255, 255, 255, 0.95)",
          borderBottom: scrolled ? "0.5px solid rgba(0,0,0,0.08)" : "1px solid rgba(228, 228, 231, 0.6)",
          backdropFilter: scrolled ? "none" : "blur(12px)",
        }}
      >
        <div className={`max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 w-full flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-24" : "h-28"
        }`}>
          {/* Logo */}
          <Link href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-2 relative z-50">
            <Image
              src="/images/logo/logo.svg"
              unoptimized
              alt="Interiocore Logo"
              width={380}
              height={120}
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? "h-[84px]" : "h-[100px]"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => {
              const cleanedPath = item.path.split("-")[0].replace("#", "");
              const isHighlight = cleanedPath === "home" 
                ? activeSection === "home" 
                : activeSection.startsWith(cleanedPath);

              return (
                <div 
                  key={item.name} 
                  className="relative py-2 group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.submenu ? (
                    <>
                      <button
                        onClick={(e) => handleNavClick(e, item.path)}
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === item.name}
                        className={`flex items-center gap-1.5 text-xs font-bold tracking-[0.12em] uppercase transition-colors duration-200 ease cursor-pointer select-none outline-none py-3.5 focus-visible:ring-2 focus-visible:ring-brand-accent/50 rounded-sm border-b-2 ${
                          isHighlight
                            ? "text-[#C4511A] border-[#C4511A]"
                            : "text-foreground border-transparent hover:text-[#C4511A]"
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
                      </button>

                      {/* Dropdown Menu */}
                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 pt-2 z-50">
                          <ul 
                            className="flex flex-col gap-1 list-none m-0 p-4 w-64 bg-white rounded-none shadow-xl border border-zinc-200/50"
                            onKeyDown={(e) => {
                              if (e.key === "Escape") setActiveDropdown(null);
                            }}
                          >
                            {item.submenu.map((sub) => (
                              <li key={sub.name}>
                                <a
                                  href={sub.path}
                                  onClick={(e) => handleNavClick(e, sub.path)}
                                  onBlur={(e) => {
                                    const nextFocused = e.relatedTarget as HTMLElement;
                                    if (!nextFocused || !nextFocused.closest(".group")) {
                                      setActiveDropdown(null);
                                    }
                                  }}
                                  className={`block px-4 py-2.5 text-xs font-bold tracking-[0.1em] uppercase transition-colors hover:bg-zinc-50 outline-none focus-visible:bg-zinc-50 ${
                                    sub.path === `#${activeSection}`
                                      ? "text-[#C4511A]"
                                      : "text-foreground hover:text-[#C4511A]"
                                  }`}
                                >
                                  {sub.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.path}
                      onClick={(e) => handleNavClick(e, item.path)}
                      className={`block text-xs font-bold tracking-[0.12em] uppercase transition-colors duration-200 ease py-3.5 outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 rounded-sm border-b-2 ${
                        isHighlight
                          ? "text-[#C4511A] border-[#C4511A]"
                          : "text-foreground border-transparent hover:text-[#C4511A]"
                      }`}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden xl:flex items-center gap-6">
            <a
              href="tel:+919776991699"
              className="transition-all rounded-none px-6 text-[10px] font-bold tracking-[0.2em] uppercase h-11 flex items-center justify-center gap-2 cursor-pointer shadow-sm duration-200 bg-brand-accent text-white hover:bg-brand-accent-hover active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2"
            >
              <Phone className="h-3.5 w-3.5" />
              Inquire Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center gap-3">
            <a
              href="tel:+919776991699"
              className="bg-brand-accent hover:bg-brand-accent-hover text-white transition-all rounded-full px-4 text-[11px] font-bold tracking-wider uppercase h-9.5 flex items-center justify-center gap-1.5 shadow-sm active:scale-95 cursor-pointer hover:scale-[1.02] outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 duration-200"
            >
              <Phone className="h-3.5 w-3.5" />
              Call
            </a>
            <button
               onClick={() => setIsOpen(true)}
               className="p-3 rounded-xl transition-colors cursor-pointer text-zinc-900 hover:text-[#E8621A] outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 focus-visible:ring-offset-2 group"
               aria-label="Open navigation menu"
             >
               <HamburgerIcon isOpen={isOpen} />
             </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
             <div
               className="xl:hidden fixed inset-0 z-50 bg-white flex flex-col h-[100dvh] w-screen overflow-hidden pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)]"
             >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 h-24 border-b border-zinc-200 shrink-0 bg-white">
                <Link href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center">
                  <Image
                    src="/images/logo/logo.svg"
                    unoptimized
                    alt="Interiocore Logo"
                    width={320}
                    height={90}
                    className="h-[72px] w-auto object-contain"
                    priority
                  />
                </Link>

                 <button
                   onClick={() => setIsOpen(false)}
                   className="p-3 rounded-xl text-zinc-900 hover:text-[#E8621A] transition-colors cursor-pointer group"
                   aria-label="Close navigation menu"
                 >
                   <HamburgerIcon isOpen={isOpen} />
                 </button>
              </div>

              {/* Drawer Navigation List */}
              <div className="flex-1 overflow-y-auto px-6 pt-8 pb-8 flex flex-col space-y-6 bg-white">
                {navItems.map((item) => {
                  const hasSubmenu = !!item.submenu;
                  const isExpanded = !!expandedMenus[item.name];
                  
                  const cleanedPath = item.path.split("-")[0].replace("#", "");
                  const isHighlight = cleanedPath === "home" 
                    ? activeSection === "home" 
                    : activeSection.startsWith(cleanedPath);
                  
                  return (
                    <div key={item.name} className="flex flex-col">
                      {hasSubmenu ? (
                        <>
                          <button
                            onClick={() => toggleSubmenu(item.name)}
                            className={`flex items-center justify-between w-full py-2.5 text-left text-lg font-bold tracking-wide uppercase transition-[color,border-color] duration-200 ease cursor-pointer ${
                              isHighlight
                                ? "text-[#C4511A] border-b-2 border-[#C4511A]"
                                : "text-zinc-900 border-b border-zinc-200"
                            }`}
                          >
                            <span>
                              {item.name}
                            </span>
                            <ChevronDown
                              className={`h-5 w-5 text-zinc-500 transition-transform duration-300 ${
                                isExpanded ? "rotate-180 text-brand-accent" : ""
                              }`}
                            />
                          </button>
                          
                          
                            {isExpanded && (
                              <div
                                className="overflow-hidden bg-zinc-50 rounded-xl px-4 mt-2 border-l-2 border-brand-accent/30"
                              >
                                <div className="py-3 flex flex-col space-y-3">
                                  {item.submenu.map((sub) => (
                                    <a
                                      key={sub.name}
                                      href={sub.path}
                                      onClick={(e) => handleNavClick(e, sub.path)}
                                      className={`block text-base font-semibold tracking-wide py-1.5 transition-colors ${
                                        sub.path === `#${activeSection}`
                                          ? "text-[#C4511A]"
                                          : "text-foreground hover:text-[#C4511A]"
                                      }`}
                                    >
                                      {sub.name}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                        </>
                      ) : (
                        <a
                          href={item.path}
                          onClick={(e) => handleNavClick(e, item.path)}
                          className={`py-2.5 text-lg font-bold tracking-wide uppercase transition-[color,border-color] duration-200 ease ${
                            isHighlight
                              ? "text-[#C4511A] border-b-2 border-[#C4511A]"
                              : "text-zinc-900 border-b border-zinc-200"
                          }`}
                        >
                          {item.name}
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          )}
      </header>
    </>
  );
}
