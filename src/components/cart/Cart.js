import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = item => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  const removeFromCart = item => {
    setCartItems(prevItems => prevItems.filter(prevItem => prevItem.id !== item.id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ListGroup>
              {cartItems.map(item => (
                <ListGroup.Item key={item.id}>
                  <Row>
                    <Col>{item.name}</Col>
                    <Col>${item.price}</Col>
                    <Col>
                      <Button variant="danger" onClick={() => removeFromCart(item)}>
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
              <ListGroup.Item>
                <Row>
                  <Col>Total:</Col>
                  <Col>${calculateTotal()}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Products</h3>
          <Button variant="primary" onClick={() => addToCart({ id: 1, name: 'Product 1', price: 10 })}>
            Add Product 1 to Cart
          </Button>
          <Button variant="primary" onClick={() => addToCart({ id: 2, name: 'Product 2', price: 20 })}>
            Add Product 2 to Cart
          </Button>
          <Button variant="primary" onClick={() => addToCart({ id: 3, name: 'Product 3', price: 30 })}>
            Add Product 3 to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
