import { BrowserRouter, Route, Routes } from 'react-router';

import Root from '@/app/routes/root';

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Root />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
