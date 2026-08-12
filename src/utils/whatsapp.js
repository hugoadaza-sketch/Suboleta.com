export function whatsappMessage(message) {

  const phone = "573019203710";

  const url = 
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return url;

}