import './App.css';
import Header from './commons/Header';
import Home from './Home/Home';
import Login from './login/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Home/Doctors list */}
          <Route path="/" element={<Home />} />

          {/* Optional alias if needed */}
          <Route path="/appointment" element={<Home />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
