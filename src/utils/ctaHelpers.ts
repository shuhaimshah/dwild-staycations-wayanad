import { siteConfig } from '../data/siteConfig';

export const DEFAULT_WHATSAPP_MESSAGE = "Hi DWILD, I’m interested in staying at your property. Could you please share availability and booking details?";

export function getWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string | null {
  const number = siteConfig.contact.whatsapp.trim().replace(/[^\d]/g, '');
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getPhoneUrl(): string | null {
  const phone = siteConfig.contact.phone.trim();
  if (!phone) return null;
  return `tel:${phone}`;
}

export function getEmailUrl(): string | null {
  const email = siteConfig.contact.email.trim();
  if (!email) return null;
  return `mailto:${email}`;
}

export function getGoogleMapsUrl(): string | null {
  const url = siteConfig.location.googleMaps.trim();
  if (!url) return null;
  return url;
}

export function getInstagramUrl(): string {
  return siteConfig.social.instagram || "https://www.instagram.com/dwildstays.in/";
}

export function getFacebookUrl(): string | null {
  const url = siteConfig.social.facebook.trim();
  if (!url) return null;
  return url;
}

export function getExternalBookingUrl(): string | null {
  const url = siteConfig.booking.bookingUrl.trim();
  if (!url) return null;
  return url;
}
