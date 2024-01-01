import React from "react";
import './product.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Product(props) {
  return (
  <>
    <Container>
       <Row>
        <Col className="sm-2"></Col>
        <Col className="sm-8">
          <div className="card" >
              <article>
                <img className="product--image " src={props.url} alt="" />
                <h2>{props.name}</h2>
               <div className="content">
              <p>{props.description}</p>
              </div>
           </article>   
        </div>
        </Col>
      <Col className="sm-2"></Col>
    </Row>
</Container>
  </>
  );
}
