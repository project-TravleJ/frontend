import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/admin/Layout';
import LocationReportManagementPage from './pages/admin/LocationReportManagementPage';
import MainDashBoard from './pages/admin/MainDashBoard';
import MemberManagementPage from './pages/admin/MemberManagementPage';
import PostManagementPage from './pages/admin/PostManagementPage';
import PostReportManagementPage from './pages/admin/PostReportManagementPage';
import LocationManagementPage from './pages/admin/LocationManagementPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainDashBoard/>}/>
          <Route path="members" element={<MemberManagementPage/>}/>
          <Route path="posts/management" element={<PostManagementPage/>}/>
          <Route path="posts/reports" element={<PostReportManagementPage/>}/>
          <Route path="location/reports" element={<LocationReportManagementPage/>}/>
          <Route path="location/management" element={<LocationManagementPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

// src/components/googlemap/Maps.js에 API_KEY를 입력하면 출력 됨