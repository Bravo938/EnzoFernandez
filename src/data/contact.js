// Datos de contacto configurables.
export const whatsapp = {
  // Formato internacional sin signos: código de país + número.
  phoneNumber: "5491100000000",
  message: "Hola, quiero hablar con alguien sobre lo que leí en Hay Algo Más.",
};

export const whatsappLink = `https://wa.me/${whatsapp.phoneNumber}?text=${encodeURIComponent(
  whatsapp.message
)}`;
