import * as React from 'react';
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';
import App from '@/app/index';
import '@/assets/styles.scss';
import 'react-toastify/dist/ReactToastify.css';

const rootEl = document.getElementById('root');
let queryClientRef;
if (queryClientRef === undefined) {
  const queryCache = new QueryCache();
  queryClientRef = new QueryClient({
    queryCache,
    defaultOptions: {
      queries: {
        staleTime: 2 * 60 * 1000,
        retry: false,
        refetchOnWindowFocus: true,
      },
    },
  });
}
render(
  <>
    <QueryClientProvider client={queryClientRef}>
      <App />
    </QueryClientProvider>
  </>,
  rootEl,
);
