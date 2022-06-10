import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faReact,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <p className="PhoneText"> &#127814;Get a Computer SMH &#127814;</p>
      <p className="Text">&#127814; Probably Building Stuff &#127814;</p>
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
            <div className="MediumUp" style={{ backgroundColor: "#DBF9B8" }}>
              <div className="SmallUp" style={{ backgroundColor: "#F6BDD1" }}>
                <p className="Text"></p>
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
              backgroundColor: "#87A878",
            }}
          >
            <div
              className="SmallUp"
              style={{ backgroundColor: "#DBF9B8" }}
            ></div>
          </div>
        </div>
        <div className="SectionWrap">
          <div
            className="SmallUp"
            style={{
              marginRight: "35%",
              marginBottom: "25%",
              backgroundColor: "#87A878",
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
              backgroundColor: "#87A878",
            }}
          ></div>
        </div>
        <div className="SectionWrap">
          <div
            className="MediumDown"
            style={{
              marginTop: "40%",
              marginLeft: "15%",
              backgroundColor: "#87A878",
            }}
          >
            <div
              className="SmallDown"
              style={{ backgroundColor: "#DBF9B8" }}
            ></div>
          </div>
        </div>

        <div className="SectionWrap">
          <div className="LargeDown" style={{ marginLeft: 0, marginTop: 0 }}>
            <div className="MediumDown" style={{ backgroundColor: "#DBF9B8" }}>
              <div className="SmallDown" style={{ backgroundColor: "#F6BDD1" }}>
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
            <FontAwesomeIcon icon={faReact} size="3x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
