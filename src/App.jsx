import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {

  return ( 
     <div className="main-page px-8">
      <Navbar/>
      <Sidebar/>
     </div>
  );
}

export default App;
