import "../../App.css";
import ProCarousel from "./ProCarousel"

function Projects() {
  return (
    <div className="Section2" id="projects" style={{ background: '#FFCCE1', zIndex: 1}}>
      <div className="ProjectsWrapper">
        <ProCarousel/>
      </div>
    </div>
  );
}

export default Projects;