import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





export function MyNavbar(){
    return (
        <>
      <div class="container border">
        
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">COFFEE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-5 border">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">COFFEE</Nav.Link>
            <Nav.Link href="#link">GALLERY</Nav.Link>
            <Nav.Link href="#link">SHOP</Nav.Link>
            <Nav.Link href="#link">ABOUT</Nav.Link>
            <Nav.Link href="#link">LOGIN</Nav.Link>

            
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



      </div>
     
     
        </>
    )
}