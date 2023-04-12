await import("node:crypto");
const serializeNonPOJOs = (obj) => {
  return structuredClone(obj);
};
const getImageURL = (collectionId, recordId, fileName, size = "0x0") => {
  return `https://lazy-traffic.pockethost.io//api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};
export {
  getImageURL as g,
  serializeNonPOJOs as s
};
