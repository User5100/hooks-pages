import React from "react";

import "./Tooltip.scss";

const Tooltip = ({
  children,
  getTooltipProps,
  getArrowProps,
  placement,
  arrowRef,
  tooltipRef,
}: any) => {
  return (
    <div
      {...getTooltipProps({
        ref: tooltipRef,
        className: "tooltip-container",
      })}
    >
      {children}
      <div
        {...getArrowProps({
          ref: arrowRef,
          className: "tooltip-arrow",
          "data-placement": placement,
        })}
      ></div>
    </div>
  );
};

export default Tooltip;
