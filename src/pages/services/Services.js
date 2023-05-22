import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const Services = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const services = [
        { name: 'Dry Wash', price: 5 },
        { name: 'Clean', price: 3 },
        { name: 'Iron', price: 2 },
        // Add more services...
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
          <h2>Laundry Services</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {services.map((service, index) => (
              <Form.Group controlId={`service-${index}`} key={index}>
                <Form.Check
                  type="checkbox"
                  label={`${service.name} - $${service.price}`}
                  {...register(`services[${index}]`)}
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

export default Services;