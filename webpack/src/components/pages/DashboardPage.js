import React, { useState, useEffect } from "react";
import axios from 'axios'
import ListDataUsersTemplate from "../templates/ListDataUsersTemplate";


const DashboardPage = () => {

  const [data , setData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
      setData((prev) => [...prev, ...data])
    })()
  }, [])

  const title = "Lista de Titulos";
  const legendTable = [
    { text: "Nome Completo", key: "name" },
    { text: "Nome", key: "phone" },
    { text: "Email", key: "email" },
    { text: "Telefone", key: "phone" },
    { text: "Site", key: "site" },
  ];

  const [count, setCount] = useState(0);
  const handlers = [
    { appearance: "primary", textButton: "Reset", onClick: () => setCount(0) },
    { appearance: "success", textButton: "Adicionar", onClick: () => setCount(count + 1) },
    { appearance: "danger", textButton: "Remover", onClick: () => setCount(count - 1) },
  ]

  return (
    <ListDataUsersTemplate 
      title={title}
      legendTable={legendTable}
      data={data} 
      handlers={handlers} 
      count={count} 
    />
  );
};

export default DashboardPage;