import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/restaurant/dasboard";
import CreateRestaurant from "./pages/restaurant/create";

//components
import One from "./components/create/one";
import Two from "./components/create/two";
import Three from "./components/create/three";
import Menus from "./components/dashboard/menus";
import Tables from "./components/dashboard/tables";
import Account from "./components/dashboard/account";
import Orders from "./components/dashboard/orders";
import Settings from "./components/dashboard/settings";
import Overview from "./components/dashboard/overview";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard */}

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Overview />} />
          <Route path="tables" element={<Tables />} />
          <Route path="orders" element={<Orders />} />
          <Route path="menus" element={<Menus />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="/create" element={<CreateRestaurant />}>
          <Route path="one" element={<One />} />
          <Route path="two" element={<Two />} />
          <Route path="three" element={<Three />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
