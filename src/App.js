import "./App.css";
import Fun from "./components/fun/Fun";
import Projects from "./components/projects/Projects"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function App() {
  return (
    <div className="AppWrap">
    <Projects/>
    <Fun/>
    </div>
  );
}

export default App;
