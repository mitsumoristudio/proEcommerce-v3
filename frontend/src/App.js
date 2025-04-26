
import TopNavBar from "./components/TopNavBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import HomeScreen from "./screens/HomeScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
import ProductScreen from "./screens/ProductScreen";
import CartSummaryScreen from "./screens/CartSummaryScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import OrderSummaryScreen from "./screens/OrderSummaryScreen";
import LoginScreen from "./screens/authScreen/LoginScreen";
import RegisterScreen from "./screens/authScreen/RegisterScreen";
import AddReviewScreen from "./screens/AddReviewScreen";
import AddProductScreen from "./screens/adminScreen/AddProductScreen";
import UserTableScreen from "./screens/adminScreen/UserTableScreen";
import ProductTableScreen from "./screens/adminScreen/ProductTableScreen";
import OrderTableScreen from "./screens/adminScreen/OrderTableScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductEditScreen from "./screens/adminScreen/ProductEditScreen";
import CardPaymentScreen from "./screens/CardPaymentScreen";
import DummyPaypalCheckout from "./components/DummyPaypalCheckout";
import VerifyEmailScreen from "./screens/authScreen/VerifyEmailScreen";
import ForgotPasswordPage from "./screens/authScreen/ForgotPasswordPage";

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
              <Route path={"/dummyCheckout"} element={<DummyPaypalCheckout />} />
              <Route path={"/verifyEmail"} element={<VerifyEmailScreen />} />
              <Route path={"/forgotPassword"} element={<ForgotPasswordPage />} />


              <Route path={"/products"} index={true} element={<ShoppingScreen/>} />
              <Route path={"/products/:id"} element={<ProductScreen />} />
              <Route path={"/products/:id/reviews"} element={<AddReviewScreen />} />

              <Route path={"/cart"} element={<CartSummaryScreen />} />

                <Route path={""} element={<PrivateRoute/>}>
                    <Route path={"/checkout"} element={<CheckoutScreen />} />
                    <Route path={"/placeorder"} element={<PlaceOrderScreen />} />
                    <Route path={"/orders/:id/summary"} element={<OrderSummaryScreen />} />
                    <Route path={"/orders/:id"} element={<CardPaymentScreen />} />


                 </Route>

              <Route path={""} element={<AdminRoute />}>
                  <Route path={"/admin/addProduct"} element={<AddProductScreen />} />
                  <Route path={"/admin/usertable"} element={<UserTableScreen />} />
                  <Route path={"/admin/producttable"} element={<ProductTableScreen />} />
                  <Route path={"/admin/products/:id/edit"} element={<ProductEditScreen />} />
                  <Route path={"/admin/ordertable"} element={<OrderTableScreen />} />
              </Route>
          </Routes>

      </Router>
    </>
  )
}