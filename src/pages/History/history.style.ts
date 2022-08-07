import { styled } from "../../stitches/theme.config";

export const HistoryContainer = styled("main", {
  flex: 1,
  padding: "2rem 0.5rem",
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

export const HistoryHeading = styled("h1", {
  fontSize: "$text-lg",
  color: "$gray-100",
});

export const HistoryList = styled("div", {
  flex: 1,
  marginTop: "2rem",

  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "37.5rem",
    overflowY: "scroll",

    th: {
      backgroundColor: "$gray-800",
      borderBottom: "1px solid $gray-700",
      padding: "1rem",
      textAlign: "left",
      color: "$gray-100",
      fontSize: "$text-base",
      lineHeight: 1.6,

      "&:first-child": {
        borderTopLeftRadius: 8,
        paddingLeft: "1.5rem",
      },

      "&:last-child": {
        borderTopRightRadius: 8,
        paddingRight: "1.5rem",
      },
    },

    td: {
      padding: "1rem",
      backgroundColor: "$gray-800",
      borderTop: "4px solid $gray-900",
      fontSize: "$text-sm",
      lineHeight: 1.6,

      "&:first-child": {
        width: "50%",
        paddingLeft: "1.5rem",
      },

      "&:last-child": {
        paddingRight: "1.5rem",
      },
    },
  },
});

export const Status = styled("span", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",

  "&::before": {
    content: "",
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "50%",
    backgroundColor: "$blue-500",
  },
});
