import { WHATSAPP_URL } from "@/lib/contact";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-soft hover:scale-110 transition-transform">
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current" aria-hidden="true">
          <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 5.33c-5.91 0-10.71 4.8-10.71 10.71 0 1.89.5 3.74 1.44 5.36L5 27.33l6.06-1.59c1.56.85 3.32 1.3 5.06 1.3 5.91 0 10.71-4.8 10.71-10.71S21.93 5.33 16.02 5.33zm0 19.62c-1.55 0-3.07-.42-4.4-1.21l-.32-.19-3.59.94.96-3.5-.21-.33c-.86-1.37-1.32-2.96-1.32-4.61 0-4.91 3.99-8.9 8.9-8.9s8.9 3.99 8.9 8.9-3.99 8.9-8.9 8.9z" />
        </svg>
      </span>
    </a>
  );
}
