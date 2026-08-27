import { Language } from "@/context/LanguageContext";

const WHATSAPP_NUMBER = "5521990422998"; // Official Tour Cactus WhatsApp

const DEFAULT_MESSAGES: Record<Language, string> = {
  pt: "Olá! Gostaria de agendar um passeio com a Cactus Turismo. Poderia me enviar os horários e valores?",
  en: "Hello! I would like to book a tour with Cactus Turismo. Could you please send me the schedule and rates?",
  es: "¡Hola! Me gustaría reservar un tour con Cactus Turismo. ¿Podrían enviarme los horarios y precios?",
  de: "Hallo! Ich möchte eine Tour mit Cactus Turismo buchen. Könnten Sie mir bitte die Zeiten und Preise senden?",
};

export function getWhatsAppLink(lang: Language, customMessage?: string): string {
  const message = customMessage || DEFAULT_MESSAGES[lang] || DEFAULT_MESSAGES.pt;
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
      return getWhatsAppLink("en");

    case "es":
      if (clientName && dateStr) {
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          `¡Hola! Mi nombre es ${clientName}. Me gustaría reservar el Tour Favela Rocinha para el día ${dateStr} (${peopleCount} persona${peopleCount > 1 ? "s" : ""}). ¿Podrían confirmarme la disponibilidad?`
        )}`;
      }
      return getWhatsAppLink("es");

    case "de":
      if (clientName && dateStr) {
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          `Hallo! Mein Name ist ${clientName}. Ich möchte die Rocinha Favela Tour für den ${dateStr} (${peopleCount} Person${peopleCount > 1 ? "en" : ""}) buchen. Könnten Sie die Verfügbarkeit bestätigen?`
        )}`;
      }
      return getWhatsAppLink("de");

    case "pt":
    default:
      if (clientName && dateStr) {
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          `Olá! Meu nome é ${clientName}. Gostaria de agendar o Tour Rocinha para o dia ${dateStr} (${peopleCount} pessoa${peopleCount > 1 ? "s" : ""}). Poderia me confirmar a disponibilidade?`
        )}`;
      }
      return getWhatsAppLink("pt");
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
