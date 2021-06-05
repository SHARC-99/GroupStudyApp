import React from 'react';
   import {Form, Button} from 'react-bootstrap';

const FormPage = () => {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
                <Form.Group >
                    <Form.Label>Enter your email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Enter your password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <Button type="submit">Signin</Button>
                <div style={{ flex: 1 }}>
                <Button className="btn btn-sm btn-success">SignUp</Button>
                </div>
            </Form>
        </div>
    )
}

export default FormPage;