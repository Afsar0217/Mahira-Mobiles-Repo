export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
}

export interface GalleryItem {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
}