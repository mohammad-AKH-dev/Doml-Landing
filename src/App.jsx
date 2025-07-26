import "./App.css";
import Companies from "./components/Companies";
import Explore from "./components/Explore";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Sidebar from "./components/modules/Sidebar";
function App() {

  return ( 
     <div className="main-page px-8">
      <Navbar/>
      <Sidebar/>
      <Landing/>
      <Companies/>
      <Product/>
      <Explore/>
     </div>
  );
}

export default App;
