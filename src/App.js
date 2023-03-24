import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatLayout from './layouts/CreatLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={ <CreatLayout/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;