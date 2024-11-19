import React from "react";
import CardProduto from "../components/CardProduto";

const Home = () => {
  const produtos = [
    {
      id: 1,
      nome: "Betoneira Turbinada",
      descricao: "Betoneira tunada",
      preco: 10.5,
      categoria: "Máquinas Potentes",
      imagemUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAy3a-9ksNsyf8OsHtdTcpCtLfDi9lPb2E2g&s",
    },

    {
      id: 2,
      nome: "Picareta",
      descricao: "Picareta enferrujada",
      preco: 5.5,
      categoria: "Instrumentos de Crime",
      imagemUrl:
        "https://p.turbosquid.com/ts-thumb/W7/EJAowD/elIgWAik/pickaxe_signature/jpg/1423162486/600x600/fit_q87/04d41ef00c20d63d7cafce20457e611ee4c48f54/pickaxe_signature.jpg",
    },

    {
      id: 3,
      nome: "Picador de Gelo",
      descricao: "Não seja gay e não cometa crime",
      preco: 6.8,
      categoria: "Instrumentos",
      imagemUrl: "https://m.media-amazon.com/images/I/51L+xDPemwL.jpg",
    },
  ];

  return (
    <div>
      <h1>LIsta de Produtos</h1>
      <div className="lista-produtos">
        {/* Card com informações fixas */}
        <CardProduto
          id="1"
          nome="Betoneira Turbinada"
          descricao="Betoneira tunada"
          preco="10,50"
          categoria="Máquinas Potentes"
          imagemUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAy3a-9ksNsyf8OsHtdTcpCtLfDi9lPb2E2g&s"
        />
        {produtos.map((prod) => 
          <CardProduto
            id={prod.id}
            nome={prod.nome}
            descricao={prod.descricao}
            preco={prod.preco}
            categoria={prod.categoria}
            imagemUrl={prod.imagemUrl}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
