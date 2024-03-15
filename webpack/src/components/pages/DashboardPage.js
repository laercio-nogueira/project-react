import React, { useState } from "react";
import ListDataUsersTemplate from "../templates/ListDataUsersTemplate";

const DashboardPage = () => {
  const title = "Lista de Titulos";
  const data = [
    {
      title: "Nome",
      body: "Endereço",
      isTitle: "list-title",
    },
    {
      title: "Jose Antonio",
      body: "Rua Gardem, 130"
    },
    {
      title: "Maria Silva",
      body: "Av Fatima Celestial, 1000"
    },
    {
      title: "Pedro Pereira",
      body: "Av. das Nações Unidas, 1000"
    }
  ]

  const [count, setCount] = useState(0);
  const handlers = [
    { appearance: "primary", textButton: "Reset", onClick: () => setCount(0) },
    { appearance: "success", textButton: "Adicionar", onClick: () => setCount(count + 1) },
    { appearance: "danger", textButton: "Remover", onClick: () => setCount(count - 1) },
  ]

  return (
    <ListDataUsersTemplate 
      title={title} 
      data={data} 
      handlers={handlers} 
      count={count} 
    />
  );
};

export default DashboardPage;