import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

function CardItem(props) {
 let { nameProduct, imgProduct, category, units, unityPrice } = props
 return (

      <Card className="mt-3">
        <CardImg top width="100%" src={`${imgProduct}`} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{`${nameProduct}`}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Categoría: {`${category}`}</CardSubtitle>
          <CardText>Precio: ${`${unityPrice}`} por {`${units}`}</CardText>
          <Button className="bg-success border-0">Button</Button>
        </CardBody>
      </Card>
 )
}

export default CardItem