const TOAST_MESSAGES = {
  success: {
    message: 'Images loaded successfully!',
    noSearchImages: null,
    NoImagesBtn: null,
    limit: null,
  },
  info: {
    message: 'The field must be filled',
    noSearchImages:
      'Sorry, there are no images matching your search query. Please try again!',
    NoImagesBtn: "We're sorry, but you've reached the end of search results.",
    limit: null,
  },
  error: {
    message: 'Sorry, but something went wrong. Please try again later!',
    limit: 'Rate limit exceeded, please try again later.',
    noSearchImages: null,
    NoImagesBtn: null,
  },
};

export default TOAST_MESSAGES;
