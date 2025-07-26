import "./App.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {

  return ( 
     <div className="main-page px-8">
      <Navbar/>
      <Sidebar/>
      <Landing/>
     </div>
  );
}

export default App;
