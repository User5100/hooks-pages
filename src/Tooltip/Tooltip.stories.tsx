import React from "react"
import Overlay from "../Overlay";
import Tooltip from "./Tooltip";


const Target = ({ getTriggerProps, triggerRef }: any) => {
    return (
      <span
        {...getTriggerProps({
          ref: triggerRef,
        })}
      >
        Something here
      </span>
    );
  };
  

const Template = () => (
    <Overlay placement="top" target={Target}>
        {(props: any) => (
          <Tooltip {...props}>
            There is a 5% customer exclusion group enabled across all campaigns
            who will not be shown anything. The split for each variation applies
            to the users not included in the exclusion group
          </Tooltip>
        )}
      </Overlay>
)