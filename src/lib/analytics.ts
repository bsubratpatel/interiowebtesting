/**
 * Analytics event tracking helper
 * Clean, lightweight, and ready for GTM / GA4 / custom tracking without external scripts.
 */
export type AnalyticsEvent =
  | "contact_form_start"
  | "service_selected"
  | "contact_form_submit"
  | "whatsapp_opened"
  | "call_clicked";

export function trackEvent(event: AnalyticsEvent, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  // 1. Dispatch custom DOM event for local/custom listeners
  window.dispatchEvent(
    new CustomEvent("interiocore_analytics", {
      detail: { event, timestamp: Date.now(), ...data },
    })
  );

  // 2. Integration hook for GTM / GA4 dataLayer if present
  const win = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
  if (Array.isArray(win.dataLayer)) {
    win.dataLayer.push({ event, ...data });
  }

  // 3. Optional dev console output
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event]: ${event}`, data);
  }
}
