import { Language } from "@/context/LanguageContext";

const WHATSAPP_NUMBER = "5521990422998"; // Official Cactus Turismo WhatsApp

const DEFAULT_MESSAGES: Record<Language, string> = {
  pt: "Olá! Gostaria de informações sobre os passeios da Cactus Turismo no Rio de Janeiro. Poderia me enviar os detalhes?",
  en: "Hello! I would like information about Cactus Turismo tours in Rio de Janeiro. Could you please send me details?",
  es: "¡Hola! Me gustaría información sobre los tours de Cactus Turismo en Río de Janeiro. ¿Podrían enviarme los detalles?",
  de: "Hallo! Ich möchte Informationen zu den Touren von Cactus Turismo in Rio de Janeiro erhalten. Könnten Sie mir Details senden?",
};

export type TourType = "rocinha" | "vidigal" | "rioTour" | "baileFunk" | "custom";

const TOUR_MESSAGES: Record<TourType, Record<Language, string>> = {
  rocinha: {
    pt: "Olá! Gostaria de agendar o Tour Rocinha com a Cactus Turismo. Poderia me enviar os horários e valores?",
    en: "Hello! I would like to book the Rocinha Favela Tour with Cactus Turismo. Could you please send me the schedule and rates?",
    es: "¡Hola! Me gustaría reservar el Tour Favela Rocinha con Cactus Turismo. ¿Podrían enviarme los horarios y precios?",
    de: "Hallo! Ich möchte die Rocinha Favela Tour mit Cactus Turismo buchen. Könnten Sie mir die Zeiten und Preise senden?",
  },
  vidigal: {
    pt: "Olá! Gostaria de agendar o Tour Vidigal & Trilha Morro Dois Irmãos. Poderia me passar mais informações e valores?",
    en: "Hello! I would like to book the Vidigal Tour & Two Brothers Hill Hike. Could you please send me more information and rates?",
    es: "¡Hola! Me gustaría reservar el Tour Vidigal y la Caminata del Morro Dos Hermanos. ¿Podrían enviarme más información y precios?",
    de: "Hallo! Ich möchte die Vidigal Tour & Morro Dois Irmãos Wanderung buchen. Könnten Sie mir weitere Infos und Preise senden?",
  },
  rioTour: {
    pt: "Olá! Gostaria de informações sobre o Rio Tour Completo (Cristo, Selarón, Santa Teresa, etc.). Como funciona o agendamento?",
    en: "Hello! I would like information about the Complete Rio City Tour (Christ the Redeemer, Selarón, etc.). How does booking work?",
    es: "¡Hola! Me gustaría información sobre el City Tour Completo por Río (Cristo, Selarón, etc.). ¿Cómo funciona la reserva?",
    de: "Hallo! Ich möchte Infos zur vollständigen Rio City Tour (Christusstatue, Selarón Treppe, etc.). Wie funktioniert die Buchung?",
  },
  baileFunk: {
    pt: "Olá! Gostaria de viver a experiência do Baile Funk Carioca com a Cactus Turismo. Poderia me passar as próximas datas e detalhes de segurança?",
    en: "Hello! I would like to experience the Carioca Baile Funk with Cactus Turismo. Could you please share the upcoming dates and safety details?",
    es: "¡Hola! Me gustaría vivir la experiencia del Baile Funk Carioca con Cactus Turismo. ¿Podrían enviarme las próximas fechas e detalhes?",
    de: "Hallo! Ich möchte das Baile Funk Erlebnis mit Cactus Turismo buchen. Könnten Sie mir die nächsten Termine und Sicherheitsinfos senden?",
  },
  custom: {
    pt: "Olá! Gostaria de montar um pacote de passeios personalizado com a Cactus Turismo no Rio. Poderia me atender?",
    en: "Hello! I would like to create a customized tour package with Cactus Turismo in Rio. Could you help me?",
    es: "¡Hola! Me gustaría armar un paquete de tours personalizado con Cactus Turismo en Río. ¿Podrían atenderme?",
    de: "Hallo! Ich möchte ein maßgeschneidertes Tourpaket mit Cactus Turismo in Rio zusammenstellen. Könnten Sie mir helfen?",
  },
};

