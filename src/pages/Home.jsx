// importando components do bootstrap
import React, { useState, useEffect} from "react";
import CardProduto from "../components/CardProduto";
import Container from "react-bootstrap/Container";

// Importação de componentes
import NavBarra from "../components/NavBarra";

const url = "http://localhost:5000/produtos"

const Home = () => {

  const [produtos, setProdutos] = useState([]);

  useEffect(() =>{
    async function fetchData(){
      try{
        const req = await fetch(url)
        const prods = await req.json()
        console.log(prods)
        setProdutos(prods)
      }
      catch(error){
        console.log(error.message)
      }
    }
    fetchData();
  }, [])
  return (
    <div>
      <NavBarra />
      <h1>Lista de produtos</h1>
      <Container>
        <div className="lista-produtos d-flex col-12 gap-2 mt-3 justify-content-start flex-wrap">
          {/* Card com informações fixas */}
          {/* <CardProduto
          id="1"
          nome="Shampoo Cr7"
          descricao="Melhor shampoo do mundo"
          preco="7,77"
          categoria="Saúde e beleza"
          imagemUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAiGeCC3KhBPz8xa_dcPdPor2D__CuueBzeA&s"
        /> */}

          {/* Card com informações variáveis */}
          {produtos.map((prod) => (
            <CardProduto
              key={prod.id}
              id={prod.id}
              nome={prod.nome}
              descricao={prod.descricao}
              preco={prod.preco}
              categoria={prod.categoria}
              imagemUrl={prod.imagemUrl}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
