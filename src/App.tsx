import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home } from "./screens/home/Home";
import { About } from "./screens/about/About";
import { Error } from "./screens/error/Error";
import { HeaderComponent } from "./components/headerComponent/HeaderComponent";
import { UserList } from "./components/userList/UserList";

export default function App() {
  const userData = useSelector((state) => state.userInfo);

  return (
    <div className="app">
      <header>
        <HeaderComponent isNavLinkEnable={userData.status === "success"} />
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route index element={<UserList />} />
            <Route path="followers" element={<UserList />} />
            <Route path="following" element={<UserList />} />
          </Route>
          <Route path="/error" element={<Error isApiError />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
      <footer>
        &copy; 2023 Gayathri Devi Nagalapuram. All rights reserved
      </footer>
    </div>
  );
}
