import './App.css';
import {NUMBER_DATA} from "./data/data";
import {Numbers} from "./components/Numbers";


function App() {
  return (

      <div className="section">
        <p>
          Numbers
            {NUMBER_DATA.map(n => <Numbers numbers={n} />)}

        </p>
      </div>

  );
}

export default App;
