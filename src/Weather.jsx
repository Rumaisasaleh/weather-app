import React from 'react';
import Form from 'react-bootstrap/Form';

function Weather() {
  return (
    <div
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/misty-mountains-background-blue-tone_969965-31718.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '89vh',
        maxWidth: '100%',
        margin: '0 auto',
        padding: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Enter country"
            style={{
              borderRadius: '18px',
              padding: '10px',
              width: '400px',
              marginTop: '30px',
            }}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Weather;
