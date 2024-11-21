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

const CadastroProduto = () => {
  //Lista com categorias
  const cats = [
    { id: 1, nome: "Eletrônicos" },
    { id: 2, nome: "Moda e Vestuário" },
    { id: 3, nome: "Alimentos e Bebidas" },
    { id: 4, nome: "Saúde e Beleza" },
    { id: 5, nome: "Esportes e lazer" },
    { id: 6, nome: "Brinquedos e jogos" },
    { id: 7, nome: "Livros e papelaria" },
  ];

  return (
    <div>
      <NavBarra />
      <Container>
        <h1>Cadastrar Produtos</h1>
        <form className="mt-3">
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
                />
              </FloatingLabel>

              {/* Select de categorias */}
              <Form.Group controlId="formGridTipo" className="mb-3" >
                <Form.Label>Tipo de produto</Form.Label>
                <Form.Select>

                {cats.map((cat)=> (
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
                />
              </FloatingLabel>
            </Col>
            <Col xs={6}></Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default CadastroProduto;
