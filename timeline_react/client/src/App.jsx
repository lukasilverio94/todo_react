// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import GetAllPosts from "./pages/GetAllPosts";
import SinglePost from "./pages/SinglePost";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NewPost from "./pages/NewPost";
import NotFound from "./pages/NotFound";
import Logout from "./components/Logout";

axios.defaults.baseURL = "http://localhost:8383";
axios.defaults.withCredentials = true;

const isLoggedIn = localStorage.getItem("token");

if (isLoggedIn) {
  const userId = localStorage.getItem("userId");
  axios.defaults.headers.common["Authorization"] = userId;
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Header />

        <Routes>
          {localStorage.getItem("token") ? (
            <>
              <Route path="/" element={<GetAllPosts />} />
              <Route path="/create" element={<NewPost />} />
              <Route path="/post/:id" element={<SinglePost />} />
              <Route path="/logout" element={<Logout />} />
            </>
          ) : (
            <>
              <Route path="/" element={<GetAllPosts />} />
              <Route path="/login" element={<LoginPage />} />
            </>
          )}

          {/* Route for 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
