import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./component/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import store from "./redux/store";

function App() {
  const [activePage, setActivePage] = useState("home");
  return (
    <Provider store={store}>
      <Navbar setActivePage={setActivePage} />
      {activePage === "home" ? <Home /> : <Cart />}
    </Provider>
  );
}

export default App;
