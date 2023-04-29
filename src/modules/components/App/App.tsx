import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { theme } from 'styles/theme';
import GlobalStyles from 'styles/global';
import { router } from 'modules/router/router';
import { persistor, store } from 'store';
import { Loader } from '../Loader/Loader';
import { PersistGate } from 'redux-persist/integration/react';

export const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
        <GlobalStyles />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);
