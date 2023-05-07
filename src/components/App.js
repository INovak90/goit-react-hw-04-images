import { Searchbar } from './Searchbar/Searchbar';
import styled from './App.module.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { fetchPixabay } from 'Api';
import 'react-toastify/dist/ReactToastify.css';

const ERROR_MSG = {
  notFound:
    'Sorry, there are no images matching your search query. Please try again!',
  breaking: 'Something went wrong, please reload the page.',
};

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [arrayImages, setArrayImages] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  const onSubmitForm = e => {
    e.preventDefault();
    const value = e.target.elements.query.value;
    if (value.trim() === '') {
      toast.error('Warning your query is bad !!!');
      return;
    }
    setQuery(value);
    setPage(1);
    setArrayImages(null);
  };
  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };
  useEffect(() => {
    if (query === '') {
      return;
    }
    async function FetchData() {
      try {
        if (page === 1) {
          setIsLoading(true);
          setError(null);
        }
        if (page > 1) {
          setLoadMore(true);
        }
        const response = await fetchPixabay(query, page);
        if (response.length === 0) {
          setIsLoading(false);
          return toast.error(ERROR_MSG.notFound);
        }
        if (page === 1) {
          setArrayImages(response);
          return;
        }
        setArrayImages(prevArrayImages => [...prevArrayImages, ...response]);
        setLoadMore(false);
      } catch {
        setError(ERROR_MSG.breaking);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }
    FetchData();
  }, [page, query]);

  return (
    <div className={styled.App}>
      <Searchbar onSubmitForm={onSubmitForm} />
      <ImageGallery
        arrayImages={arrayImages}
        error={error}
        isLoading={isLoading}
        onLoadMore={onLoadMore}
        loadMore={loadMore}
      />
      <ToastContainer autoClose={3000} />
    </div>
  );
};
