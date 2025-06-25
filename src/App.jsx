import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import './App.css';
import "swiper/css/bundle";

function App() {
  return (
    <Router>
      <div className='overflow-hidden w-full'>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Header from './components/Header/Header';
// import Body from './components/Body/Body';
// import Resume from './components/Resume/Resume';
// import './App.css';
// import "swiper/css/bundle";

// function AppContent() {
//   const location = useLocation();
//   const hideHeader = location.pathname === "/resume";

//   return (
//     <div className='overflow-hidden w-full'>
//       {!hideHeader && <Header />}
//       <Routes>
//         <Route path="/" element={<Body />} />
//         <Route path="/resume" element={<Resume />} />
//       </Routes>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;
