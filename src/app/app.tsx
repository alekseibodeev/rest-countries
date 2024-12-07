import { BrowserRouter, Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';

import Country from '@/app/routes/country';
import Home from '@/app/routes/home';
import Root from '@/app/routes/root';

import GlobalStyles from '@/components/global-styles';

import { theme } from '@/constants/theme';

import './fonts.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="country/:name" element={<Country />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
