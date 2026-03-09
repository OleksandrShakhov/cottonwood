import gallery from "@/data/gallery.json";

export type GalleryItem = {
  src: string;
  title: string;
};

export function getGallery(): GalleryItem[] {
  return gallery;
}