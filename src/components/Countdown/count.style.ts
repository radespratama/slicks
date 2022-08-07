import { styled } from "../../stitches/theme.config";

export const CountdownContainer = styled("div", {
  fontFamily: "$mono",
  fontSize: "10rem",
  lineHeight: "8rem",
  color: "$gray-100",
  display: "flex",
  gap: "1rem",
});

export const SpanText = styled("span", {
  backgroundColor: "$gray-700",
  padding: "2rem 1rem",
  borderRadius: 8,
});

export const Seperator = styled("div", {
  padding: "2rem 0",
  color: "$blue-500",
  width: "4rem",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
});
