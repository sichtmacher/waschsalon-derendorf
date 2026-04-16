import type { FaqEntry } from '../data/faq';

export interface LocalBusinessInput {
  name: string;
  streetAddress: string;
  postalCode: string;
  addressLocality: string;
  addressCountry: string;
  telephone: string;
  url: string;
  email?: string;
  priceRange?: string;
  geo?: { latitude: number; longitude: number };
}

// Implementation lands in plan 02-04. Signature frozen here so downstream plans can import.
export function localBusinessJsonLd(_b: LocalBusinessInput): string {
  throw new Error('localBusinessJsonLd: implementation pending — see plan 02-04');
}

export function faqPageJsonLd(_entries: FaqEntry[]): string {
  throw new Error('faqPageJsonLd: implementation pending — see plan 02-04');
}
