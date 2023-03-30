import logo from './logo.svg';
import './App.css';
import AllRoutes from './AllRoutes/AllRoutes';
import Footer from "./Components/KamranComponent/Footer"
import Homepage from "./Components/KamranComponent/Homepage"
import Navabr from './Components/KamranComponent/Navabr';
//import AdminPage from "./Pages/AdminPage/Dashboard"

function App() {
  return (
    <div className="App">
     <Navabr/>
     <Homepage/>
     <Footer/>
    </div>
  );
}

export default App;
