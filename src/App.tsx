import '@fontsource-variable/inter';
import './styles.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = createRoot(
  document.querySelector('#app') as Element | DocumentFragment,
);

const Loader = (): JSX.Element => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <></>,
    },
  ]);

  return <RouterProvider router={router} />;
};

root.render(<Loader />);
