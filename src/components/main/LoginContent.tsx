import { Button } from 'components'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router'

export const LoginContent = () => {
  const navigate = useNavigate()
  return (
    <div className="text-center py-4" style={{ backgroundColor: '#282c34' }}>
      <Container>
        <h1 className="display-2 text-white">Login Page</h1>
        <p className="lead text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          excepturi quas sed voluptatum magnam, unde quia perspiciatis inventore
          deserunt sit, iusto dignissimos numquam. Dolorem cupiditate tempore
          distinctio amet quos dolore.
        </p>
        <Button
          onClick={() => {
            localStorage.setItem('user', 'user')
            navigate('/')
          }}
          variant="primary"
        >
          Login
        </Button>
      </Container>
    </div>
  )
}
