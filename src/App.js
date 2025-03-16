import {BrowserRouter, Route} from 'react-router';
import DashBoard from './Pages/DashBoard/DashBoard';
import {Routes} from 'react-router';
import Building from './Layouts/DashBoard/Building/Building';
import Login from './Pages/Auth/Login';
import EmailVerificationCode from './Pages/Auth/EmailVerificationCode';
import SetNewPassword from './Pages/Auth/SetNewPassword';
import ResetPassword from './Pages/Auth/ResetPassword';
import AddNewFamily from './Layouts/DashBoard/AddNewFamily/AddNewFamily';
import AddNewSquare from './Layouts/DashBoard/AddNewSquare/AddNewSquare';
import AddNewPerson from './Layouts/DashBoard/AddNewPerson/AddNewPerson';
import AddNewPerson2 from './Layouts/DashBoard/AddNewPerson/AddNewPerson2';
import AddNewPerson3 from './Layouts/DashBoard/AddNewPerson/AddNewPerson3';
import {StoreData} from './Hook/StoreDataContext';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBoard />}>
          <Route path='/' element={<Building />} />
          <Route path='/add-new-square' element={<AddNewSquare />} />
          <Route element={<StoreData />}>
            <Route path='/add-new-family' element={<AddNewFamily />} />
          </Route>
          <Route element={<StoreData />}>
            <Route path='/add-new-person' element={<AddNewPerson />} />
            <Route path='/add-new-person-2' element={<AddNewPerson2 />} />
            <Route path='/add-new-person-3' element={<AddNewPerson3 />} />
          </Route>
        </Route>
        <Route path='/*' element={<h2>Page Not Found</h2>} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/email-verification-code' element={<EmailVerificationCode />} />
        <Route path='/set-new-password' element={<SetNewPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
