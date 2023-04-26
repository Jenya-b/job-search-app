import { StrictMode, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from 'styles/theme';
import GlobalStyles from 'styles/global';
import { router } from 'modules/router/router';

export const App = () => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>loading..</div>}>
        <RouterProvider router={router} />
      </Suspense>
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>
);
