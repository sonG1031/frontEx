// import logo from './logo.svg';
import './App.css';

function App() {
  const code="01"
  let getNationality=(code)=> {
    if (code === "01") {
      return "Korea"
    }
    else if (code === "02") {
      return "China"
    }
    else if (code === "03") {
      return "Japan"
    }
    else {
      return "..."
    }
  }
  return (
    <div>
      <h1>Minsub's nationality is {getNationality(code)}</h1>
    </div>
  );
}

export default App;
