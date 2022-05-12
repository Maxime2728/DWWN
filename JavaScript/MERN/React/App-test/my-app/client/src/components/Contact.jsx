import React from 'react';
import {Container, Row, Col, Table, Image} from "react-bootstrap";
import {BsTelephoneInbound} from "react-icons/bs";
import {BsPhone} from "react-icons/bs";
import {FiMail} from "react-icons/fi"


const Contact = () => {
  return (
    <>
        <Container style={{marginTop:'50px'}}>
            <Row>
                <Col md={6}>
                    <h1>Pizza Delicious</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestias neque sit animi perferendis voluptates id aut dolorem officia esse at odit quis aliquam, dicta delectus beatae deserunt. Mollitia, sequi.</p>
            
            <Table striped bordered hover className='text-center'>
                <thead>
                    <tr>
                    <th className='bg-warning' colSpan={3}>-- Nos Coordonnées --</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <BsTelephoneInbound style={{color:'black', fontSize:'18px'}}/>
                        </td>
                        <td>Téléphone</td>
                        <td>01.68.95.76.48</td>
                    </tr>
                    <tr>
                        <td><BsPhone style={{color:'black', fontSize:'18px'}}/></td>
                        <td>Portable</td>
                        <td>06.95.97.36.15</td>
                    </tr>
                    <tr>
                        <td>
                            <FiMail style={{color:'black', fontSize:'18px'}}/>
                        </td>
                        <td>Email</td>
                        <td>contact@pizza-delicious.com</td>
                    </tr>
                </tbody>
            </Table>
        </Col>
        <Col md={6}>
            <Image src="images/farmhouse.jpg" style={{width:'100%', height:'100%'}}/>
        </Col>
    </Row>
</Container>
    </>
  )
}

export default Contact