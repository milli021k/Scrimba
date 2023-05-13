import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">

      <img src={logo} />
      <h1> Updated Fun Facts About React</h1>

      <ol>
        <li>was First releaased in 2013</li>
        <li>was orignally created by Jordan</li>
        <li>has 100k plus stars on Github</li>

        <li>is maintained by facebook</li>

        <li>powers thousands of enterprise apps and mobile apps</li>
      </ol>
    </div>
  );
}

export default App;
