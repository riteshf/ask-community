import React from 'react';
import Logo from './logo.png';

import { Navbar, Form, FormControl, FormLabel, Button } from 'react-bootstrap';

function Header() {
  return (
    <div className="Header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Form inline>
            <img src={Logo} alt='logo' style={{ maxHeight: '50px', maxWidth: '50px' }} />
            <FormLabel style={{marginLeft: '-7px'}}>Community</FormLabel>
          </Form>
        </Navbar.Brand>
        <Form inline className="col-md-10">
          <FormControl type="text" placeholder="Search" className="col-md-10" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Header;
