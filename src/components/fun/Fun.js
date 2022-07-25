import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faReact,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-scroll";

function Fun() {
  return (
    <div className="App">
      <p className="PhoneText"> Please use a computer </p>
      <Link
          className="BuildText"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
        >
      <p>Probably Building Stuff</p>
      </Link>
      <div className="TopContainer">
        <div className="SocialWrap">
          <a
            href="https://twitter.com/AidenZegil"
            className="SocialIcon"
          >
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>
          <a
            href="https://www.linkedin.com/in/aiden-zegil-0906a4235/"
            className="SocialIcon"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </div>
        <div className="SectionWrap">
          <div className="LargeUp" style={{ marginRight: 0, marginBottom: 0 }}>
            <div className="MediumUp" style={{ backgroundColor: "#D7EEFF" }}>
              <div className="SmallUp" style={{ backgroundColor: "#FAFFC7" }}>
              </div>
            </div>
          </div>
        </div>
        <div className="SectionWrap">
          <div
            className="MediumUp"
            style={{
              marginBottom: "40%",
              marginRight: "15%",
              backgroundColor: "#FFCCE1",
            }}
          >
            <div
              className="SmallUp"
              style={{ backgroundColor: "#D7EEFF" }}
            ></div>
          </div>
        </div>
        <div className="SectionWrap">
          <div
            className="SmallUp"
            style={{
              marginRight: "35%",
              marginBottom: "25%",
              backgroundColor: "#FFCCE1",
            }}
          ></div>
        </div>
      </div>
      <div className="BottomContainer">
        <div className="SectionWrap">
          <div
            className="SmallDown"
            style={{
              marginLeft: "35%",
              marginTop: "25%",
              backgroundColor: "#FFCCE1",
            }}
          ></div>
        </div>
        <div className="SectionWrap">
          <div
            className="MediumDown"
            style={{
              marginTop: "40%",
              marginLeft: "15%",
              backgroundColor: "#FFCCE1",
            }}
          >
            <div
              className="SmallDown"
              style={{ backgroundColor: "#D7EEFF" }}
            ></div>
          </div>
        </div>

        <div className="SectionWrap">
          <div className="LargeDown" style={{ marginLeft: 0, marginTop: 0 }}>
            <div className="MediumDown" style={{ backgroundColor: "#D7EEFF" }}>
              <div className="SmallDown" style={{ backgroundColor: "#FAFFC7" }}>
                <p className="Text"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="SocialWrap">
          <a
            href="https://www.instagram.com/aiden_zegil/"
            className="SocialIcon"
          >
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
          <a
            href="https://github.com/aidenzegil"
            className="SocialIcon"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Fun;