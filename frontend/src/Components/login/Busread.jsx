import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const formStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  padding: '20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
  color: '#ca5252',
  fontWeight: 'bold',
};

const textStyle = {
  color: '#333',
};

function Busread() {
  const [users, setUsers] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/bus');
      console.log(response.data); // Log data to debug
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleBusSelect = (bus) => {
    setSelectedBus(bus);
  };

  return (
    <>
      <Container fluid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0', padding: '20px' }}>
        <div style={{ width: '90%', padding: '20px' }}>
          {selectedBus ? (
            <Card style={formStyle}>
              <Card.Body>
                <Card.Title style={titleStyle}>Bus ID: {selectedBus.busId}</Card.Title>
                <Card.Text style={textStyle}><strong>Bus Name:</strong> {selectedBus.busName ? selectedBus.busName : 'N/A'}</Card.Text>
                <Card.Text style={textStyle}><strong>Bus Number:</strong> {selectedBus.busNumber ? selectedBus.busNumber : 'N/A'}</Card.Text>
                <Card.Text style={textStyle}><strong>Capacity:</strong> {selectedBus.capacity ? selectedBus.capacity : 'N/A'}</Card.Text>
                <Card.Text style={textStyle}><strong>From:</strong> {selectedBus.Route.from ? selectedBus.Route.from : 'N/A'}</Card.Text>
                <Card.Text style={textStyle}><strong>To:</strong> {selectedBus.Route.to ? selectedBus.Route.to : 'N/A'}</Card.Text>
                <Button variant="primary" onClick={() => setSelectedBus(null)}>Back to List</Button>
              </Card.Body>
            </Card>
          ) : (
            <Row>
              {users.map(bus => (
                <Col md={4} key={bus.busId} style={{ marginBottom: '20px' }}>
                  <Card style={formStyle}>
                    <Card.Body>
                      <Card.Title style={titleStyle}>Bus ID: {bus.busId}</Card.Title>
                      <Card.Text style={textStyle}><strong>Bus Name:</strong> {bus.busName ? bus.busName : 'N/A'}</Card.Text>
                      <Card.Text style={textStyle}><strong>Bus Number:</strong> {bus.busNumber ? bus.busNumber : 'N/A'}</Card.Text>
                      <Card.Text style={textStyle}><strong>Capacity:</strong> {bus.capacity ? bus.capacity : 'N/A'}</Card.Text>
                      <Card.Text style={textStyle}><strong>From:</strong> {bus.Route.from ? bus.Route.from : 'N/A'}</Card.Text>
                      <Card.Text style={textStyle}><strong>To:</strong> {bus.Route.to ? bus.Route.to : 'N/A'}</Card.Text>
                      <Button variant="outline-primary" onClick={() => handleBusSelect(bus)} style={{backgroundColor:'#ca5252',color:'white',border:'2px solid black'}}>View Details</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
    </>
  );
}

export default Busread;
