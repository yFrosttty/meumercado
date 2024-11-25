// importando components do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

// Importação de componentes
import NavBarra from "../components/NavBarra";

// Importando o hook useState para monitorar a mudança das variáveis
import { useState, useEffect } from "react";

//Importação do navigate pra transitar entre páginas
import { useNavigate } from "react-router-dom";

const url = "http://localhost:5000/cats"

const CadastroProduto = () => {
const [cats, setCategorias] = useState([]);

useEffect(() =>{
  async function fetchData(){
    try{
      const req = await fetch(url)
      const cats = await req.json()
      console.log(cats)
      setCategorias(cats)
    }
    catch(error){
      console.log(error.message)
    }
  }
  fetchData();
}, [])

  const linkImagem =
    "https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png";

  //Variáveis para o produto
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");

  //Variáveis para o alerta
  const [alertClass, setAlertClass] = useState("mb-3 d-none");
  const [alertMensagem, setAlertMensagem] = useState("");
  const [alertVariant, setAlertVariant] = useState("danger");

  // Criando o navigate
  const navigate = useNavigate();

  //Função pra lidar com recarregamento da página
  const handleSubmit = async (e) => {
    //Previne a página de ser recarregada
    e.preventDefault();

    if (nome != "") {
      if (descricao != "") {
        if (preco != "") {
          const produto = { nome, descricao, categoria, preco, imagem };
          console.log(produto);
          setAlertClass("mb-3 mt-2");
          setAlertVariant("success");
          setAlertMensagem("Produto cadastrado com sucesso");
          alert("Produto cadastrado com sucesso");
          navigate("/home");
        } else {
          setAlertClass("mb-3 mt-2");
          setAlertMensagem("O campo preço não pode ser vazio");
        }
      } else {
        setAlertClass("mb-3 mt-2");
        setAlertMensagem("O campo descrição não pode ser vazio");
      }
    } else {
      setAlertClass("mb-3 mt-2");
      setAlertMensagem("O campo nome não pode ser vazio");
    }
  };

  return (
    <div>
      <NavBarra />
      <Container>
        <h1>Cadastrar Produtos</h1>
        <form className="mt-3" onSubmit={handleSubmit}>
          <Row>
            <Col xs={6}>
              {/* Caixinha de nome */}
              <FloatingLabel
                controlId="floatingInputNome"
                label="Nome"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Digite o nome do produto"
                  value={nome}
                  onChange={(e) => {
                    setNome(e.target.value);
                  }}
                />
              </FloatingLabel>

              {/* Caixinha de descrição */}
              <FloatingLabel
                controlId="floatingInputDescricao"
                label="Descrição"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Digite a descrição do produto"
                  value={descricao}
                  onChange={(e) => {
                    setDescricao(e.target.value);
                  }}
                />
              </FloatingLabel>

              {/* Select de categorias */}
              <Form.Group controlId="formGridTipo" className="mb-3">
                <Form.Label>Tipo de produto</Form.Label>
                <Form.Select
                  value={categoria}
                  onChange={(e) => {
                    setCategoria(e.target.value);
                  }}
                >
                  {cats.map((cat) => (
                    <option key={cat.id} value={cat.nome}>
                      {cat.nome}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              {/* Caixinha de preço */}
              <FloatingLabel
                controlId="floatingInputPreco"
                label="Preço"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  step="0.1"
                  placeholder="Digite o preco"
                  value={preco}
                  onChange={(e) => {
                    setPreco(e.target.value);
                  }}
                />
              </FloatingLabel>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formFileLg" className="mb-3">
                {/* Caixinha de imagem */}
                <FloatingLabel
                  controlId="floatingInputImagem"
                  label="Envie o link da imagem do produto"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Envie o link da imagem do produto"
                    value={imagem}
                    onChange={(e) => {
                      setImagem(e.target.value);
                    }}
                  />
                </FloatingLabel>

                <Image
                  src={imagem == "" ? linkImagem : imagem}
                  rounded
                  width={300}
                  height={300}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Alerta caso haja erro */}
          <Alert variant={alertVariant} className={alertClass}>
            {alertMensagem}
          </Alert>

          {/* Botão para enviar o formulário de cadastro de produto */}
          <Button variant="primary" size="lg" type="submit">
            Cadastrar
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default CadastroProduto;
