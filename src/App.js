import "./App.css";

function App() {
  return (
    <div className="App">
      <p className="PhoneText">Get a Computer SMH</p>
      <p className="Text">Probably Building Stuff</p>
      <div className="TopContainer">
        <div className="SectionWrap">
          <div className="LargeUp" style={{marginRight: 0, marginBottom: 0}}>
            <div className="MediumUp" style={{backgroundColor: "#DBF9B8"}}>
              <div className="SmallUp" style={{backgroundColor: "#F6BDD1"}}>
                <p className="Text"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="SectionWrap">
          <div className="MediumUp" style={{marginBottom:"40%" , marginRight:"15%", backgroundColor: "#87A878"}}>
            <div className="SmallUp" style={{backgroundColor: "#DBF9B8"}}></div>
          </div>
        </div>
        <div className="SectionWrap">
          <div className="SmallUp" style={{marginRight:"35%", marginBottom:"25%", backgroundColor: "#87A878"}}></div>
        </div>
      </div>
      <div className="BottomContainer">
        <div className="SectionWrap">
          <div className="SmallDown" style={{marginLeft:"35%", marginTop:"25%", backgroundColor: "#87A878"}}></div>
        </div>
        <div className="SectionWrap">
          <div className="MediumDown" style={{marginTop:"40%", marginLeft:"15%", backgroundColor: "#87A878"}}>
            <div className="SmallDown" style={{backgroundColor: "#DBF9B8"}}></div>
          </div>
        </div>

        <div className="SectionWrap">
          <div className="LargeDown" style={{marginLeft: 0, marginTop: 0}}>
            <div className="MediumDown" style={{backgroundColor: "#DBF9B8"}}>
              <div className="SmallDown" style={{backgroundColor: "#F6BDD1"}}>
                <p className="Text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
