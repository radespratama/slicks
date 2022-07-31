import { Outlet } from "react-router-dom";
import Header from "../Header";
import * as I from "./layout.style";

export default function DefaultLayout() {
  return (
    <I.LayoutContainer>
      <Header />
      <Outlet />
    </I.LayoutContainer>
  );
}
