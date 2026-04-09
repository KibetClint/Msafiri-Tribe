import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "254700000000"; // Replace with actual number
  const message = encodeURIComponent("Hello! I'd like to enquire about your safari packages.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" stroke="white" />
    </a>
  );
};

export default WhatsAppButton;
