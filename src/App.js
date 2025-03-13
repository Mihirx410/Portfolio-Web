import './App.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';
import {Skills} from './components/Skills';
import { Project } from './components/Project';
import { Contact } from './components/Contact';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';



function App() {
  return (
    <>
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Project/>
      <Contact/>
      <Newsletter/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
