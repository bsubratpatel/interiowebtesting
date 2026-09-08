"use client";

import React, { useState, useRef } from "react";
import { ArrowRight, ChevronDown, AlertCircle, MessageCircle, ExternalLink } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface FormErrors {
  fullName?: string;
  phone?: string;
  service?: string;
  city?: string;
}

const INTERIOCORE_PHONE = "919776991699";

function buildWhatsAppMessage({
  service,
  fullName,
  phone,
  city,
  message,
}: {
  service: string;
  fullName: string;
  phone: string;
  city: string;
  message: string;
}): string {
  let intro = "Hi InterioCore, I want a free interior design consultation.";
  let reqLabel = "Additional requirement:";

  switch (service) {
    case "Modular Kitchen":
      intro = "Hi InterioCore, I want a free interior design consultation for a modular kitchen.";
      reqLabel = "Additional requirement:";
      break;
    case "Wardrobe":
      intro = "Hi InterioCore, I want a free interior design consultation for a wardrobe.";
      reqLabel = "Additional requirement:";
      break;
    case "TV Unit":
      intro = "Hi InterioCore, I want a free interior design consultation for a TV unit.";
      reqLabel = "Additional requirement:";
      break;
    case "Complete Home Interior":
      intro = "Hi InterioCore, I want a free interior design consultation for complete home interiors.";
      reqLabel = "Additional requirement:";
      break;
    case "Other":
      intro = "Hi InterioCore, I want a free interior design consultation.";
      reqLabel = "Requirement:";
      break;
    default:
      intro = "Hi InterioCore, I want a free interior design consultation.";
      reqLabel = "Additional requirement:";
      break;
  }

  const trimmedMessage = message.trim();
  const requirementSection = trimmedMessage
    ? `\n\n${reqLabel}\n${trimmedMessage}`
    : `\n\n${reqLabel}\nNone`;

  return `${intro}\n\nName: ${fullName.trim()}\nPhone: ${phone.trim()}\nLocation: ${city.trim()}${requirementSection}`;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    service: "",
    city: "",
    message: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [whatsappReady, setWhatsappReady] = useState(false);
  const [lastGeneratedUrl, setLastGeneratedUrl] = useState("");

  const hasTrackedStart = useRef(false);

  // Phone validation: Indian numbers (10 digits starting with 6-9, optional +91 or leading 0)
  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s\-]/g, "");
    return /^(\+91)?[6-9]\d{9}$/.test(cleaned);
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Please enter your full name.";
        return "";
      case "phone":
        if (!value.trim()) return "Please enter your 10-digit mobile number.";
        if (!validatePhone(value)) return "Please enter a valid 10-digit Indian mobile number.";
        return "";
      case "service":
        if (!value) return "Please select what you want to design.";
        return "";
      case "city":
        if (!value.trim()) return "Please enter your city or location.";
        return "";
      default:
        return "";
    }
  };

  const handleStartInteraction = () => {
    if (!hasTrackedStart.current) {
      hasTrackedStart.current = true;
      trackEvent("contact_form_start");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    handleStartInteraction();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "service" && value) {
      trackEvent("service_selected", { service: value });
    }

    if (touched[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleStartInteraction();

    const newErrors: FormErrors = {
      fullName: validateField("fullName", formData.fullName),
      phone: validateField("phone", formData.phone),
      service: validateField("service", formData.service),
      city: validateField("city", formData.city),
    };

    setTouched({
      fullName: true,
      phone: true,
      service: true,
      city: true,
      message: true,
    });

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => Boolean(err));
    if (hasErrors) {
      // Focus the first invalid field
      const firstInvalidField = Object.keys(newErrors).find(
        (key) => Boolean(newErrors[key as keyof FormErrors])
      );
      if (firstInvalidField) {
        const element = document.getElementById(firstInvalidField);
        element?.focus();
      }
      return;
    }

    // 1. Generate appropriate WhatsApp message
    const message = buildWhatsAppMessage(formData);

    // 2. Properly URL-encode
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${INTERIOCORE_PHONE}?text=${encodedMessage}`;

    setLastGeneratedUrl(whatsappUrl);
    setWhatsappReady(true);

    // Track analytics
    trackEvent("contact_form_submit", {
      service: formData.service,
      city: formData.city,
    });
    trackEvent("whatsapp_opened", {
      source: "contact_form",
      service: formData.service,
    });

    // 3. Open WhatsApp using official click-to-chat
    const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (!opened || opened.closed || typeof opened.closed === "undefined") {
      // Fallback for pop-up blocked environments
      window.location.href = whatsappUrl;
    }
  };

  return (
    <div className="bg-white border border-zinc-200/80 p-6 sm:p-10 shadow-sm">
      {/* Form Heading & Supporting Text */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-foreground leading-tight">
          GET A FREE DESIGN CONSULTATION
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed mt-2">
          Tell us a little about your requirement and we’ll help you with the next step.
        </p>
      </div>

      {/* Form Success UX: WhatsApp ready notice (does not claim message was already sent) */}
      {whatsappReady && (
        <div
          className="mb-8 p-4 sm:p-5 bg-emerald-50 border border-emerald-300 flex items-start gap-3.5"
          role="status"
        >
          <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-emerald-950 leading-relaxed">
              Your WhatsApp message is ready. Just press Send to contact InterioCore.
            </p>
            {lastGeneratedUrl && (
              <div className="mt-2.5">
                <a
                  href={lastGeneratedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 hover:text-emerald-950 underline cursor-pointer"
                  onClick={() =>
                    trackEvent("whatsapp_opened", {
                      source: "reopen_link",
                      service: formData.service,
                    })
                  }
                >
                  Click here if WhatsApp did not open automatically
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Field 1: Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-bold uppercase tracking-[0.12em] text-foreground mb-2"
          >
            FULL NAME <span className="text-brand-accent" aria-hidden="true">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            placeholder="Enter your name"
            value={formData.fullName}
            onFocus={handleStartInteraction}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full h-14 px-4 bg-white border text-foreground placeholder:text-zinc-400 text-sm sm:text-base transition-colors rounded-none outline-none ${
              errors.fullName
                ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                : "border-zinc-300 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
            }`}
          />
          {errors.fullName && (
            <p
              id="fullName-error"
              className="text-xs text-red-600 flex items-center gap-1.5 mt-1.5 font-medium"
              role="alert"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Field 2: Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-bold uppercase tracking-[0.12em] text-foreground mb-2"
          >
            PHONE NUMBER <span className="text-brand-accent" aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            placeholder="Enter your 10-digit mobile number"
            value={formData.phone}
            onFocus={handleStartInteraction}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full h-14 px-4 bg-white border text-foreground placeholder:text-zinc-400 text-sm sm:text-base transition-colors rounded-none outline-none ${
              errors.phone
                ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                : "border-zinc-300 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
            }`}
          />
          {errors.phone && (
            <p
              id="phone-error"
              className="text-xs text-red-600 flex items-center gap-1.5 mt-1.5 font-medium"
              role="alert"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Field 3: What Do You Want to Design? */}
        <div>
          <label
            htmlFor="service"
            className="block text-xs font-bold uppercase tracking-[0.12em] text-foreground mb-2"
          >
            WHAT DO YOU WANT TO DESIGN? <span className="text-brand-accent" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.service)}
              aria-describedby={errors.service ? "service-error" : undefined}
              value={formData.service}
              onFocus={handleStartInteraction}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full h-14 px-4 bg-white border text-sm sm:text-base transition-colors rounded-none appearance-none cursor-pointer pr-10 outline-none ${
                errors.service
                  ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  : "border-zinc-300 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
              } ${formData.service ? "text-foreground" : "text-zinc-400"}`}
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="Modular Kitchen">Modular Kitchen</option>
              <option value="Wardrobe">Wardrobe</option>
              <option value="TV Unit">TV Unit</option>
              <option value="Complete Home Interior">Complete Home Interior</option>
              <option value="Other">Other</option>
            </select>
            <ChevronDown
              className="w-4 h-4 text-zinc-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
          </div>
          {errors.service && (
            <p
              id="service-error"
              className="text-xs text-red-600 flex items-center gap-1.5 mt-1.5 font-medium"
              role="alert"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.service}</span>
            </p>
          )}
        </div>

        {/* Field 4: City / Location */}
        <div>
          <label
            htmlFor="city"
            className="block text-xs font-bold uppercase tracking-[0.12em] text-foreground mb-2"
          >
            CITY / LOCATION <span className="text-brand-accent" aria-hidden="true">*</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? "city-error" : undefined}
            placeholder="e.g. Jharsuguda"
            value={formData.city}
            onFocus={handleStartInteraction}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full h-14 px-4 bg-white border text-foreground placeholder:text-zinc-400 text-sm sm:text-base transition-colors rounded-none outline-none ${
              errors.city
                ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-600"
                : "border-zinc-300 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
            }`}
          />
          {errors.city && (
            <p
              id="city-error"
              className="text-xs text-red-600 flex items-center gap-1.5 mt-1.5 font-medium"
              role="alert"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{errors.city}</span>
            </p>
          )}
        </div>

        {/* Field 5: Short Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold uppercase tracking-[0.12em] text-foreground mb-2"
          >
            SHORT MESSAGE{" "}
            <span className="text-zinc-400 font-normal text-[11px] normal-case tracking-normal ml-1">
              (Optional)
            </span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us what you are looking for..."
            value={formData.message}
            onFocus={handleStartInteraction}
            onChange={handleChange}
            className="w-full p-4 bg-white border border-zinc-300 text-foreground placeholder:text-zinc-400 text-sm sm:text-base focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors rounded-none resize-y min-h-[110px]"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white transition-all duration-200 h-14 sm:h-16 px-8 text-xs sm:text-sm font-bold tracking-[0.15em] uppercase flex items-center justify-center gap-3 shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer rounded-none outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
            aria-label="Get Free Consultation"
          >
            GET FREE CONSULTATION
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>

          {/* Privacy Note */}
          <p className="text-xs text-zinc-500 font-light text-center sm:text-left mt-3">
            Your details are only used to respond to your enquiry.
          </p>
        </div>
      </form>
    </div>
  );
}
