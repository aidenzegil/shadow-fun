import Carousel from "react-bootstrap/Carousel";
import { CssBackground } from "./projectCode/CssBackground";
import "bootstrap/dist/css/bootstrap.min.css";

function ProCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="Inset">
          <iframe
            style={{ width: "100%", height: "100%" }}
            src="https://www.tweeterman.com"
            title="Thread Generator"
          ></iframe>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="Inset">
          <iframe
            style={{ width: "100%", height: "100%" }}
            src="https://62deb807a8ff393cd5352b16--fancy-sfogliatella-ab92ef.netlify.app/"
            title="Circle Landing"
          ></iframe>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="Inset">
          <CssBackground style={{ width: "100%", height: "100%" }} />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="Inset">
          <iframe
            style={{ width: "75%", height: "100%" }}
            src="https://62debdb76771c8423105cf52--spontaneous-stardust-cf3ffb.netlify.app/"
            title="Mouse Game"
          ></iframe>
        </div>
      </Carousel.Item>
      <Carousel.Item style={{ minHeight: "100vh" }}>
        <div className="Inset">
          <iframe
            style={{ width: "100%", height: "100%", boxShadow: "0px 0px 30px 4px rgba(0, 0, 0, 0.6)"}}
            src="https://www.daregenerator.com"
            title="Dare Generator"
          ></iframe>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProCarousel;
