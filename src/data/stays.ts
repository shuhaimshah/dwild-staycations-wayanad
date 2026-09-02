import { StayItem } from '../types';

/**
 * 100% REAL DWILD PROPERTY PHOTOGRAPHS
 * Uses actual uploaded photos for all accommodations.
 * Neutral confirmed labels per Section 8 instructions.
 */
export const staysData: StayItem[] = [
  {
    id: "stay-01",
    slug: "dwild-aframe-sanctuary",
    name: "DWILD STAY — A-Frame Sanctuary",
    type: "Forest A-Frame",
    shortDesc: "Signature timber A-frame cabin illuminated by ambient ground lights along a paved stone pathway.",
    description: "Framed by ancient forest trees and misty woodland, this signature timber A-frame accommodation features tall glass facades, warm ambient lights, a private wooden deck, and stone pathways leading deep into nature.",
    maxGuests: 2,
    bedConfig: "1 King Bed",
    view: "Rainforest Canopy & Twilight Pathway View",
    sizeSqFt: 450,
    priceNote: "Rates available upon enquiry",
    amenities: [
      "Architectural Glass & Timber Facade",
      "Private Stone & Grass Pathway",
      "Plush Mattress & Organic Linens",
      "Ensuite Bath with Rainforest Shower",
      "Warm Ambient Outdoor & Indoor Lighting",
      "Complimentary Forest Trail Access"
    ],
    heroImage: "/assets/stays/dwild-real-aframe-twilight.jpg",
    gallery: [
      "/assets/stays/dwild-real-aframe-twilight.jpg",
      "/assets/stays/dwild-real-aframe.jpg",
      "/assets/forest/dwild-real-sunrays-forest.jpg"
    ],
    isPlaceholderData: true,
  },
  {
    id: "stay-02",
    slug: "dwild-wooden-cabin",
    name: "DWILD STAY — Wooden Forest Cabin",
    type: "Teak Wood Cabin",
    shortDesc: "A traditional wooden eco-cabin with clay tiled roof nestled under deep jungle shade.",
    description: "Surrounded by lush teak and wild foliage, this warm wooden cabin offers peaceful privacy, rustic entry stairs, and floor-to-ceiling forest views.",
    maxGuests: 2,
    bedConfig: "1 Queen Bed",
    view: "Dense Forest Shade & Garden View",
    sizeSqFt: 380,
    priceNote: "Rates available upon enquiry",
    amenities: [
      "Natural Teak & Tiled Roof Architecture",
      "Private Entry Stairs",
      "Ensuite Luxury Bathroom",
      "Organic Bath Refreshments",
      "Secluded Reading Terrace",
      "24/7 Power Backup"
    ],
    heroImage: "/assets/stays/dwild-real-cabin.jpg",
    gallery: [
      "/assets/stays/dwild-real-cabin.jpg",
      "/assets/stays/dwild-real-aframe-twilight.jpg",
      "/assets/forest/dwild-real-sunrays-forest.jpg"
    ],
    isPlaceholderData: true,
  },
  {
    id: "stay-03",
    slug: "dwild-mud-cottage",
    name: "DWILD RETREAT — Kerala Mud Cottage",
    type: "Traditional Eco Cottage",
    shortDesc: "Authentic earth-walled cottage featuring handcrafted white mandala artwork under rainforest trees.",
    description: "Built using traditional eco-friendly mud plaster walls and natural timber roofing, combining regional heritage art with immersive forest quietude.",
    maxGuests: 2,
    bedConfig: "1 Queen Bed",
    view: "Ancient Forest & Curved Garden Path",
    sizeSqFt: 420,
    priceNote: "Rates available upon enquiry",
    amenities: [
      "Traditional Eco-Plaster & Timber Construction",
      "Handpainted Mandala Artwork Facade",
      "Private Curved Garden Pathway",
      "Natural Earth Insulation",
      "Dedicated Stay Host Concierge"
    ],
    heroImage: "/assets/stays/dwild-real-mud-cottage.jpg",
    gallery: [
      "/assets/stays/dwild-real-mud-cottage.jpg",
      "/assets/forest/dwild-real-sunrays-forest.jpg",
      "/assets/experiences/dwild-real-campfire.jpg"
    ],
    isPlaceholderData: true,
  }
];
