import React, { useEffect, useRef, useState } from 'react';
import './App.css';

import ErrorMessage from './ErrorMessage/ErrorMessage';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageModal from './ImageModal/ImageModal';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import SearchBar from './SearchBar/SearchBar';

import { getImages } from '../services/api';
import { Toaster } from 'react-hot-toast';
import showToast from '../utils/toastService';
import ScrollUpButton from './ScrollUpButton/ScrollUpButton';
import { DataAttribute } from './App.types';

const App: React.FC = () => {
  const [dataImages, setDataImages] = useState<DataAttribute[]>([]);
  const [totalPage, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [modal, setModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<DataAttribute | null>(
    null
  );

  const imageRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect((): void | (() => void) => {
    if (!query) return;

    const fetchImages = async (): Promise<void> => {
      try {
        setError(false);
        setLoading(true);

        const data = await getImages(page, query);

        if (data.total_pages === 0) {
          showToast('info', 'noSearchImages');
          return;
        }

        setTotalPages(data.total_pages);
        setDataImages(prev =>
          page === 1 ? data.results : [...prev, ...data.results]
        );

        if (page > 1 && page === data.total_pages) {
          showToast('info', 'NoImagesBtn');
          return;
        }
        if (page === 1 && data.total_pages !== 0) {
          showToast('success', 'message');
          return;
        }
      } catch (error: any) {
        setError(true);

        if (error.status === 403) {
          showToast('error', 'limit');
          return;
        }

        showToast('error', 'message');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleImageLoad = (index: number): void => {
    if (page !== 1 && index === dataImages.length - 1) {
      scrollNewImg();
    }
    return;
  };

  const scrollNewImg = () => {
    const firstImageRef = imageRefs.current[0];
    if (firstImageRef) {
      const imgRect = firstImageRef.getBoundingClientRect();
      window.scrollBy({
        top: imgRect.height * 2,
        behavior: 'smooth',
      });
    }
  };

  const hendleSearch = (newQuery: string): void => {
    if (query === newQuery) return;
    setQuery(newQuery);
    setPage(1);
    setDataImages([]);
  };

  const heandleLoadMore = (): void => setPage(prev => prev + 1);

  const openModal = (image: DataAttribute): void => {
    setSelectedImage(image);
    setModal(true);
  };

  const closeModal = (): void => {
    setModal(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {dataImages.length > 0 && !error && <ScrollUpButton />}

      <SearchBar onSubmit={hendleSearch} />
      {dataImages.length > 0 && !error && (
        <ImageGallery
          dataImages={dataImages}
          imageRefs={imageRefs}
          onImageClick={openModal}
          onLoad={handleImageLoad}
        />
      )}

      {loading && <Loader loading={loading} />}
      {error && <ErrorMessage />}
      {page < totalPage && dataImages.length > 0 && !loading && !error && (
        <LoadMoreBtn onClick={heandleLoadMore} />
      )}

      <ImageModal data={selectedImage} onClose={closeModal} isOpen={modal} />
    </div>
  );
};

export default App;
