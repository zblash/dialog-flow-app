import * as React from 'react';
import { toast, TypeOptions } from 'react-toastify';
import useWindowSize from 'react-use/lib/useWindowSize';

function useAlert() {
  const { width } = useWindowSize();
  const show = (message: string, { type }: { type: TypeOptions }) => {
    toast(message, {
      type,
      progressClassName: 'fancy-progress-bar',
      position: width > 768 ? 'bottom-right' : 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return { show };
}

export { useAlert, useWindowSize };
