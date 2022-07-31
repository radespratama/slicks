import { styled } from "../../stitches/theme.config";

export const LayoutContainer = styled("div", {
  maxWidth: "$lg",
  margin: "5rem auto",
  height: "calc(100vh - 10rem)",
  padding: "2.5rem",

  backgroundColor: "$gray-800",
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
});
