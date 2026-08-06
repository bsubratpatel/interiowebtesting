"use client";
 
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Phone } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    path: "/about-us",
    submenu: [
      { name: "About Interiocore", path: "/about-us" },
      { name: "Why Choose Us", path: "/about-us#why-choose-us" },
    ],
  },
  {
    name: "Services",
    path: "/modular-kitchen-design-jharsuguda",
    submenu: [
      { name: "Modular Kitchen", path: "/modular-kitchen-design-jharsuguda" },
      { name: "TV Unit Design", path: "/tv-unit-design-jharsuguda" },
      { name: "Wardrobe Design", path: "/wardrobe-design-jharsuguda" },
      { name: "Bedroom Interiors", path: "/bedroom-interior-design-jharsuguda" },
      { name: "Living Room", path: "/living-room-interior-design-jharsuguda" },
      { name: "Full Home Interiors", path: "/full-home-interior-jharsuguda" },
    ],
  },
  {
    name: "Design Gallery",
    path: "/design-gallery",
  },
  { name: "Materials", path: "/materials-finishes" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleSubmenu = (name: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const closeMobileMenu = () => {
    document.body.style.overflow = "";
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
          <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-2 relative z-50">
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
              return (
                <div 
                  key={item.name} 
                  className="relative py-2 group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.submenu ? (
                    <>
                      <Link
                        href={item.path}
                        className="flex items-center gap-1.5 text-xs font-bold tracking-[0.12em] uppercase transition-colors duration-200 ease cursor-pointer select-none outline-none py-3.5 focus-visible:ring-2 focus-visible:ring-brand-accent/50 rounded-sm border-b-2 text-foreground border-transparent hover:text-[#C4511A]"
                      >
                        {item.name}
                        <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
                      </Link>

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
                                <Link
                                  href={sub.path}
                                  onClick={() => setActiveDropdown(null)}
                                  onBlur={(e) => {
                                    const nextFocused = e.relatedTarget as HTMLElement;
                                    if (!nextFocused || !nextFocused.closest(".group")) {
                                      setActiveDropdown(null);
                                    }
                                  }}
                                  className="block px-4 py-2.5 text-xs font-bold tracking-[0.1em] uppercase transition-colors hover:bg-zinc-50 text-foreground hover:text-[#C4511A] outline-none focus-visible:bg-zinc-50"
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className="block text-xs font-bold tracking-[0.12em] uppercase transition-colors duration-200 ease py-3.5 outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 rounded-sm border-b-2 text-foreground border-transparent hover:text-[#C4511A]"
                    >
                      {item.name}
                    </Link>
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
                <Link href="/" onClick={closeMobileMenu} className="flex items-center">
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
                   onClick={closeMobileMenu}
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
                  
                  return (
                    <div key={item.name} className="flex flex-col">
                      {hasSubmenu ? (
                        <>
                          <div className="flex items-center justify-between w-full py-2.5 border-b border-zinc-200">
                            <Link
                              href={item.path}
                              onClick={closeMobileMenu}
                              className="text-lg font-bold tracking-wide uppercase text-zinc-900 hover:text-[#C4511A] transition-colors"
                            >
                              {item.name}
                            </Link>
                            <button
                              onClick={() => toggleSubmenu(item.name)}
                              className="p-2 text-zinc-500 hover:text-brand-accent transition-colors"
                              aria-label={`Toggle ${item.name} submenu`}
                            >
                              <ChevronDown
                                className={`h-5 w-5 transition-transform duration-300 ${
                                  isExpanded ? "rotate-180 text-brand-accent" : ""
                                }`}
                              />
                            </button>
                          </div>
                          
                          {isExpanded && (
                            <div className="overflow-hidden bg-zinc-50 rounded-xl px-4 mt-2 border-l-2 border-brand-accent/30">
                              <div className="py-3 flex flex-col space-y-3">
                                {item.submenu.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.path}
                                    onClick={closeMobileMenu}
                                    className="block text-base font-semibold tracking-wide py-1.5 text-foreground hover:text-[#C4511A] transition-colors"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.path}
                          onClick={closeMobileMenu}
                          className="py-2.5 text-lg font-bold tracking-wide uppercase text-zinc-900 border-b border-zinc-200 hover:text-[#C4511A] transition-colors"
                        >
                          {item.name}
                        </Link>
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
