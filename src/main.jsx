import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";

//globals
import "react-toastify/dist/ReactToastify.css";

//files
import "./index.css";
import App from "./App.jsx";
import store from "./store/reducer";

//queryClient
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>
);
