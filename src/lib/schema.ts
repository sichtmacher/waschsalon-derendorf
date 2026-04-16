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

// Pitfall 9 guard: escape closing </script> substrings so JSON-LD cannot break out of <script>.
function safeJson(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function localBusinessJsonLd(b: LocalBusinessInput): string {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LaundryService',
    name: b.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: b.streetAddress,
      postalCode: b.postalCode,
      addressLocality: b.addressLocality,
      addressCountry: b.addressCountry,
    },
    telephone: b.telephone,
    url: b.url,
    ...(b.email && { email: b.email }),
    ...(b.priceRange && { priceRange: b.priceRange }),
    ...(b.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: b.geo.latitude,
        longitude: b.geo.longitude,
      },
    }),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '06:00',
      closes: '22:00',
    },
  };
  return safeJson(data);
}

export function faqPageJsonLd(entries: FaqEntry[]): string {
  return safeJson({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((e) => ({
      '@type': 'Question',
      name: e.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: e.answer,
      },
    })),
  });
}
