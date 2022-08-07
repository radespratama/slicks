import { styled } from "../../stitches/theme.config";

export const HeaderContainer = styled("header", {
  display: "flex",
  alignContent: "center",
  justifyContent: "space-between",

  svg: {
    "&.sizes": {
      width: "2.5rem",
      height: "2.5rem",
      fill: "$white-950",
    },
  },
});

export const Nav = styled("nav", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",

  a: {
    width: "2.875rem",
    height: "2.875rem",
    display: "flex",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    color: "$gray-100",
    borderTop: "2px solid transparent",
    borderBottom: "2px solid transparent",
    transition: "all 0.2s",

    "&.active": {
      color: "$blue-500",
      border: "2px solid $blue-500",
    },
  },
});
