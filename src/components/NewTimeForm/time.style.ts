import { styled } from "../../stitches/theme.config";

export const FormContainer = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  color: "$gray-100",
  fontSize: "$text-lg",
  fontWeight: "bold",
  flexWrap: "wrap",
});

export const BaseInput = styled("input", {
  backgroundColor: "transparent",
  height: "2.5rem",
  border: 0,
  borderBottom: "2px solid $gray-400",
  fontWeight: "bold",
  fontSize: "$text-lg",
  padding: "0 0.5rem",
  color: "$gray-100",

  "&:focus": {
    boxShadow: "none",
    borderColor: "$midnight-blue-800",
  },

  "&::placeholder": {
    color: "$gray-500",
  },
});

export const TaskInput = styled(BaseInput, {
  flex: 1,
  "&::-webkit-calendar-picker-indicator": {
    display: "none !important",
  },
});

export const MinutesAmountInput = styled(BaseInput, {
  minWidth: "4rem",
});
