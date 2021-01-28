import {
  NavLink,
  Nav,
  Button
  } from 'reactstrap';

function TopNavBar() {

    return (
        <Nav className="navbar navbar-light bg-light shadow-sm p-3 mr-3 mx-2 mb-4">
            <NavLink className="navbar-brand text-success">Crown Shop</NavLink>
            <div className="btn-group" role="group" aria-label="Basic example">
                <Button type="button" className="btn btn btn-outline-success btn-light" data-toggle="modal" data-target="#addProduct">
                    Agregar Producto
        </Button>
                <Button className="btn btn-success" data-toggle="modal" data-target="#my-chart"><i
                    className="fas fa-shopping-cart mr-2"></i>Mi Carrito</Button>
            </div>
        </Nav>
    )
}

export default TopNavBar
