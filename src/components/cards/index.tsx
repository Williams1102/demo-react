import React from 'react'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'

import data from 'meta.json'

export const Cards: React.FC = () => {
  const user = localStorage.getItem('user')

  return (
    <Container className="my-5 flex-grow-1">
      <Row>
        {(data?.plugins ?? []).map((plugin) => (
          <Col md={4} key={plugin.name} className="mb-3">
            <Card className="border-none">
              <Card.Body>
                <Card.Title>{plugin.name}</Card.Title>
                <Card.Text>{plugin.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {user && (
          <Button
            onClick={() => {
              localStorage.clear()
              window.location.reload()
            }}
            variant="primary"
          >
            Logout
          </Button>
        )}
      </Row>
    </Container>
  )
}
