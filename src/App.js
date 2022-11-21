import './App.css';
import data from './allCountryScores'
console.log(data)
function App() {
  return (
    <div className="App">
     {data.map((el, index) => (
      <div key = {index}>
        {el.name}
      </div>
     ))}
      
    </div>
  );
}

export default App;
