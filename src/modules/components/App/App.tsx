import { StrictMode, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { theme } from 'styles/theme';
import GlobalStyles from 'styles/global';
import { router } from 'modules/router/router';
import { store } from 'store';
import { Loader } from '../Loader/Loader';

export const App = () => (
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
