import { useAuth } from '../context/AuthContext'
import RedirectToLogin from './ProtectedRoute'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth()
  return currentUser ? (
    <Component {...rest} />
  ) : (
    <RedirectToLogin />
  )
}

export default ProtectedRoute
