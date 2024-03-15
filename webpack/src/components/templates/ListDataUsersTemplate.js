import React from "react";
import ListTableOrganism from "../organisms/ListTableOrganism";
import CountNumberOrganism from "../organisms/CountNumberOrganism";

const ListDataUsersTemplate = ({ title, data, handlers, count }) => {
  return (
    <div className="container">
      <ListTableOrganism title={title} data={data} />
      <CountNumberOrganism count={count} handlers={handlers} />
    </div>
  );
};

export default ListDataUsersTemplate;