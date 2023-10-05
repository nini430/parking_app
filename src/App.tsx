import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/register';
import Login from './pages/login';
import Navbar from './components/navbar';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
    
  );
};

export default App;
