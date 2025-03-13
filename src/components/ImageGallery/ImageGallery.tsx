import { DataAttribute } from '../App.types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { ImageGalleryProps } from './ImageGallery.types';

const ImageGallery = ({
  dataImages,
  imageRefs,
  onImageClick,
  onLoad,
}: ImageGalleryProps) => {
  return (
    <ul className={css.imagesList}>
      {dataImages.map((card: DataAttribute, index: number) => (
        <li
          key={card.id}
          className={css.imagesItem}
          ref={el => (imageRefs.current[index] = el)}
          onClick={() => {
            onImageClick(card);
          }}
        >
          <ImageCard dataAttribute={card} onLoad={() => onLoad(index)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
