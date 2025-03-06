import {BrowserRouter, Route} from 'react-router';
import DashBoard from './Pages/DashBoard/DashBoard';
import {Routes} from 'react-router';
import Building from './Layouts/DashBoard/Building/Building';
import Login from './Pages/Auth/Login';
import EmailVerificationCode from './Pages/Auth/EmailVerificationCode';
import SetNewPassword from './Pages/SetNewPassword';
import ResetPassword from './Pages/Auth/ResetPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBoard />}>
          <Route path='/' element={<Building />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/email-verification-code' element={<EmailVerificationCode />} />
        <Route path='/set-new-password' element={<SetNewPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
