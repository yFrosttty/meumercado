import { CardSubtitle } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardProduto = (props) => {
  return (
    <div>
      <Card style={{ width: '16rem', height:'30rem' }}>
        {/* Imagem do card */}
      <Card.Img variant="top" src={props.imagemUrl} height="200px" />
      
      <Card.Body>
        {/* Titulo do card com nome do produto */}
        <Card.Title>{props.nome}</Card.Title>
        {/* Subtitulo no card com o preço  */}
        <Card.Subtitle className='mb-2 text-muted'>Preço: {props.preco} </Card.Subtitle>
        <Card.Text>
         <b>Descrição: </b> <br></br> {props.descricao}
        </Card.Text>

        <Card.Text>
         <b>Categoria: </b> <br></br> {props.categoria}
        </Card.Text>
        
        <Card.Link href='/'>
        <Button variant="warning">Editar</Button>
        </Card.Link>

        <Card.Link href='/'>
        <Button variant="danger">Excluir</Button>
        </Card.Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardProduto
