import App from 'App'
import { Header } from 'components/header'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { LoginContent } from './LoginContent'
import {
  MoviesContent,
  MoviesListContent,
  ReviewMoviesContent,
} from './MoviesContent'

export const Main = ({}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <GoHome>
              <LoginContent />
            </GoHome>
          }
        />
        <Route
          path="/"
          element={
            <RequireAuth>
              <MoviesListContent />
            </RequireAuth>
          }
        />
        <Route
          path="/movies/:id"
          element={
            <RequireAuth>
              <MoviesContent />
            </RequireAuth>
          }
        />
        <Route
          path="/movies/:id/add-review"
          element={
            <RequireAuth>
              <ReviewMoviesContent />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

function RequireAuth({ children }: { children: JSX.Element }) {
  let location = useLocation()
  const user = localStorage.getItem('user')

  return user ? (
    <>
      <Header />
      {children}
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}
function GoHome({ children }: { children: JSX.Element }) {
  let location = useLocation()
  const user = localStorage.getItem('user')

  return !user ? (
    <>
      <Header />
      {children}
    </>
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  )
}
