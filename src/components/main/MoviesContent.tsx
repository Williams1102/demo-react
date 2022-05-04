import React, { useState } from 'react'
import { Button, Container, ListGroup } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router'
import { Link, useParams } from 'react-router-dom'

const listText = [
  'Cras justo odio',
  'Dapibus ac facilisis in',
  'Porta ac consectetur ac',
  'Vestibulum at eros',
]

export const MoviesListContent: React.FC = () => {
  return (
    <div className="text-center py-4" style={{ backgroundColor: '#282c34' }}>
      <Container>
        <h1 className="display-2 text-white">Movies Page</h1>
        <ListGroup>
          {listText.map((o, idx) => (
            <ListGroup.Item key={`movie-#${idx}`}>
              <Link to={`movies/${idx}`}>{o}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </div>
  )
}
export const MoviesContent: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="text-center py-4" style={{ backgroundColor: '#282c34' }}>
      <Container>
        <h1 className="display-2 text-white">{listText[+id]}</h1>
        <Button
          onClick={() => {
            navigate(location.pathname + '/add-review')
          }}
          variant="primary"
        >
          Review
        </Button>
        <Button
          className="ml-2"
          onClick={() => {
            navigate('/')
          }}
          variant="secondary"
        >
          Back to list
        </Button>
      </Container>
    </div>
  )
}

export const ReviewMoviesContent: React.FC = () => {
  const { id } = useParams()
  const [cmt, setCmt] = useState([])
  const navigate = useNavigate()

  return (
    <div className="text-center py-4" style={{ backgroundColor: '#282c34' }}>
      <Container>
        <h1 className="display-2 text-white">
          {' '}
          Review Movie - {listText[+id]}
        </h1>
        {cmt.map((o, idx) => (
          <ListGroup.Item key={`review-#${idx}`}>review #{o}</ListGroup.Item>
        ))}
        <Button
          onClick={() => {
            setCmt((cur) => [...cur, cur.length + 1])
          }}
          variant="primary"
        >
          Add Review
        </Button>
        <Button
          className="ml-2"
          onClick={() => {
            navigate('/')
          }}
          variant="secondary"
        >
          Back to list
        </Button>
      </Container>
    </div>
  )
}
