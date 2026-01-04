// Get MIME type from a base64 string
export const getMimeTypeFromBase64 = (base64: string): string => {
  if (base64.startsWith('/9j/')) return 'image/jpeg';
  if (base64.startsWith('iVBORw0KGgo')) return 'image/png';
  if (base64.startsWith('R0lGOD')) return 'image/gif';
  return 'image/png';
};
