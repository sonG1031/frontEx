import { Component} from "react";

// class App extends Component {
//   render() {
//     const userName = "Minsub";
//     return <h1>{userName}</h1>
//   }
// }

// const App = () => {
//   // 상태와 상태 설정함수 정의
//   const [userName, setUserName] = useState('Minsub');
  
//   // 함수정의
//   const handleClickDosa = () => setUserName("Dosa");
//   const handleClickSado = () => setUserName("Sado");
//   return (
//     <div>
//       <h1>Hello {userName}</h1>
//       <button onClick={handleClickDosa}>Dosa</button>
//       <button onClick={handleClickSado}>Sado</button>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName : "Minsub"
    }
  }
  handleClickDosa = () => {
    console.log("Dosa");
    this.setState({userName: "Dosa"});
  };
  handleClickSado = () => {
    console.log("Sado");
    this.setState({userName: "Sado"});
  };

  render() {
    const {userName} = this.state;
    return (
      <div>
        <h1>{userName}</h1>
        <button onClick={this.handleClickDosa}>Dosa</button>
        <button onClick={this.handleClickSado}>Sado</button>
      </div>
    ) 
  }
}

export default App;