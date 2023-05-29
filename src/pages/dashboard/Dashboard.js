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
        console.log(data,'xxxxxx')
        setOrders(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order => {
        if (order.id === orderId) {
          return { ...order, status: newStatus };
        }
        return order;
      })
    );
  };

  const filterOrders = () => {
    if (selectedStatus === 'All') {
      return orders;
    } else {
      return orders.filter(order => order.status === selectedStatus);
    }
  };

  const getTotalPendingOrders = () => {
    return orders.filter(order => order.status === 'Pending').length;
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
                            onChange={e => handleStatusChange(order.id, e.target.value)}
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
