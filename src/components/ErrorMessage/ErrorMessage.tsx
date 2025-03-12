import css from './ErrorMessage.module.css';

function ErrorMessage() {
  return (
    <div className={css.error}>
      <svg width={50} height={50} className={css.errorIcon}>
        <use xlinkHref="/sprite.svg#icon-error"></use>
      </svg>
      <h2 className={css.errorTitle}>Something went wrong...</h2>
      <p className={css.errorText}>
        Unfortunately, we could not load the images. This may be due to
        exceeding the API request limit. It usually happens if you have made too
        many requests in a short period of time.
        <br />
        Please try again after some time. If the issue persists, you may need to
        check your API account or request limits.
        <br />
        Check your internet connection and try again.
      </p>
    </div>
  );
}

export default ErrorMessage;
