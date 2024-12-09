import { BrowserRouter, Route, Routes } from 'react-router';

import Country from '@/app/routes/country';
import Home from '@/app/routes/home';
import Root from '@/app/routes/root';

import ColorThemeProvider from '@/components/color-theme-provider';
import GlobalStyles from '@/components/global-styles';

import './fonts.css';

const App = () => {
  return (
    <ColorThemeProvider>
      <GlobalStyles />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="country/:name" element={<Country />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ColorThemeProvider>
  );
};

export default App;
