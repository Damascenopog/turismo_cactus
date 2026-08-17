import { Language } from "@/context/LanguageContext";

const WHATSAPP_NUMBER = "5521999999999"; // Official Tour Rocinha WhatsApp

const DEFAULT_MESSAGES: Record<Language, string> = {
  pt: "Olá! Gostaria de agendar o Tour Rocinha com a Cactus Turismo. Poderia me enviar os horários e valores?",
  en: "Hello! I would like to book the Rocinha Favela Tour with Cactus Turismo. Could you please send me the schedule and rates?",
  es: "¡Hola! Me gustaría reservar el Tour por la Favela Rocinha con Cactus Turismo. ¿Podrían enviarme los horarios y precios?",
  de: "Hallo! Ich möchte die Rocinha Favela Tour mit Cactus Turismo buchen. Könnten Sie mir bitte die Zeiten und Preise senden?",
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
