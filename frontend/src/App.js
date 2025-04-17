
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
import AddProductScreen from "./screens/adminScreen/AddProductScreen";
import UserTableScreen from "./screens/adminScreen/UserTableScreen";
import ProductTableScreen from "./screens/adminScreen/ProductTableScreen";
import OrderTableScreen from "./screens/adminScreen/OrderTableScreen";
import PrivateRoute from "./components/PrivateRoute";
import {AdminRoute} from "./components/AdminRoute";

export default function App() {
  return (
      <>
      <Router>
          <ToastContainer />

          <TopNavBar />

          <Routes>
              <Route path={"/"} index={true} element={<HomeScreen />} />
              <Route path={"/register"} element={<RegisterScreen />} />
              <Route path={"/login"} element={<LoginScreen />} />

              <Route path={"/products"} index={true} element={<ShoppingScreen/>} />
              <Route path={"/products/:id"} element={<ProductScreen />} />

              <Route path={"/cart"} element={<CartSummaryScreen />} />

                <Route path={""} element={<PrivateRoute/>}>
                    <Route path={"/checkout"} element={<CheckoutScreen />} />
                    <Route path={"/summary"} element={<OrderSummaryScreen />} />
                    <Route path={"/reviews"} element={<AddReviewScreen />} />
                 </Route>

              <Route path={""} element={<AdminRoute />}>
                  <Route path={"/product/addProduct"} element={<AddProductScreen />} />
                  <Route path={"/admin/usertable"} element={<UserTableScreen />} />
                  <Route path={"/admin/producttable"} element={<ProductTableScreen />} />
                  <Route path={"/admin/ordertable"} element={<OrderTableScreen />} />
              </Route>
          </Routes>

      </Router>
    </>
  )
}