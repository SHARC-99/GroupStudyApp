import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// or less ideally
// import { Button } from 'react-bootstrap';

const ButtonPage = () => {
  return (
      
    <div className="d-grid gap-2" style={{marginLeft:40}}>
        <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

  <Button variant="primary" size="lg">
    Feature 1
  </Button>
  <Button variant="secondary" size="lg">
  Feature 2
  </Button>
  <Button variant="primary" size="lg">
  Feature 3
  </Button>
</div>
  )}

export default ButtonPage;