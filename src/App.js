import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import FormPage from './MyComponents/Signin';
import "bootstrap/dist/css/bootstrap.css";
import SigninPicture from './MyComponents/SigninPicture';
import {Button, Alert, Row, Col} from 'react-bootstrap';


function App() {

  return ( 
    <div className="App">
      <Header />
      <Row className="landing">
        <Col ><FormPage /></Col>
        <Col ><SigninPicture /></Col>
      </Row>
      <Footer/>
    </div>
  );
  }
export default App;









