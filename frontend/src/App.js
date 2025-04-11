
import TopNavBar from "./components/TopNavBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import HomeScreen from "./screens/HomeScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
import ProductScreen from "./screens/ProductScreen";
import CartSummaryScreen from "./screens/CartSummaryScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import OrderSummaryScreen from "./screens/OrderSummaryScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import AddReviewScreen from "./screens/AddReviewScreen";

export default function App() {
  return (
      <>
      <Router>
          <ToastContainer />

          <TopNavBar />

          <Routes>
              <Route path={"/"} index={true} element={<HomeScreen />} />
              <Route path={"/product"} index={true} element={<ShoppingScreen/>} />
              <Route path={"/product/:id"} element={<ProductScreen />} />
              <Route path={"/cart"} element={<CartSummaryScreen />} />
              <Route path={"/checkout"} element={<CheckoutScreen />} />
              <Route path={"/summary"} element={<OrderSummaryScreen />} />
              <Route path={"/login"} element={<LoginScreen />} />
              <Route path={"/register"} element={<RegisterScreen />} />
              <Route path={"/reviews"} element={<AddReviewScreen />} />



          </Routes>

      </Router>
    </>
  )
}