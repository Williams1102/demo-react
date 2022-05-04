import { Container, Nav, Navbar } from 'react-bootstrap'

export const Header = () => {
  const user = localStorage.getItem('user')

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/movies">Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Movies</Nav.Link>
            {user ? (
              <Nav.Link
                onClick={() => {
                  localStorage.clear()
                  window.location.reload()
                }}
                href="#"
              >
                Logout User
              </Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
        -
      </Container>
    </Navbar>
  )
}
