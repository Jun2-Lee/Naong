import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Main from './pages/main';
import InitialInfo from './pages/initial_info/initial_info'
import Signup from './pages/signup';
import PostSharing from './pages/post/post_sharing'
import Login from './pages/login/login'
import DetailSharing from './pages/detail/detail_sharing'
import PostDelivery from './pages/post/post_delivery';

function App() {

  return (
    <div className="page">
      <Navbar />
      <div className="body">
        <Router>
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/initialInfo' element={<InitialInfo/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/detailSharing' element={<DetailSharing/>} />
            <Route path='/postSharing' element={<PostSharing/>} />
            <Route path='/postDelivery' element={<PostDelivery/>} />
          </Routes>
        </Router>

      </div>
    </div>
  );
}

export default App;
