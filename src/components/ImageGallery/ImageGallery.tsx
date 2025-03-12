import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ dataImages, imageRefs, onImageClick, onLoad }) => {
  return (
    <ul className={css.imagesList}>
      {dataImages.map((card, index) => (
        <li
          key={card.id}
          className={css.imagesItem}
          ref={el => (imageRefs.current[index] = el)}
          onClick={() => onImageClick(card)}
        >
          <ImageCard dataAttribute={card} onLoad={() => onLoad(index)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
