import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { UseFormRegister } from "react-hook-form";
import { ButtonHTMLAttributes, InputHTMLAttributes, ReactPortal } from "react";
import { IRegister } from "./auth";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset";
  children: string;

  variant?: "primary" | "secondary" | "terciary" | "quaternary";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: "password" | "email" | "name" | "radioGroup" | "confirm_password";

  error: any;

  register: UseFormRegister<IRegister>;
}
