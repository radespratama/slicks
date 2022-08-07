import { HashRouter } from "react-router-dom";
import { CyclesContextProvider } from "./libs/context/CyclesContext";
import Router from "./router";

export default function App() {
  return (
    <HashRouter>
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
    </HashRouter>
  );
}
