import MainPage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
    </Routes>
  );
}

export default App;
