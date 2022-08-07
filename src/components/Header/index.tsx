import { NavLink } from "react-router-dom";
import { Scroll, Timer } from "phosphor-react";
import { SlickIcon } from "../Icon";

import * as I from "./header.style";

export default function Header() {
  return (
    <I.HeaderContainer>
      <SlickIcon className="sizes" />
      <I.Nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </I.Nav>
    </I.HeaderContainer>
  );
}
