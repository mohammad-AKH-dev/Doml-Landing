import "./App.css";
import Companies from "./components/Companies";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {

  return ( 
     <div className="main-page px-8">
      <Navbar/>
      <Sidebar/>
      <Landing/>
      <Companies/>
     </div>
  );
}

export default App;
