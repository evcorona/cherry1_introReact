import React, { Component } from 'react';
import CardItem from './Components/CardItem/index';
import TopNavBar from "./Components/TopNavBar/index";
import HeaderBar from './Components/HeaderBar/index'
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

class App extends Component {
  constructor() {
    super()
    this.state = {
      productsArray: [
        {
          nameProduct: "Plátano",
          imgProduct: "https://www.educima.com/foto-platano-dm5256.jpg",
          category: "fruit",
          units: "kg",
          unityPrice: 17
        }
      ],
      newProduct: {}
    }

    this.changeHandler = this.changeHandler.bind(this)
    this.saveHandler = this.saveHandler.bind(this)
  }

  changeHandler = event => {
    let property = event.target.name
    let value = event.target.value
    this.setState({
      newProduct: { ...this.state.newProduct, [property]: value }
    })
    console.log(this.state.newProduct)
  }

  saveHandler = () => {
    this.setState({
      productsArray: [...this.state.productsArray, this.state.newProduct]
    })
  }


  render() {
    return (
      <div className="App">
        <TopNavBar></TopNavBar>
        <Container>
          <Row>
            <Col xs="6">
              <Form className="border border-sucess p-3 shadow">
                <FormGroup>
                  <Label className="m-2">Nombre del Producto</Label>
                  <Input name="nameProduct" onChange={this.changeHandler}></Input>

                  <Label className="m-2">Imagen</Label>
                  <Input name="imgProduct" placeholder="Ingresa una URL" onChange={this.changeHandler}></Input>

                  <Label className="m-2">Categoría</Label>
                  <Input type="select" name="category" onChange={this.changeHandler}>
                    <option selected disabled>Selecciona la categoria</option>
                    <option value="Fruta">Fruta</option>
                    <option value="Vegetal">Vegetal</option>
                    <option value="Carne">Carne</option>
                    <option value="Misceláneo">Misceláneo</option>
                  </Input>

                  <Label className="m-2">Unidades</Label>
                  <Input type="select" name="units" onChange={this.changeHandler}>
                    <option selected disabled>Selecciona la categoria</option>
                    <option value="kg">Kilogramo</option>
                    <option value="lt">Litros</option>
                    <option value="pz">Piezas</option>
                  </Input>

                  <Label className="m-2">Precio Unitario</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                    <Input name="unityPrice" placeholder="Precio" min={0} max={100} type="number" step="1" onChange={this.changeHandler} />
                    <InputGroupAddon addonType="append">.00</InputGroupAddon>
                  </InputGroup>

                  <Button className="m-2 bg-success border-0" type="button" onClick={this.saveHandler}>Agregar</Button>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
              {this.state.productsArray.map(data => {
                return (
                  <Col xs="4">
                    <CardItem
                      nameProduct={data.nameProduct}
                      imgProduct={data.imgProduct}
                      category={data.category}
                      units={data.units}
                      unityPrice={data.unityPrice}
                    ></CardItem>
                  </Col>
                )
              })}
          </Row>
        </Container>
      </div >
    );
  }
}

export default App;