export function getWhatsAppLink(lang: Language, customMessage?: string): string {
  const message = customMessage || DEFAULT_MESSAGES[lang] || DEFAULT_MESSAGES.pt;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getTourWhatsAppLink(tour: TourType, lang: Language): string {
  const message = TOUR_MESSAGES[tour]?.[lang] || TOUR_MESSAGES[tour]?.pt || DEFAULT_MESSAGES[lang] || DEFAULT_MESSAGES.pt;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getBookingWhatsAppLink(
  lang: Language,
  name?: string,
  formattedDate?: string,
  peopleCount: number = 1
): string {
  const clientName = name?.trim() ? name.trim() : null;
  const dateStr = formattedDate?.trim() ? formattedDate.trim() : null;

  switch (lang) {
    case "en":
      if (clientName && dateStr) {
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          `Hello! My name is ${clientName}. I would like to book the Rocinha Favela Tour for ${dateStr} (${peopleCount} guest${peopleCount > 1 ? "s" : ""}). Could you please confirm availability?`
        )}`;
      }
      return getTourWhatsAppLink("rocinha", "en");

    case "es":
      if (clientName && dateStr) {
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          `¡Hola! Mi nombre es ${clientName}. Me gustaría reservar el Tour Favela Rocinha para el día ${dateStr} (${peopleCount} persona${peopleCount > 1 ? "s" : ""}). ¿Podrían confirmarme la disponibilidad?`
        )}`;
      }
      return getTourWhatsAppLink("rocinha", "es");

    case "de":
      if (clientName && dateStr) {
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          `Hallo! Mein Name ist ${clientName}. Ich möchte die Rocinha Favela Tour für den ${dateStr} (${peopleCount} Person${peopleCount > 1 ? "en" : ""}) buchen. Könnten Sie die Verfügbarkeit bestätigen?`
        )}`;
      }
      return getTourWhatsAppLink("rocinha", "de");

    case "pt":
    default:
      if (clientName && dateStr) {
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          `Olá! Meu nome é ${clientName}. Gostaria de agendar o Tour Rocinha para o dia ${dateStr} (${peopleCount} pessoa${peopleCount > 1 ? "s" : ""}). Poderia me confirmar a disponibilidade?`
        )}`;
      }
      return getTourWhatsAppLink("rocinha", "pt");
  }
}

export function getMultiTourBookingWhatsAppLink(
  lang: Language,
  name: string,
  formattedDate: string,
  peopleCount: number,
  selectedTourTitles: string[],
  notes?: string
): string {
  const clientName = name.trim() || "Visitante";
  const toursList = selectedTourTitles.length > 0 
    ? selectedTourTitles.map((t) => `• ${t}`).join("\n") 
    : "• Tour Rocinha";

  let msg = "";

  if (lang === "en") {
    msg = `Hello! My name is ${clientName}.\nI would like to book the following tour(s) for ${peopleCount} guest${peopleCount > 1 ? "s" : ""}${formattedDate ? ` on ${formattedDate}` : ""}:\n\n${toursList}\n\n${notes ? `Notes: ${notes}\n\n` : ""}Could you please confirm availability and details?`;
  } else if (lang === "es") {
    msg = `¡Hola! Mi nombre es ${clientName}.\nMe gustaría reservar los siguientes tour(s) para ${peopleCount} persona${peopleCount > 1 ? "s" : ""}${formattedDate ? ` el día ${formattedDate}` : ""}:\n\n${toursList}\n\n${notes ? `Notas: ${notes}\n\n` : ""}¿Podrían confirmarme la disponibilidad y detalles?`;
  } else if (lang === "de") {
    msg = `Hallo! Mein Name ist ${clientName}.\nIch möchte folgende(n) Tour(en) für ${peopleCount} Person${peopleCount > 1 ? "en" : ""}${formattedDate ? ` am ${formattedDate}` : ""} buchen:\n\n${toursList}\n\n${notes ? `Hinweise: ${notes}\n\n` : ""}Könnten Sie bitte die Verfügbarkeit und Details bestätigen?`;
  } else {
    msg = `Olá! Meu nome é ${clientName}.\nGostaria de agendar o(s) seguinte(s) passeio(s) para ${peopleCount} pessoa${peopleCount > 1 ? "s" : ""}${formattedDate ? ` no dia ${formattedDate}` : ""}:\n\n${toursList}\n\n${notes ? `Observações: ${notes}\n\n` : ""}Poderia me passar a disponibilidade e valores?`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
