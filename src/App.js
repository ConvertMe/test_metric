import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <ReactIcon />
        <ReactIcon />
        <ReactIcon />
        <ReactIcon />
        <ReactIcon />
        <ReactIcon />
        <ReactIcon />
        <ReactIcon />
        <ReactIcon />
        <ReactIcon />

    </div>
  );
}

const ReactIcon = () => {
  return  <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
</header>
}


export default App;
