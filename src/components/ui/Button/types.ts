import { ReactNode } from "react";

export enum ELunaButtonVariants {
  REGULAR = "regular",
  OUTLINED = "outlined",
  GHOST = "ghost",
}

export enum ELunaButtonColors {
  PRIMARY = "primary",
  DANGER = "danger",
  SUCCESS = "success",
  WARN = "warn",
}

export interface LunaButtonProps {
  type?: "button" | "submit" | "reset";
  children: ReactNode | Array<ReactNode>;
  variant?: ELunaButtonVariants;
  color?: ELunaButtonColors;
  shadowed?: boolean;
}
