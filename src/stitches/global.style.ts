import { globalCss } from "./theme.config";

const GlobalStyle = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    scrollBehavior: "smooth",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    userSelect: "none",
  },
  "html, body": {
    fontFamily: "$sans",
    backgroundColor: "$primary",
    color: "$white-950",
  },
  a: {
    textDecoration: "none",
  },
});

export default GlobalStyle;
