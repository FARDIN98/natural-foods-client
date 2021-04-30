import React, { useContext } from 'react';
import {Navbar,Nav,Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Natural-Foods</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/review">Review</Nav.Link>
                    <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
                    <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                </Nav>
                <Form inline>
                    <Button as={Link} to="/login" variant="outline-primary">{loggedInUser.displayName || loggedInUser.email ? loggedInUser.displayName || loggedInUser.email : "Login"}</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;