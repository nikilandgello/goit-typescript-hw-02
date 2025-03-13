import { DataAttribute } from '../components/App.types';

export interface GetImagesData {
  total_pages: number;
  total: number;
  results: DataAttribute[];
}
