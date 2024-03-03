import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Projects2 } from "./components/Projects2";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Projects2 />
      <Skills />
    </div>
  );
}

export default App;
