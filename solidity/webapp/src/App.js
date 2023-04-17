import "./App.css";

function App() {
  const wave = () => {
    console.log("wave");
  };

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">Hey there!</div>
        <div className="bio">I'm siddharth. uwu</div>

        <button className="waveButton" onClick={wave}>
          wave at meeeeee!
        </button>
      </div>
    </div>
  );
}

export default App;
