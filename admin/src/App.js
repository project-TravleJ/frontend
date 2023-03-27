

import MainLayout from './layouts/MainLayout';
import MyPageLayout from './layouts/MyPageLayout';
import PostBoardLayout from './layouts/PostBoardLayout';
import DashMember from './components/Dashbord_comps/DashMember';
import VisitMem from './components/Dashbord_comps/VisitMem';
import BulletinManage from './components/Dashbord_comps/BulletinManage';
import RequestFix from './components/Dashbord_comps/RequestFix';

// import Modal from './Modal/Modal';


// import ModalContents from './Modal/ModalContents';
// import Modal from './Modal/ModalHeader';
import Course from './travelcourseComponents/Course';
import ReportSubmit from './components/Dashbord_comps/ReportSubmit';
import Dashboard from './components/Dashbord_comps/Dashboard';
function App() {
  return (
    <>
    {/* // <Modal/>
    // <PostBoardLayout/>
    // <MainLayout/>
    // <MyPageLayout/>

    // <PostBoardLayout/> */}
    {/* <DashMember/>
    <br/>
    <VisitMem/>
    <br/>
    <BulletinManage/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <RequestFix/>
    <br/>
    <ReportSubmit/> */}
    <Dashboard/>
    </>

  );
}

export default App;