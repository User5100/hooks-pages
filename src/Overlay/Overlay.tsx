import React from "react";
import TooltipTrigger from "react-popper-tooltip";

const modifiers = [
  {
    name: "offset",
    enabled: true,
    options: {
      offset: [100, 160],
    },
  },
];

interface Props {
  placement?:
    | "top"
    | "auto"
    | "auto-start"
    | "auto-end"
    | "bottom"
    | "right"
    | "left"
    | "top-start"
    | "top-end"
    | "bottom-start"
    | "bottom-end"
    | "right-start"
    | "right-end"
    | "left-start"
    | "left-end"
    | undefined;
  target: any;
  children: any;
}

const Overlay: React.FunctionComponent<Props> = ({
  placement = "auto",
  children,
  target,
}) => {
  return (
    <TooltipTrigger
      placement={placement}
      trigger="click"
      tooltip={children}
      modifiers={modifiers}
    >
      {target}
    </TooltipTrigger>
  );
};

export default Overlay;
