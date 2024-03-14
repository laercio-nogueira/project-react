import React from "react";
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

  return (
    <ListDataUsersTemplate title={title} data={data} />
  );
};

export default DashboardPage;