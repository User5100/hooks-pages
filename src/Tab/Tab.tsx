import React from "react";

interface Props {
  label: string;
  id: string;
  name: string;
}

const Tab: React.FunctionComponent<Props> = ({ label, id, children, name }) => {
  return (
    <div className="tab">
      <input type="radio" id={id} name={name} />
      <label htmlFor={id}>{label}</label>
      <div className="content">{children}</div>
    </div>
  );
};

export default Tab;
