
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function CreateDriver() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        license_no: '',
        bus_id: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://your-api-endpoint.com/api/drivers/', formData);
            setMessage('Driver created successfully!');
            setError('');
            clearForm();
        } catch (error) {
            console.error('Error creating driver:', error.response ? error.response.data : error.message);
            setMessage('');
            setError('Error creating driver. Please try again.');
        }
    };

    const clearForm = () => {
        setFormData({
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            license_no: '',
            bus_id: ''
        });
    };

    return (
        <Container fluid>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div style={{ width: '100%', maxWidth: '500px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <h1 style={{ textAlign: 'center', color: '#ca5252', fontWeight: 'bold' }}>Create a New Driver</h1>
                    {message && <Alert variant="success">{message}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="first_name">
                            <Form.Label style={{ color: 'grey', fontWeight: 'bold' }}>First Name</Form.Label>
                            <Form.Control type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
                        </Form.Group>

                        

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label style={{ color: 'grey', fontWeight: 'bold' }}>Email</Form.Label>
                            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label style={{ color: 'grey', fontWeight: 'bold' }}>Phone</Form.Label>
                            <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="license_no">
                            <Form.Label style={{ color: 'grey', fontWeight: 'bold' }}>License Number</Form.Label>
                            <Form.Control type="text" name="license_no" value={formData.license_no} onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="bus_id">
                            <Form.Label style={{ color: 'grey', fontWeight: 'bold' }}>Bus ID</Form.Label>
                            <Form.Control type="text" name="bus_id" value={formData.bus_id} onChange={handleChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{ width: '100%', backgroundColor: '#ca5252', border: '2px solid black' }}>
                            Create Driver
                        </Button>
                    </Form>
                </div>
            </div>
        </Container>
    );
}

export default CreateDriver;
