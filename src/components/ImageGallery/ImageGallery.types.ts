import { DataAttribute } from '../App.types';

interface User {
  username: string;
  name: string;
}

export interface ImageGalleryProps {
  dataImages: DataAttribute[];
  imageRefs: React.MutableRefObject<(HTMLLIElement | null)[]>;
  onImageClick: (card: DataAttribute) => void;
  onLoad: (index: number) => void;
}
