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
import Postdelete from './components/modalcomponents/Postdelete';
import PostdeleteFinsh from './components/modalcomponents/PostdeleteFinsh';
import PostreportFinsh from './components/modalcomponents/PostreportFinsh';
import DirectionreportRequest from './components/modalcomponents/DirectionreportRequest';
import PostReviceFinsh from './components/modalcomponents/PostReviceFinsh';
import ModalPwd from './components/myPageComponents/ModalPwd';
import ModalImage from './components/myPageComponents/ModalImage';
import Memberdelete from './components/modalcomponents/Memberdelete';
import MemberdeleteFinish from './components/modalcomponents/MemberdeletFinish';
import Oauth from './components/mainPageComponents/Oauth';

function App() {
  const { isOpen} = useSelector((store) => store.modal);
  const { isOpen1} = useSelector((store) => store.modal1);
  const { isOpen2} = useSelector((store) => store.modal2);
  const { isOpen3} = useSelector((store) => store.modal3);
  const { isOpen4} = useSelector((store) => store.modal4);
  const { isOpen5} = useSelector((store) => store.modal5);
  const { isOpen6} = useSelector((store) => store.modal6);
  const { isOpen7} = useSelector((store) => store.modal7);
  const { isOpen8} = useSelector((store) => store.modal8);
  const { isOpen9} = useSelector((store) => store.modal9);
  const { isOpen10} = useSelector((store) => store.modal10);
  const { isOpen11} = useSelector((store) => store.modal11);
  const { isOpen12} = useSelector((store) => store.modal12);
  const { isOpen13} = useSelector((store) => store.modal13);
  const { isOpen14} = useSelector((store) => store.modal14);

  return (
    <main>
      {isOpen && <CreatePlaceInsert />}
      {isOpen1 && <PostInsert />}
      {isOpen2 && <PostreportRequest />}
      {isOpen3 && <PostLayout/>}
      {isOpen4 && <Postdelete/>}
      {isOpen5 && <PostdeleteFinsh/>}
      {isOpen6 && <PostreportFinsh/>}
      {isOpen7 && <DirectionreportRequest/>}
      {isOpen8 && <PostReviceFinsh/>}
      {isOpen9 && <ModalLogin/>}
      {isOpen10 && <ModalJoin/>}
      {isOpen11 && <ModalPwd/>}
      {isOpen12 && <ModalImage/>}
      {isOpen13 && <Memberdelete/>}
      {isOpen14 && <MemberdeleteFinish/>}

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="myPage" element={<MyPage />} />
            <Route path="postBoard" element={<PostBoard />} />
            {/* <Route index element={ <PostBoard/> }/> */}
            <Route path="post" element={ <CreatPost/> }/>
          </Route>
          <Route path="/oauth" element={<Oauth/>} />
      </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;