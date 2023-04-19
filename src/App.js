// import logo from './logo.svg';
import './App.css';

function App() {
  const hobby = ["Sports", "Music", "Movie"];
  const hobbyList = hobby.map((hobby, index) => <li key={index}>{hobby}</li>);
  console.log(hobbyList);
  return (
    <ul>{hobbyList}</ul>
  );
}

export default App;
