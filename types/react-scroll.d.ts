declare module "react-scroll" {
  import type { ComponentType } from "react";

  export interface LinkProps {
    to: string;
    smooth?: boolean | string;
    duration?: number;
    offset?: number;
    spy?: boolean;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
  }

  export const Link: ComponentType<LinkProps>;
}
