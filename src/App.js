import Header from "./pages/Shared/Header/Header";
import Footer from "./pages/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Shared/Login/Login";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/Shared/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Dashboard/Products";
import AddProduct from "./pages/Dashboard/AddProduct";
import Users from "./pages/Dashboard/Users";
import Orders from "./pages/Dashboard/Orders";
import OrderDetail from "./pages/Dashboard/OrderDetail";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="products" index element={<Products />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="users" element={<Users/>} />
          <Route path="orders" element={<Orders></Orders>} />
          <Route path="order/:id" element={<OrderDetail/>} />
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
