import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

import Headlines from "./components/Headlines";
import Everything from "./components/Everything";
import ResponsiveNav from "./components/ResponsiveNav";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="navbar">
          <h2 style={{ cursor: "pointer", userSelect: "none" }}>
            News<span style={{ color: "#e78b40" }}>Bes</span>
          </h2>
        </div>
        <div className="container">
          <Everything />
          <Headlines />
        </div>
        <ResponsiveNav />
      </div>
    </Provider>
  );
}

export default App;
