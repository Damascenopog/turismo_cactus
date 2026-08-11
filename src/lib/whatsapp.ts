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
