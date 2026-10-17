import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import HeroProfile from './component/HeroProfile';
import Works from './component/Works';
import AboutPage from './aboutMe/aboutMe';
import SkillsPage from './Skills/SkillsPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* الصفحة الرئيسية */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroProfile />
              <Works />
            </>
          }
        />

        {/* صفحة عني */}
        <Route path="/aboutMe" element={<AboutPage />} />
        <Route path="/Skills" element={<SkillsPage />} />
      </Routes>
    </Router>
  );
}

export default App;