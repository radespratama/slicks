import { styled } from "../../stitches/theme.config";

export const HomeContainer = styled("main", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 20,
});

export const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "3.5rem",
});

const BaseCountdownButton = styled("button", {
  fontFamily: "$sans",
  width: "100%",
  border: 0,
  padding: "1rem",
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  fontWeight: "bold",
  cursor: "pointer",
  color: "$gray-100",

  "&:disabled": {
    opacity: "0.7",
    cursor: "not-allowed",
  },
});

export const StartCountdownButton = styled(BaseCountdownButton, {
  backgroundColor: "$blue-900",

  "&:not(:disabled):hover": {
    backgroundColor: "$blue-700",
  },
});

export const StopCountdownButton = styled(BaseCountdownButton, {
  backgroundColor: "$red-900",

  "&:not(:disabled):hover": {
    backgroundColor: "$red-700",
  },
});
