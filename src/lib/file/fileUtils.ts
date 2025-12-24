export const base64ToFile = (
  base64: string,
  filename: string
): File => {
  const clean = base64.includes("base64,")
    ? base64.split("base64,")[1]
    : base64;

  let mime = "image/jpeg";
  if (base64.startsWith("iVBOR")) mime = "image/png";
  if (base64.startsWith("UklGR")) mime = "image/webp";

  const binary = atob(clean);
  const bytes = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  return new File([bytes], filename, { type: mime });
};
