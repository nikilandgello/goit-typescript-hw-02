import { DataAttribute } from '../App.types';

export interface ImageModalProps {
  onClose: () => void;
  isOpen: boolean;
  data: DataAttribute | null;
}
