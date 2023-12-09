import "./App.css";
import FourCard from "./FourCard";

function App() {
  return (
    <div className="pagecontainer">
      <header>
        <h1> Reliable, efficient delivery </h1>
        <h1>Powered by Technology</h1>
        <p>
          Our Artificial Intelligence powered tools use millions of project data 
          points to ensure that your project is successful
        </p>
      </header>
      <main>
      <FourCard/>
      </main>
      
    </div>
  );
}

export default App;
