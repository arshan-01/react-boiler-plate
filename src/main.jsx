import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import GlobalModal from "./components/globalModal.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalModal />
      <App />
    </Provider>
  </BrowserRouter>
);
