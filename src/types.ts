export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    subTagline: string;
    location: string;
    region: string;
  };
  contact: {
    phone: string;
    email: string;
    whatsapp: string;
  };
  social: {
    instagram: string;
    facebook: string;
    mandharamLuxury?: string;
  };
  location: {
    googleMaps: string;
    address: string;
    coordinates?: string;
    coords?: { lat: number; lng: number };
  };
  booking: {
    bookingUrl: string;
    bookingMode: "enquiry" | "external";
  };
}

export interface StayItem {
  id: string;
  slug: string;
  name: string;
  type: string;
  shortDesc: string;
  description: string;
  maxGuests: number;
  bedConfig: string;
  view: string;
  sizeSqFt?: number;
  priceNote: string;
  amenities: string[];
  heroImage: string;
  gallery: string[];
  isPlaceholderData: true;
}

export interface ExperienceItem {
  id: string;
  title: string;
  category: "Nature" | "Adventure" | "Relaxation" | "Culture" | "Dining";
  shortDesc: string;
  fullDesc: string;
  image: string;
  tag: string;
  isPlaceholderData: true;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "STAYS" | "FOREST" | "MOMENTS" | "EXPERIENCES" | "DETAILS";
  image: string;
  caption: string;
  aspectRatio: "square" | "portrait" | "landscape";
}

export interface WayanadAttraction {
  id: string;
  name: string;
  category: string;
  distanceNote: string;
  travelTimeNote: string;
  description: string;
  image: string;
  isPlaceholderData: true;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  stayType: string;
  message: string;
}
