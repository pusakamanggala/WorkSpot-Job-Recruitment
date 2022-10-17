import "./App.css";
import { useEffect } from "react";
import Router from "./route/Router";

function PageTitle() {
  useEffect(() => {
    document.title = "Work/Spot";
  });
}
function App() {
  PageTitle();
  return <Router />;
}

export default App;
