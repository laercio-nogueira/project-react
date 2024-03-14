import React from "react";
import ListTableOrganisms from "../organisms/ListTableOrganisms";

const ListDataUsersTemplate = ({ title, data }) => {
  return (
    <div className="container">
      <ListTableOrganisms title={title} data={data} />
    </div>
  );
};

export default ListDataUsersTemplate;