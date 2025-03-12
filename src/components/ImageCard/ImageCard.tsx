import css from './ImageCard.module.css';

const ImageCard = ({ dataAttribute, onLoad }) => {
  return (
    <div>
      <img
        src={dataAttribute.urls.small}
        alt={dataAttribute}
        className={css.card}
        onLoad={onLoad}
      />
      <div className={css.cardDescription}>
        <div className={css.cardLikes}>
          <p className={css.cartText}>{dataAttribute.likes}</p>
          <svg className={css.likeIcon} width={15} height={15}>
            <use xlinkHref="/sprite.svg#icon-heart"></use>
          </svg>
        </div>
        <div>
          <svg className={css.likeIcon} width={15} height={15}>
            <use xlinkHref="/sprite.svg#icon-user"></use>
          </svg>
          <p className={css.cartText}>{dataAttribute.user.username}</p>
        </div>
        <div>
          <svg className={css.likeIcon} width={15} height={15}>
            <use xlinkHref="/sprite.svg#icon-username"></use>
          </svg>
          <p className={css.cartText}>{dataAttribute.user.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
