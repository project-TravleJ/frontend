import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ModalJoin from './components/mainPageComponents/ModalJoin';
import ModalLogin from './components/mainPageComponents/ModalLogin';
import ScrollToTop from './components/mainPageComponents/ScrollToTop';
import MainLayout from './layouts/MainLayout';
import CreatPost from './pages/CreatPost';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import PostBoard from './pages/PostBoard';
import { useSelector } from 'react-redux';
import CreatePlaceInsert from './components/modalcomponents/CreatePlaceInsert';
import PostInsert from './components/modalcomponents/PostInsert';


function App() {
  const { isOpen , isOpen1} = useSelector((store) => store.modal);
 
  
  return (
    <main>
      {isOpen && <CreatePlaceInsert />}
      {isOpen1 && <PostInsert />}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="myPage" element={<MyPage />} />
            <Route path="postBoard" element={<PostBoard />} />
            {/* <Route index element={ <PostBoard/> }/> */}
            <Route path="post" element={ <CreatPost/> }/>
          <Route path="login" element={ <ModalLogin/> }/>
          <Route path="join" element={ <ModalJoin/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;