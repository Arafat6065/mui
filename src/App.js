
import './App.css';
import Home from './component/Home/Home';

import About from './component/About/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Contact from './Contact/Contact';
import Players from './component/Players/Players';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/players' element={<Players />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
