import {BrowserRouter, Route} from 'react-router';
import DashBoard from './Pages/DashBoard/DashBoard';
import {Routes} from 'react-router';
import Building from './Layouts/DashBoard/Building/Building';
import Login from './Pages/Auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBoard />}>
          <Route path='/' element={<Building />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
