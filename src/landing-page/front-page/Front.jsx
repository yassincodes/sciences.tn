import bg from "../../assets/bg.mp4";
import Header from "../../components/Header";
import "./Front.css";
import About from "../about/About";

function FrontPage() {
  //
  return (
    <div className="lol">
      <div className="main">
        <video src={bg} autoPlay loop muted />
        <svg viewBox="0 0 1440 120" className="wave">
          <path
            d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"
           
          ></path>
        </svg>

        <div className="main-text">
          <Header />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "90vh",
              paddingBottom: "30vh",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              className="banner"
            >
              <div> تعلم العلوم مع المعلمتان </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "25px",
                }}
              >
                <div
                  style={{
                    marginLeft: "5px",
                    marginRight: "5px",
                    background: "red",
                    borderRadius: "10px",
                    padding: "6px",
                  }}
                >
                  أريج
                </div>
                <div className="and">و</div>
                <div
                  style={{
                    marginLeft: "5px",
                    marginRight: "5px",
                    background: "red",
                    borderRadius: "10px",
                    padding: "6px",
                  }}
                >
                  غفران
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// the fact of the matter is that now I'm so fucking happy,
// I'm one of the happiest people on earth right now 
// 10Mar2024, 17:50, rainy day as usual in mateur.

export default FrontPage;