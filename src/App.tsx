import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import History from "./pages/History";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Homepage />} />
        <Route path="/history" element={<History />} />
      </Switch>
    </BrowserRouter>
  );
}
