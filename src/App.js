import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivateRoute from "./Components/Routes/PrivateRoute";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import HomePages from "./Pages/Home/HomePages";
import Profile from "./Pages/Profile/Profile";
import CartPage from "./Pages/CartPage/CartPage";
import RestaurantMenu from "./Pages/RestaurantMenu/RestaurantMenu";
// import NotFound from './Pages/NotFound/NotFound'
// import LoginModal from './Components/Modals/LoginModal';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePages />} />
          <Route exact path="/restaurant" element={<RestaurantMenu />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
