import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Packages = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const packages = [
    { name: 'shirts 1', price: 10 },
    { name: 'pants  2', price: 15 },
    { name: 'skirts 3', price: 20 },
    // Add more packages...
  ];

  const onSubmit = async data => {
    try {
      // Make POST API request
      const response = await axios.post('http://example.com/laundry', data, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

      // Handle response
      console.log('API response:', response.data);
    } catch (error) {
      // Handle error
      console.log('API error:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Laundry Packages</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {packages.map((packag, index) => (
              <Form.Group controlId={`package-${index}`} key={index}>
                <Form.Check
                  type="checkbox"
                  label={`${packag.name} - $${packag.price}`}
                  {...register(`packages[${index}]`)}
                />
              </Form.Group>
            ))}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Packages;


