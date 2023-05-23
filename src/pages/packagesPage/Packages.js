import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Packages = () => {
  const [selectedPackages, setSelectedPackages] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const packages = [
    {
      name: "T-shirt",
      price: 15.99
    },
    {
      name: "Jeans",
      price: 49.99
    },
    {
      name: "Dress",
      price: 39.99
    },
    {
      name: "Blouse",
      price: 29.99
    },
    {
      name: "Skirt",
      price: 34.99
    },
    {
      name: "Shorts",
      price: 24.99
    },
    {
      name: "Hoodie",
      price: 39.99
    },
    {
      name: "Sweater",
      price: 49.99
    },
    {
      name: "Jacket",
      price: 59.99
    },
    {
      name: "Suit",
      price: 199.99
    },
    {
      name: "Coat",
      price: 89.99
    },
    {
      name: "Blazer",
      price: 79.99
    },
    {
      name: "Romper",
      price: 39.99
    },
    {
      name: "Jumpsuit",
      price: 49.99
    },
    {
      name: "Leggings",
      price: 24.99
    },
    {
      name: "Pajamas",
      price: 29.99
    },
    {
      name: "Bathrobe",
      price: 39.99
    },
    {
      name: "Tank top",
      price: 19.99
    },
    {
      name: "Cardigan",
      price: 44.99
    },
    {
      name: "Polo shirt",
      price: 29.99
    }
  ];
  ;

  const onSubmit = async data => {
    console.log(data)
    // try {
    //   // Make POST API request
    //   const response = await axios.post('http://example.com/laundry', data, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': '*',
    //     },
    //   });

    //   // Handle response
    //   console.log('API response:', response.data);
    // } catch (error) {
    //   // Handle error
    //   console.log('API error:', error);
    // }
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
             Next
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Packages;


