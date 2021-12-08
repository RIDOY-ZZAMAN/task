
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Header/Header';

import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>

      </BrowserRouter>
      <Footer></Footer>

    </div>
  );
}

export default App;
