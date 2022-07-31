import { styled } from "../../stitches/theme.config";

export const CountdownContainer = styled("div", {
  fontFamily: "$mono",
  fontSize: "10rem",
  lineHeight: "8rem",
  color: "$gray-200",
  display: "flex",
  gap: "1rem",
});

export const CountdownValue = styled("span", {
  backgroundColor: "$gray-700",
  padding: "2rem 1rem",
  borderRadius: 8,
});

export const Seperator = styled("div", {
  padding: "2rem 0",
  color: "$midnight-blue-700",
  minWidth: "4rem",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
});
