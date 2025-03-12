import { toast } from 'react-hot-toast';
import messages from './toastMessages';

const showToast = (type, key) => {
  if (
    messages[type] !== messages.success &&
    messages[type] !== messages.error
  ) {
    toast(messages[type][key], {
      icon: '✎',
      style: {
        borderxRadius: '5px',
        background: 'rgba(100, 108, 255, 0.584)',
        color: 'rgba(255, 255, 255, 0.6)',
      },
      duration: 2000,
    });
  } else if (messages[type] && messages[type][key]) {
    toast[type](messages[type][key], {
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
