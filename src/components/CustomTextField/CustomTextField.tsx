import React from "react";
import { styled } from "@mui/material/styles";
import { TextField, TextFieldProps } from "@mui/material";

interface CustomTextFieldProps {
  autoFocus?: boolean;
  name?: string;
  variant?: "standard" | "filled" | "outlined";
  placeholder?: string;
  fullWidth?: boolean;
  size?: "small" | "medium";
  color?: string;
  borderColor?: boolean;
  themeMode?: string;
  borderColorDark?: string;
  borderColorWhite?: string;
}

const CustomTextField = styled(
  ({
    color,
    borderColor,
    borderColorWhite,
    borderColorDark,
    themeMode,
    ...props
  }: CustomTextFieldProps) => <TextField {...props} />
)(({ themeMode, color, borderColor, borderColorDark, borderColorWhite }) => ({

  "& .MuiOutlinedInput-input::-webkit-input-placeholder": {
    color: "#767e89",
    opacity: "1",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: `2px solid ${color}`,
    borderColor: `${themeMode === "dark" ? borderColorDark : borderColorWhite}`,
    color: { color },
  },

  "& .css-9425fu-MuiOutlinedInput-notchedOutline": {
    borderColor: `${
      themeMode === "dark"
        ? borderColor
          ? borderColorDark
          : borderColorWhite
        : "#dee3e9"
    }`,
  },

  "& .css-h1b81g-MuiFormLabel-root-MuiInputLabel-root": {
    color: `${color}`,
  },
  "& .MuiOutlinedInput-input": {
    color: `${color}`,
  },

  "& .MuiOutlinedInput-input.Mui-disabled": {
    backgroundColor: `${
      themeMode === "dark" ? "rgba(0, 0, 0, 0.12) " : "#f8f9fb "
    }`,
  },
  "& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder": {
    color: "#767e89",
    opacity: "1",
  },
}));

export default CustomTextField;
