/*import de react con uso de estados*/
import React, { useState, useEffect } from 'react';

//Componentes
import CardItem from './Components/CardItem/index';
import TopNavBar from "./Components/TopNavBar/index";
/* import HeaderBar from './Components/HeaderBar/index'
import ModalProduct from './Components/ModalProduct/index' */
import './App.css';

import {
  Col,
  Row,
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';

//Functional function
function App() {
  /*Endpoint*/
  const url = "https://desafio-esp-js-default-rtdb.firebaseio.com/marketplace/.json"

  /*Hooks*/
  const [newProduct, setNewProduct] = useState({})   /*Creacion del nuevo producto*/
  const [allProducts, setAllProducts] = useState([])

  /*Action of Hooks*/
  const changeHandler = event => {
    let property = event.target.name
    let value = event.target.value
    setNewProduct({ ...newProduct, [property]: value })
  }

  const getAllProducts = () => {
    fetch(url).then(res => res.json()) /*que hace esto??*/
      .catch(error => console.error('Error', error))
      .then(response => setAllProducts(Object.values(response).reverse()))
  }

  const saveHandler = () => {
    if (Object.keys(newProduct).length === 5) {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(newProduct),
      }).then(res => res.json()) /*que hace esto??*/
        .catch(error => console.error('Error', error))
        .then(response => console.log('Success:', response))

        getAllProducts()
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div className="App">
      <TopNavBar></TopNavBar>
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Form className="border border-success p-3 shadow">
              <FormGroup>
                <Label className="m-2">Nombre del Producto</Label>
                <Input className="border border-success" name="nameProduct" onChange={changeHandler}></Input>

                <Label className="m-2">Imagen</Label>
                <Input className="border border-success" name="imgProduct" placeholder="Ingresa una URL" onChange={changeHandler}></Input>

                <Label className="m-2">Categoría</Label>
                <Input className="border border-success" type="select" name="category" onChange={changeHandler}>
                  <option selected disabled>Selecciona la categoria</option>
                  <option value="Fruta">Fruta</option>
                  <option value="Vegetal">Vegetal</option>
                  <option value="Carne">Carne</option>
                  <option value="Misceláneo">Misceláneo</option>
                </Input>

                <Label className="m-2">Unidades</Label>
                <Input className="border border-success" type="select" name="units" onChange={changeHandler}>
                  <option selected disabled>Selecciona la categoria</option>
                  <option value="kg">Kilogramo</option>
                  <option value="lt">Litros</option>
                  <option value="pz">Piezas</option>
                </Input>

                <Label className="m-2">Precio Unitario</Label>
                <InputGroup className="border border-success">
                  <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                  <Input name="unityPrice" placeholder="Precio" min={0} max={100} type="number" step="1" onChange={changeHandler} />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>

                <Button className="m-2 bg-success border-0" type="button" onClick={saveHandler}>Agregar</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {
            allProducts.map(data => {
                  return (
                <Col sm="12" md="4">
                  <CardItem
                    nameProduct={data.nameProduct}
                    imgProduct={data.imgProduct}
                    category={data.category}
                    units={data.units}
                    unityPrice={data.unityPrice}
                  ></CardItem>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div >
  )
}

export default App;
