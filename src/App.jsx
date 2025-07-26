import "./App.css";
import Companies from "./components/Companies";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Sidebar from "./components/Sidebar";
function App() {

  return ( 
     <div className="main-page px-8">
      <Navbar/>
      <Sidebar/>
      <Landing/>
      <Companies/>
      <Product/>
     </div>
  );
}

export default App;
