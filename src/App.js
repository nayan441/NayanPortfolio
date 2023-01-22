import './App.css';
import {BrowserRouter as Router, Route, Routes}  from "react-router-dom";
import  Home  from './pages/Home';
import  Experience  from './pages/Experience';
import  ProjectDisplay    from './pages/ProjectDisplay';
import  Projects  from './pages/Projects';
import  Navbar  from './components/Navbar';
import  Footer  from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>  </Navbar>
        <Routes>
          <Route path='/NayanPortfolio' element={<Home></Home>} />
          <Route path='/NayanPortfolio/projects' element={<Projects></Projects>} />
          <Route path='/NayanPortfolio/project/:id' element={<ProjectDisplay></ProjectDisplay>} />
          <Route path='/NayanPortfolio/experience' element={<Experience></Experience>} />
        </Routes>
        <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
