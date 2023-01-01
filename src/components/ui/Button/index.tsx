import { ReactNode } from "react";
import "./button.scss";
import {
  ELunaButtonColors,
  ELunaButtonVariants,
  LunaButtonProps,
} from "./types";

function Button({
  children,
  type = "button",
  variant = ELunaButtonVariants.REGULAR,
  color = ELunaButtonColors.PRIMARY,
  shadowed = false,
}: LunaButtonProps) {
  return (
    <button
      className={`luna-button ${variant} ${color} ${
        shadowed && variant !== ELunaButtonVariants.GHOST && "shadowed"
      }`}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
