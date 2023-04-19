// import logo from './logo.svg';
import './App.css';

function App() {
  const code="01"
  let nationality = "None"

  if (code === "01") {
    nationality = "korea"
  }
  else if (code === "02") {
    nationality = "China"
  }
  else if (code === "03") {
    nationality = "Japan"
  }
  else {
    nationality = "..."
  }
  return (
    <div>
      <h1>Minsub's nationality is {nationality}</h1>
    </div>
  );
}

export default App;
