import * as React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { useAuth } from '@/contexts/auth-context';

function HeaderComponent() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <Navbar className="mb-5" bg="light" expand="lg">
      <Container className="justify-content-between" fluid>
        <h4>Diagram Flow</h4>
        {isAuthenticated && (
          <Button variant="dark" onClick={() => logout()}>
            Cikis Yap
          </Button>
        )}{' '}
      </Container>
    </Navbar>
  );
}

export { HeaderComponent };
