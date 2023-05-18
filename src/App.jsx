import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/restaurant/dasboard";
import CreateRestaurant from "./pages/restaurant/create";
import One from "./components/create/one";
import Two from "./components/create/two";
import Three from "./components/create/three";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard */}

        <Route path="/dashboard" element={<Dashboard />} />
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
