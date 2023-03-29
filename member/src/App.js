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
import PostreportRequest from './components/modalcomponents/PostreportRequest';
import PostLayout from './layouts/PostLayout';


function App() {
  const { isOpen} = useSelector((store) => store.modal);
  const { isOpen1} = useSelector((store) => store.modal1);
  const { isOpen2} = useSelector((store) => store.modal2);
  const { isOpen3} = useSelector((store) => store.modal3);
  
  return (
    <main>
      {isOpen && <CreatePlaceInsert />}
      {isOpen1 && <PostInsert />}
      {isOpen2 && <PostreportRequest />}
      {isOpen3 && <PostLayout/>}
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