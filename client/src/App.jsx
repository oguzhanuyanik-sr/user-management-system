import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './pages/home/Home';
import Edit from './pages/edit/Edit';
import View from './pages/view/View';

const App = () => {
  const toastify = {
    position: 'bottom-right',
    draggable: false,
    autoClose: 1000,
    newestOnTop: false,
    closeOnClick: true,
  };

  return (
    <Router>
      <Header />
      <ToastContainer {...toastify} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Edit />} />
        <Route path='/update/:id' element={<Edit />} />
        <Route path='/view/:id' element={<View />} />
      </Routes>
    </Router>
  );
};

export default App;
