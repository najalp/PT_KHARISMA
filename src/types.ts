// Types for PT Kharisma Bangun Banua Property Portal

export interface SpecItem {
  id: string;
  label: string;
  value: string;
}

export interface NearbyAmenity {
  category: "education" | "healthcare" | "shopping" | "transport" | "leisure";
  name: string;
  distanceMinutes: number;
}

export interface ProjectFeatures {
  icon: string;
  title: string;
  description: string;
}

export interface PropertyType {
  nameName: string; // e.g. Tipe 45 / Tipe 60 / Tipe 36
  price: number;
  landSize: number; // in m2
  buildingSize: number; // in m2
  bedrooms: number;
  bathrooms: number;
  installmentsMonthEst: number; // in Rupiah
  gallery: string[];
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  type: "premium" | "affordable";
  location: string;
  fullAddress: string;
  priceStart: number; // in IDR
  priceEnd: number; // in IDR
  shortDescription: string;
  longDescription: string;
  mainImage: string;
  specifications: SpecItem[];
  features: ProjectFeatures[];
  typesList: PropertyType[];
  nearbyAmenities: NearbyAmenity[];
  imagesGallery: {
    url: string;
    caption: string;
    category: "exterior" | "interior" | "siteplan" | "construction";
  }[];
  bookingFee: number; // IDR booking fee
  mapEmbedUrl?: string; // mock coordinate
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g. PNS / ASN Dinas Kehutanan, Pengusaha Kuliner
  project: string; // e.g. D'Royal Kharisma
  quote: string;
  rating: number; // out of 5
  avatar: string; // SVG or initials representation
}

export interface InquiryFormData {
  name: string;
  phoneNumber: string;
  projectSelected: string;
  houseType: string;
  employmentType: "asn" | "private" | "entrepreneur" | "other";
  estimatedTenor: number; // years
  message: string;
}
