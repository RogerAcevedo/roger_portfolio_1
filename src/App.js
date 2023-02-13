import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

// IMPORT PAGES
import Home from './pages/Home'
import Projects from './pages/Projects'
  // DISPLAY EACH INDIVIDUAL PROJECT PER ROUTE
  import ProjectDisplay from './pages/ProjectDisplay';
import Experience from './pages/Experience'


// IMPORT COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// IMPORT CSS
import "./styles/Navbar.css"




function App() {
  return (
    <div className="App">
      <Router>
        < Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/project/:id' element={<ProjectDisplay/>} />
          <Route path='/experience' element={<Experience/>} />
        </Routes>
        < Footer />
      </Router>
    </div>
  );
}

export default App;
