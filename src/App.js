import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePlaceInsert from './components/modalcomponents/CreatePlaceInsert';
// import CreatLayout from './layouts/CreatLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={ <CreatePlaceInsert/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;