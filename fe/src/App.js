import { Routes, Route, BrowserRouter as Router, } from 'react-router-dom';
import Home from "pages/Home";
import MoreItem from "pages/MoreItem";
import Info from "pages/Info";
import Search from 'pages/Search';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info/:id' element={<Info />} />
        <Route path='/more/:type' element={<MoreItem />} />
        <Route path='/search/:query' element={<Search />} />
        <Route path='*' element={<p>not found</p>} />
      </Routes>
    </Router>
  );
}

export default App;
