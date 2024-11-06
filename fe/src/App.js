import { Routes, Route,  BrowserRouter as Router, } from 'react-router-dom';
import Home from "./pages/Home";
import Info from "./pages/Info";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info' element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;
