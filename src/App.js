import gsap from "gsap";
import "./App.scss";

function App() {
  const arr = [
    { name: "New Delhi", color: "#03071E" },
    { name: "Tokyo", color: "#370617" },
    { name: "Kathmandu", color: "#6A040F" },
    { name: "New York", color: "#9D0208" },
    { name: "Manila", color: "#D00000" },
    { name: "Moscow", color: "#DC2F02" },
    { name: "Prague", color: "#E85D04" },
    { name: "Hague", color: "#F48C06" },
    { name: "Adelaide", color: "#FAA307" },
    { name: "Cairo", color: "#FFBA08" },
  ];
  function mouseEntryManager(e, index) {
    gsap.to(e.target, {
      top: "-2vw",
      backgroundColor: arr[index].color,
      duration: 0.4,
      color: "white",
    });
  }
  function mouseExitManager(e, index) {
    gsap.to(e.target, {
      top: "0",
      backgroundColor: "white",
      color: "black",
      duration: 0.4,
      delay: 0.1,
    });
  }

  return (
    <div className="App">
      <div className="container">
        {arr.map((elem, index) => (
          <div
            key={index}
            onMouseEnter={(e) => {
              mouseEntryManager(e, index);
            }}
            onMouseLeave={(e) => {
              mouseExitManager(e, index);
            }}
          >
            <p>{elem.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
