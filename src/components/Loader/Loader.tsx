import React from 'react';
import { RingLoader } from 'react-spinners';

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <>
      <RingLoader
        color="#383fb8"
        loading={loading}
        size="80px"
        speedMultiplier={1.5}
        cssOverride={{
          display: 'block',
          margin: '20px auto',
        }}
      />
    </>
  );
};

export default Loader;
