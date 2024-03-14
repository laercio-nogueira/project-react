import React from "react";
import Items from "./components/Items";

const App = () => {
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
    <div className="container">
      <h3>{title}</h3>
      {
        data.map((item, index) => (
          <Items
            key={index}
            { ...item }
          />
        ))
      }
    </div>
  );
};

export default App;