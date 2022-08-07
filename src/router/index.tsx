import { Routes as Switch, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import History from "../pages/History";

import DefaultLayout from "../components/DefaultLayout";

export default function Router() {
  return (
    <Switch>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Switch>
  );
}
