import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import PostreportRequest from './components/modalcomponents/PostreportRequest';
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