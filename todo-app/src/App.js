import { ToastContainer } from "react-toastify";
import Footer from "./shared/Footer";
import NavBar from "./shared/NavBar";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login/Login";
import SignUp from "./routes/Login/SignUp";
import Reset from "./routes/Login/Reset";
import Home from "./routes/Home/Home";
import RequireAuth from "./routes/Login/RequireAuth";
import ToDo from "./routes/ToDo/ToDo";

function App() {
  return (
    <section>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/todo" element={
          <RequireAuth>
            <ToDo />
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/reset" element={<Reset />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </section>
  );
}

export default App;
