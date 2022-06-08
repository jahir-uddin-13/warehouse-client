import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddItem from "./Components/AddItem/AddItem";
import AddRev from "./Components/AddRev/AddRev";
import AllOrders from "./Components/AllOrders/AllOrders";
import Blogs from "./Components/Blogs/Blogs";
import DashBoard from "./Components/DashBoard/DashBoard";
import Home from './Components/Home/Home';
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import RequireAdmin from './Components/Login/RequireAdmin';
import RequireAuth from "./Components/Login/RequireAuth";
import SignUp from "./Components/Login/SignUp";
import ManageItem from "./Components/ManageItem/ManageItem";
import MyPortfolio from "./Components/MyPortfolio/MyPortfolio";
import MyProfile from "./Components/MyProfile/MyProfile";
import NavBar from "./Components/NavBar/NavBar";
import NotFound from "./Components/NotFound/NotFound";
import Orders from "./Components/Orders/Orders";
import Purchase from "./Components/Purchase/Purchase";
import Users from "./Components/Users/Users";



function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/myportfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <DashBoard></DashBoard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}/>
          <Route path="myorder" element={<Orders></Orders>}/>
          <Route path="addreview" element={<AddRev></AddRev>}/>
          <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>}/>
          <Route path="manageorder" element={<RequireAdmin><AllOrders /></RequireAdmin>}/>
          <Route path="addproduct" element={<RequireAdmin><AddItem /></RequireAdmin>}/>
          <Route path="manageproducts" element={<RequireAdmin><ManageItem></ManageItem></RequireAdmin>}/>
        </Route>
        <Route path='/purchase/:detailId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
