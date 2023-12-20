
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './component/header.css';

import Accueil from './component/page/Accueil';
import Apropos from './component/page/Apropos';
import Blog from './component/page/Blog';
import Contact from './component/page/Contact';
import Details from './component/page/Details';
import Forum from './component/page/Forum';
import Service from './component/page/Service';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Accueil/>} />
         <Route path="/accueil" element={<Accueil/>} />
         <Route path="/apropos" element={<Apropos/>}/>
         <Route path="/service" element={<Service/>}/>
         <Route path="/blog" element={<Blog/>}/>
         <Route path="/forum" element={<Forum/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/details" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
