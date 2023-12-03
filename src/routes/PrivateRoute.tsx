import { useAppSelector } from "@/hooks/hook"
import { Navigate } from "react-router-dom"

interface PrivateRouteProps {
  children: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { accessToken, role } = useAppSelector((state) => state.auth)

  return (
    <>
      {role === "ADMIN" ? children : accessToken ?
        <Navigate to={'/'} /> : <Navigate to={'/login'} />
      }
    </>
  )
}

export default PrivateRoute