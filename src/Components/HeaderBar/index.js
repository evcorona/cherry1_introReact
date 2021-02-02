import {
  Button
} from 'reactstrap';

function HeaderBar() {

  return (
    <header>
      <div className="card text-center">
        <div className="card-header">
          My Shop
     </div>
        <div className="card-body">
          <h5 className="card-title">Nuestros productos</h5>
          <p className="card-text">Gran variedad grandes categorias</p>
         <div className="btn-group" role="group" aria-label="Basic example">
            <Button type="Button" className="btn btn-light btn-outline-success" data-filter="Fruit">Frutas</Button>
            <Button type="Button" className="btn btn-light btn-outline-success" data-filter="Vegetable">Vegetales</Button>
            <Button type="Button" className="btn btn-light btn-outline-success" data-filter="Meat">Carne</Button>
            <Button type="Button" className="btn btn-light btn-outline-success" data-filter="Miscelaneous">Miscelaneos</Button>
            <Button type="Button" className="btn btn-success" data-filter="All">Todo</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderBar