import * as React from "react";
import classnames from "classnames";

import "./Table";

interface Props {}

const rows = [
  ["A", "A", "A"],
  ["B", "B", "B"],
  ["C", "C", "C"],
  ["D", "D", "D"],
  ["E", "E", "E"],
  ["F", "F", "F"],
];

const Table: React.FunctionComponent<
  React.TableHTMLAttributes<HTMLTableElement> & Props
> = ({}) => {
  const tableClasses = classnames("table");

  return (
    <table className={tableClasses}>
      <caption className="table__caption">My table with lots of data</caption>
      <thead>
        <tr>
          <th>Header</th>
          <th>Header</th>
          <th>Header</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr
              key={index}
              style={{
                animationDelay: `${index * 20}ms`,
              }}
            >
              {row.map((cell) => (
                <td>{cell}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>Footer</td>
          <td>Footer</td>
          <td>Footer</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
