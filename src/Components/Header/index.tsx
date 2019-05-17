import React from 'react';
import Logo from './logo.png';
import { Navbar, Form, FormLabel, Button, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Props {
  search: Function,
}

function Header(props: Props) {
  const [string, onStringChange] = React.useState<string>('');

  const onSearch = (searchString: string) => {
    props.search(searchString);
  }
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
            <input className="form-control" type="text" style={{ width: '90%' }} placeholder="Search"
              value={string} onChange={e => onStringChange(e.target.value)} />
            <Button variant="outline-success" onClick={() => onSearch(string)}>Search</Button>
          </div>
          <div className="col-md-2">
            <Link to="/askQuestion">
              <Button variant="primary">Ask</Button>
            </Link>
            <Link to="/" style={{ paddingLeft: '5px' }}>
              <Button variant="primary">Login</Button>
            </Link>
          </div>
        </Form>
      </Navbar>
    </div>
  );
}

export default Header;
