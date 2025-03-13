import ReactModal from 'react-modal';
import css from './ImageModal.module.css';
import { useEffect } from 'react';
import { ImageModalProps } from './ImageModal.types';

const ImageModal = ({ onClose, isOpen, data }: ImageModalProps) => {
  const appElement = document.getElementById('root') as HTMLElement;
  ReactModal.setAppElement(appElement);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      closeTimeoutMS={0}
      appElement={appElement}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.modalContent}>
        <button onClick={onClose} className={css.closeBtn}>
          <svg width={25} height={25} className={css.iconClose}>
            <use xlinkHref="/sprite.svg#icon-close"></use>
          </svg>
        </button>
        <img
          src={data?.urls?.regular}
          alt="Large image"
          className={css.image}
        />
        {data?.user?.bio ? (
          <div className={css.description}>
            <svg className={css.descriptionIcon} width={20} height={20}>
              <use xlinkHref="/sprite.svg#icon-user"></use>
            </svg>
            <span className={`${css.descriptionText} ${css.descriptionSpan}`}>
              {data?.user?.first_name} {data?.user?.last_name}:
            </span>
            <p className={css.descriptionText}>{data?.user?.bio}</p>
          </div>
        ) : (
          <div className={css.description}>
            <svg className={css.descriptionIcon} width={20} height={20}>
              <use xlinkHref="/sprite.svg#icon-user"></use>
            </svg>
            <span className={`${css.descriptionText} ${css.descriptionSpan}`}>
              {data?.user?.first_name}
            </span>
          </div>
        )}
      </div>
    </ReactModal>
  );
};

export default ImageModal;
