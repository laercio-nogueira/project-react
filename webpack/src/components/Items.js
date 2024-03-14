import React from "react";

const Items = ({ title, body, isTitle }) => (
  <div className={`list ${isTitle}`}>
    <p>{title}</p>
    <p>{body}</p>
  </div>
)

export default Items