import DashMember from './components/Dashbord_comps/DashMember';
import Popup1 from './components/sidepopup/Popup1';
import Popup2 from './components/sidepopup/Popup2';
import Popup3 from './components/sidepopup/Popup3';
import Popup4 from './components/sidepopup/Popup4';
import Popup5 from './components/sidepopup/Popup5';
import Popup6 from './components/sidepopup/Popup6';

import Sidemenu from './components/sidepopup/Sidemenu';


function App() {
  return (
    <>
     {/* <MainLayout/> */}
     <Popup1/>
     <Popup2/>
     <Popup3/>
     <Popup4/>
     <Popup5/>
     <Popup6/>
    <Sidemenu/>
    {/* <DashMember/> */}
    </>
  );
}

export default App;