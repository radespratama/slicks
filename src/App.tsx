import { BrowserRouter } from "react-router-dom";
import { CyclesContextProvider } from "./libs/context/CyclesContext";
import Router from "./router";

export default function App() {
  return (
    <BrowserRouter>
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
    </BrowserRouter>
  );
}
