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
    display: "flex",
    alignItems: "center",
    padding: "0.5rem",
    justifyContent: "center",
    color: "$gray-100",
    borderTop: "3px solid transparent",
    borderBottom: "3px solid transparent",
    transition: "all 0.2s ease-in-out",

    "&:hover": {
      borderBottom: "3px solid $blue-500",
    },

    "&.active": {
      color: "$blue-500",
    },
  },
});
