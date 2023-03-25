import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostInsert from './components/modalcomponents/PostInsert';
// import Layout from './layouts/PostLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={ <PostInsert/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;