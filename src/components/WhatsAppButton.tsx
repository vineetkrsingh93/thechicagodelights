import { MessageCircle } from "lucide-react";

const whatsappNumber = "919996553545";
const whatsappMessage = encodeURIComponent("Hi, I want to know about Chicago Delights franchise.");

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}