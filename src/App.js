import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Postdelete from './components/modalcomponents/Postdelete';
// import Layout from './layouts/PostLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={ <Postdelete/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;