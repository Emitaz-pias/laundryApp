import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Badge, Form } from 'react-bootstrap';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState('All');

  useEffect(() => {
    // Simulating fetching orders from an API
    const fetchOrders = async () => {
      try {
        // Mock API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        const response = await fetch('http://localhost:5000/getAllOrders'); // Replace with your actual API endpoint
        const data = await response.json();
        setOrders(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);
// update pending orders to shipping
const handleShipping = async (id) => {
  const orderId = id
  console.log(id,'isisisisid')
  try {
    // Make the API call to update the status
    const response = await fetch(`http://localhost:5000/orders/${orderId}/shipped`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.error('Error updating order status:', error);
  }

};

// update pending orders to delivered
const handleDelivered = async (id) => {
  const orderId = id
  try {
    // Make the API call to update the status
    const response = await fetch(`http://localhost:5000/orders/${orderId}/delivered`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.error('Error updating order status:', error);
  }

};

// handle orders status
  const handleStatusChange = (orderId, newStatus) => {
    if(newStatus ==='Shipped'){
      handleShipping(orderId)
    }
    else if(newStatus ==='Delivered'){
      handleDelivered(orderId)
    }
    
  };

  const filterOrders = () => {
    if (selectedStatus === 'All') {
      return orders;
    } else {
      return orders.filter(order => order.status === selectedStatus);
    }
  };

  const getTotalPendingOrders = () => {
    return orders.filter(order => order.status === 'pending').length;
  };
  const getTotalShippedOrders = () => {
    return orders.filter(order => order.status === 'Shipped').length;
  };

  const getTotalDeliveredOrders = () => {
    return orders.filter(order => order.status === 'Delivered').length;
  };

  return (
    <Container>
      
      <Row>
        <Col>
          <h2>Order Management</h2>
          <Form.Group controlId="statusFilter">
            <Form.Label>Filter by Status:</Form.Label>
            <Form.Control
              as="select"
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </Form.Control>
          </Form.Group>
          {isLoading ? (
            <p>Loading orders...</p>
          ) : (
            <>
              <p>Total Pending Orders: {getTotalPendingOrders()}</p>
              <p>Total Shipped Orders: {getTotalShippedOrders()}</p>
              <p>Total Delivered Orders: {getTotalDeliveredOrders()}</p>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filterOrders().map(order => (
                    <tr key={order._id}>
                      <td>{order._id}</td>
                      <td>{order.packageData.title}</td>
                      <td>
                        <Badge variant={order.status === 'Pending' ? 'danger' : 'success'}>
                          {order.status}
                        </Badge>
                      </td>
                      <td>
                        {order.status !== 'Delivered' && (
                          <Form.Control
                            as="select"
                            value={order.status}
                            onChange={e => handleStatusChange(order._id, e.target.value)}
                          >
                            <option value="Pending">Pending</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                          </Form.Control>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
