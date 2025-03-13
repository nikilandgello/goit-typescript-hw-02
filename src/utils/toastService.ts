import { toast } from 'react-hot-toast';
import messages from './toastMessages';
import { ShowToastKeyType, ShowToastType } from './utils.types';

const showToast = (type: ShowToastType, key: ShowToastKeyType): void => {
  const message = messages[type][key];

  if (type !== 'success' && type !== 'error') {
    toast(message, {
      icon: '✎',
      style: {
        borderRadius: '5px',
        background: 'rgba(100, 108, 255, 0.584)',
        color: 'rgba(255, 255, 255, 0.6)',
      },
      duration: 2000,
    });
  } else if (messages[type] && message) {
    toast[type](message, {
      duration: 2000,
      style: {
        background: 'rgba(100, 108, 255, 0.584)',
        color: 'rgba(255, 255, 255, 0.6)',
      },
    });
  } else {
    toast.error('Something went wrong!');
  }
};

export default showToast;
