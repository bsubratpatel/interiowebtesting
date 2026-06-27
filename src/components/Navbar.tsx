"use client";
 
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const navItems = [
  { name: "Home", path: "#home" },
  {
    name: "About Us",
    path: "#about",
    submenu: [
      { name: "Our Story", path: "#about" },
      { name: "Mission & Vision", path: "#about" },
      { name: "Why Choose Us", path: "#about" },
      { name: "Our Team", path: "#about" },
    ],
  },
  {
    name: "Services",
    path: "#services",
    submenu: [
      { name: "Modular Kitchen Designs", path: "#services" },
      { name: "Wardrobe Designs", path: "#services" },
      { name: "TV Unit Designs", path: "#services" },
      { name: "Vanity Designs", path: "#services" },
    ],
  },
  {
    name: "Design Gallery",
    path: "#gallery",
    submenu: [
      { name: "Modular Kitchen", path: "#gallery?tab=kitchen" },
      { name: "Wardrobe", path: "#gallery?tab=wardrobe" },
      { name: "TV Unit", path: "#gallery?tab=tv-unit" },
      { name: "Vanity", path: "#gallery?tab=vanity" },
    ],
  },
  { name: "Our Process", path: "#process" },
  { name: "Materials", path: "#materials" },
  { name: "Testimonials", path: "#testimonials" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    const sections = ["home", "about", "services", "gallery", "process", "materials", "testimonials", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Trigger when section is in central viewport area
      threshold: 0.05,
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

    return () => observer.disconnect();
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
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      if (tab) {
        window.dispatchEvent(new CustomEvent("changeGalleryTab", { detail: tab }));
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-zinc-200/60 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
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
              width={340}
              height={100}
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? "h-[72px]" : "h-[90px]"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1.5">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <NavigationMenu.Root delayDuration={100}>
                    <NavigationMenu.List className="list-none m-0 p-0 flex items-center">
                      <NavigationMenu.Item>
                        <NavigationMenu.Trigger
                          onClick={(e) => handleNavClick(e, item.path)}
                          className={`group/trigger flex items-center gap-1.5 px-5 py-3 text-[13px] xl:text-sm font-semibold tracking-wide transition-colors cursor-pointer select-none outline-none rounded-full data-[state=open]:text-brand-accent ${
                            activeSection === item.path.replace("#", "")
                              ? "text-brand-accent font-bold"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {item.name}
                          <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </NavigationMenu.Trigger>

                        <NavigationMenu.Content className="absolute top-0 left-0 w-full focus:outline-none">
                          <ul className="flex flex-col gap-1.5 list-none m-0 p-3 w-72 bg-white rounded-2xl shadow-xl border border-zinc-200/60">
                            {item.submenu.map((sub) => (
                              <li key={sub.name}>
                                <NavigationMenu.Link asChild>
                                  <a
                                    href={sub.path}
                                    onClick={(e) => handleNavClick(e, sub.path)}
                                    className="block px-4 py-2.5 text-xs font-semibold text-muted-foreground hover:text-brand-accent hover:bg-zinc-50 rounded-xl transition-all"
                                  >
                                    {sub.name}
                                  </a>
                                </NavigationMenu.Link>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenu.Content>
                      </NavigationMenu.Item>
                    </NavigationMenu.List>

                    {/* Viewport centered under trigger */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full flex justify-center z-50">
                      <NavigationMenu.Viewport className="origin-top relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-[288px] overflow-hidden rounded-2xl border border-zinc-200/60 bg-white text-foreground shadow-xl transition-all duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 z-50" />
                    </div>
                  </NavigationMenu.Root>
                ) : (
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={`block px-5 py-3 text-[13px] xl:text-sm font-semibold tracking-wide transition-colors rounded-full ${
                      activeSection === item.path.replace("#", "")
                        ? "text-brand-accent font-bold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden xl:flex items-center gap-4.5">
            <a
              href="https://wa.me/919776991699"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-emerald-500 p-2 transition-all flex items-center justify-center hover:scale-110 active:scale-95 duration-200"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="tel:+919776991699"
              className="bg-brand-accent text-white hover:bg-brand-accent-hover transition-all rounded-full px-6 text-xs font-bold tracking-wider uppercase h-10 flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-sm hover:scale-[1.02] duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:ring-offset-2"
            >
              <Phone className="h-3.5 w-3.5" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center gap-3">
            <a
              href="tel:+919776991699"
              className="bg-brand-accent hover:bg-brand-accent-hover text-white transition-all rounded-full px-4 text-[11px] font-bold tracking-wider uppercase h-9.5 flex items-center justify-center gap-1.5 shadow-sm active:scale-95 cursor-pointer hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-accent/50 duration-200"
            >
              <Phone className="h-3.5 w-3.5" />
              Call Now
            </a>
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-xl text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6.5 w-6.5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="xl:hidden fixed inset-0 z-50 bg-white/98 backdrop-blur-xl flex flex-col h-screen w-screen overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 h-28 border-b border-zinc-150 shrink-0">
                <Link href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center">
                  <Image
                    src="/images/logo/logo.svg"
                    unoptimized
                    alt="Interiocore Logo"
                    width={320}
                    height={90}
                    className="h-[84px] w-auto object-contain"
                    priority
                  />
                </Link>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X className="h-6.5 w-6.5" />
                </button>
              </div>

              {/* Drawer Navigation List */}
              <div className="flex-1 overflow-y-auto px-6 pt-8 pb-32 flex flex-col space-y-6">
                {navItems.map((item) => {
                  const hasSubmenu = !!item.submenu;
                  const isExpanded = !!expandedMenus[item.name];
                  
                  return (
                    <div key={item.name} className="flex flex-col animate-[fadeIn_0.3s_ease-in-out]">
                      {hasSubmenu ? (
                        <>
                          <button
                            onClick={() => toggleSubmenu(item.name)}
                            className="flex items-center justify-between w-full py-2.5 text-left text-lg font-bold tracking-wide text-foreground uppercase border-b border-zinc-100 cursor-pointer"
                          >
                            <span className={activeSection === item.path.replace("#", "") ? "text-brand-accent font-bold" : ""}>
                              {item.name}
                            </span>
                            <ChevronDown
                              className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                                isExpanded ? "rotate-180 text-brand-accent" : ""
                              }`}
                            />
                          </button>
                          
                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                                className="overflow-hidden bg-zinc-50/50 rounded-xl px-4 mt-2 border-l-2 border-brand-accent/30"
                              >
                                <div className="py-3 flex flex-col space-y-3">
                                  {item.submenu.map((sub) => (
                                    <a
                                      key={sub.name}
                                      href={sub.path}
                                      onClick={(e) => handleNavClick(e, sub.path)}
                                      className="block text-sm font-semibold tracking-wide py-1.5 text-muted-foreground hover:text-brand-accent transition-colors"
                                    >
                                      {sub.name}
                                    </a>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <a
                          href={item.path}
                          onClick={(e) => handleNavClick(e, item.path)}
                          className={`py-2.5 text-lg font-bold tracking-wide border-b border-zinc-100 uppercase transition-colors ${
                            activeSection === item.path.replace("#", "")
                              ? "text-brand-accent font-bold"
                              : "text-foreground hover:text-brand-accent"
                          }`}
                        >
                          {item.name}
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="shrink-0 h-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
