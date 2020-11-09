import * as React from "react";
import Table from "../Table";
import Tab from "../Tab";

interface Props {}

const Tabs: React.FunctionComponent<Props> = ({}) => (
  <div className="tabs">
    <Tab id="tab-1" label="Tab One" name="tag-group-1">
      <Table />
    </Tab>
    <Tab id="tab-2" label="Tab Two" name="tag-group-1">
      Stuff 2
    </Tab>
    <Tab id="tab-3" label="Tab Three" name="tag-group-1">
      Stuff 3
    </Tab>
  </div>
);

export default Tabs;
