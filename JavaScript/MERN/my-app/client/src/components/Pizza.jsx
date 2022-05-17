import React, {useState} from 'react';
import {Card, Button, Row, Col, Modal} from "react-bootstrap";

const Pizza = (props) => {
  const[taille,setTaille] = useState('small');
  const[quantite, setQuantite] = useState(1);
  const[show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card style={{width:'18rem'}}>
      <Card.Img variant='top' src={props.lapizza.image}/>
      <Card.Body>
        <Card.Title>{props.lapizza.nom}</Card.Title>
        <Card.Text>
          <Row>
            <Col md={6}>
              <h6>Taille :
                <select value={taille}
                onChange={(e)=> setTaille(e.target.value)}>
                  {props.lapizza.taille.map(taille =>(
                    <option>{taille}</option>
                  ))}
                </select>
              </h6>
            </Col>
            <Col md={6}>
              <h6>Quantité :<br/>
                <select value={quantite}
                onChange={(e)=> setQuantite(e.target.value)}>
                  {[...Array(10).keys()].map((v,i)=>(
                    <option>{i+1}</option>
                  ))}
                </select>
              </h6>
            </Col>
          </Row>
          <Col md={6}>
            Prix : {props.lapizza.prix[0][taille]*quantite} €
          </Col>
          <Col md={6}>
            <Button className='bg-warning text-light' style={{width:'100px'}} onClick={handleShow}>Ajouter</Button>
            <Button className='bg-warning text-light text-center' style={{}} onClick={handleShow}>+ d'infos</Button>
          </Col>
        </Card.Text>
      </Card.Body>
    </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
        <Card.Img variant='top' src={props.lapizza.image}/>
        </Modal.Header>
        <Modal.Body>
          <h3>{props.lapizza.nom}</h3>
          <p>{props.lapizza.description}</p>
            {/* --------------------------------- */}
          <Col md={6}>
              <h6>Taille : <br />
                <select value={taille}
                onChange={(e)=> setTaille(e.target.value)}>
                  {props.lapizza.taille.map(taille =>(
                    <option>{taille}</option>
                  ))}
                </select>
              </h6>
            </Col>
            {/* --------------------------------- */}
            <Col md={6}>
              <h6>Quantité :<br/>
                <select value={quantite}
                onChange={(e)=> setQuantite(e.target.value)}>
                  {[...Array(10).keys()].map((v,i)=>(
                    <option>{i+1}</option>
                  ))}
                </select>
              </h6>
            </Col>

            <Col md={6}>
              <h6>Prix : {props.lapizza.prix[0][taille]*quantite} €</h6>
            </Col>

            <Col md={6}>
              <h6>Catégorie :</h6> <p>{props.lapizza.categorie}</p> 
            </Col>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          
          {/* Un bouton qui sert à ajouter les données au panier */}
          <Button variant="primary" onClick={handleClose}>
            Ajouter au panier
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Pizza