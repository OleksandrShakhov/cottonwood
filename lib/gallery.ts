import gallery from "@/data/gallery.json";

export type GalleryItem = {
  src: string;
  title: string;
};

export function getGallery(): GalleryItem[] {
  return (gallery as { src: string; title?: string }[]).map((item, index) => ({
    src: item.src,
    title: item.title ?? `Image ${index + 1}`,
  }));
}