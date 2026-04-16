export type FaqCategory = 'bedienung' | 'preise' | 'service';

export interface FaqEntry {
  category: FaqCategory;
  question: string;
  answer: string;
}

export const categoryLabels: Record<FaqCategory, string> = {
  bedienung: 'Bedienung & Technik',
  preise: 'Preise & Bezahlung',
  service: 'Service & Standort',
};

export const faqs: FaqEntry[] = [
  {
    category: 'bedienung',
    question: 'Wie funktioniert der Waschsalon?',
    answer: 'Du wählst eine freie Maschine, zahlst mit Karte oder Münze direkt an der Maschine, befüllst sie und startest das Programm. Während der Waschgang läuft, kannst du warten, nach Hause gehen oder in der Nähe etwas erledigen.',
  },
  {
    category: 'bedienung',
    question: 'Wie lange dauert ein Waschgang und das Trocknen?',
    answer: 'Ein Waschgang dauert je nach Programm 30 bis 60 Minuten. Das Trocknen rechnest du in 10-Minuten-Schritten à 1,80 € ab — die meisten Wäscheladungen brauchen 20 bis 40 Minuten.',
  },
  {
    category: 'bedienung',
    question: 'Welche Programme stehen zur Auswahl?',
    answer: 'Kurz, Standard, Buntwäsche, Feinwäsche, Koch-/Buntwäsche 60 °C und Öko-Programm — direkt an der Maschine wählbar.',
  },
  {
    category: 'bedienung',
    question: 'Kann ich auch große Stücke wie Bettdecken waschen?',
    answer: 'Ja. Die 15-kg-Maschine nimmt Bettdecken, Daunendecken und große Bettwäsche problemlos auf.',
  },
  {
    category: 'bedienung',
    question: 'Muss ich Waschmittel mitbringen?',
    answer: 'Nein, vor Ort ist Waschmittel erhältlich. Wenn du dein eigenes bevorzugst, kannst du es natürlich mitbringen.',
  },
  {
    category: 'preise',
    question: 'Was kostet eine Wäsche?',
    answer: 'Ab 5,00 € für die 7-kg-Maschine, ab 10,00 € für die 15-kg-Maschine. Der Trockner kostet 1,80 € pro 10 Minuten.',
  },
  {
    category: 'preise',
    question: 'Kann ich mit Karte oder nur mit Münzen zahlen?',
    answer: 'Beides. Jede Maschine akzeptiert Kartenzahlung und Münzen — such dir aus, was für dich bequemer ist.',
  },
  {
    category: 'service',
    question: 'Wann habt ihr geöffnet?',
    answer: 'Jeden Tag von 06:00 bis 22:00 Uhr, auch an Sonn- und Feiertagen.',
  },
  {
    category: 'service',
    question: 'Gibt es WLAN und Sitzmöglichkeiten?',
    answer: 'Ja, kostenloses WLAN und Sitzplätze im Salon. Damit dir die Wartezeit nicht lang wird.',
  },
  {
    category: 'service',
    question: 'Wo kann ich parken?',
    answer: 'Straßenparkplätze direkt vor dem Salon, ein Parkhaus in Laufnähe, und der Salon ist hervorragend mit U-Bahn und Bus erreichbar.',
  },
  {
    category: 'service',
    question: 'Kann ich während des Waschgangs weggehen?',
    answer: 'Ja. Der Salon ist videoüberwacht und deine Wäsche ist in der geschlossenen Maschine sicher. Komm einfach rechtzeitig zum Programmende zurück.',
  },
  {
    category: 'service',
    question: 'Ist der Salon videoüberwacht?',
    answer: 'Ja, zu deiner und aller Gäste Sicherheit. Details zur Videoüberwachung findest du in unserer Datenschutzerklärung.',
  },
];
