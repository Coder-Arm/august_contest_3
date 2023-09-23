import './App.css';
import DisplayBooks from './Components/DisplayBooks';
import HeaderBooks from './Components/HeaderBooks';
import Nav from './Components/Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
      <HeaderBooks/>
       <DisplayBooks/>
       </main>
    </div>
  );
}

export default App;
