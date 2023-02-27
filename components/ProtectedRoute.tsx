import { useRouter } from 'next/router'

const RedirectToLogin = () => {
  const router = useRouter()
  router.push('/login')
  return null
}

export default RedirectToLogin
