import Header from "../components/Header";

function Lessons() {
  return (
    <div>
      <Header />
      <div
        style={{
          margin: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        list of lessons here
      </div>
    </div>
  );
}

export default Lessons;