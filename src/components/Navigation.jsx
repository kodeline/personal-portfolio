import {Navbar, Container, Nav} from "react-bootstrap"

function Navigation () {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">NAVARRO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div>
              
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation