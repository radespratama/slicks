import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Homepage />} />
      </Switch>
    </BrowserRouter>
  );
}
