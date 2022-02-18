import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { UILink } from '@/components/link';

function Page404() {
  /*
  Page404 Lifecycle
  */

  /*
  Page404 Functions
  */

  return (
    <div className="d-flex flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <span className="d-block">404</span>
            <div className="mb-4">Aradiginiz sayfa bulunamadi.</div>
            <UILink className="text-underline" to="/">
              Anasayfaya Git
            </UILink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const _Page404 = Page404;

export { _Page404 as Page404 };
