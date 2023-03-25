import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostdeleteFinsh from './components/modalcomponents/PostdeleteFinsh';
// import Layout from './layouts/PostLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={ <PostdeleteFinsh/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;