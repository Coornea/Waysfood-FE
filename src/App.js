import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./Components/Routes/PrivateRoute";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import HomePages from "./Pages/Home/HomePages";
import Profile from "./Pages/Profile/Profile";
import EditProfile from "./Pages/EditProfile/EditProfile";
import CartPage from "./Pages/CartPage/CartPage";
import RestaurantMenu from "./Pages/RestaurantMenu/RestaurantMenu";

import LandingPartner from "./Pages/LandingPartner/LandingPartner";
import ProfilePartner from "./Pages/ProfilePartner/ProfilePartner";
import EditProfilePartner from "./Pages/EditProfilePartner/EditProfilePartner";
import AddProduct from "./Pages/AddProduct/AddProduct";
import IncomeTransaction from "./Pages/IncomeTransaction/IncomeTransaction";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePages />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/editprofile" element={<EditProfile />} />
          <Route exact path="/restaurant" element={<RestaurantMenu />} />
          <Route exact path="/cartpage" element={<CartPage />} />
          <Route exact path="/landingpartner" element={<LandingPartner />} />
          <Route exact path="/profilepartner" element={<ProfilePartner />} />
          <Route
            exact
            path="/editprofilepartner"
            element={<EditProfilePartner />}
          />
          <Route exact path="/addproduct" element={<AddProduct />} />
          <Route exact path="/income" element={<IncomeTransaction />} />
          <Route exact path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
