import { styled } from "../../stitches/theme.config";

export const LayoutContainer = styled("div", {
  maxWidth: "$lg",
  margin: "5rem 0",
  marginInline: "auto",
  height: "calc(100vh - 10rem)",
  padding: "1.5rem 2.5rem",

  backgroundColor: "$gray-900",
  borderRadius: 10,
  display: "none",
  flexDirection: "column",
  overflow: "hidden",

  "@md": {
    display: "flex",
  }
});
