import React from 'react';
import Logo from './logo.png';
import { Navbar, Form, FormControl, FormLabel, Button, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
  const searchNow = () => { };
  return (
    <div className="Header">
      <Navbar bg="light" expand="lg">
        <Form inline className="col-md-12">
          <div className="col-md-2">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <FormGroup>
                <img src={Logo} alt='logo' style={{ maxHeight: '50px', maxWidth: '50px' }} />
                <FormLabel style={{ marginLeft: '-7px' }}>Community</FormLabel>
              </FormGroup>
            </Link>
          </div>
          <div className="col-md-8">
            <FormControl type="text" placeholder="Search" style={{ width: '90%' }} />
            <Button variant="outline-success" onClick={() => searchNow}>Search</Button>
          </div>
          <div className="col-md-2">
            <Link to="/askQuestion">
              <Button variant="primary">Ask</Button>
            </Link>
            <Link to="/askQuestion" style={{ paddingLeft: '5px' }}>
              <Button variant="primary">User Login</Button>
            </Link>
          </div>
        </Form>
      </Navbar>
    </div>
  );
}

export default Header;
