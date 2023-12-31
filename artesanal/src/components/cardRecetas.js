import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Queso from "../img/queso.jpg";

function CardRecetas({ imagen, nombre, id }) {
  return (
    <Card className="w-60 h-60">
      <Card.Img variant="top" src={Queso} />
      <Card.Body>
        <Card.Title><Badge bg="secondary">Asadera chica</Badge></Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardRecetas;