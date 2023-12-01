import { useAppSelector } from "@/hooks/hook"
import { Navigate } from "react-router-dom"

interface PrivateRouteProps {
  children: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { accessToken } = useAppSelector((state) => state.auth)

  return (
    <>
      {accessToken ? children : <Navigate to={'/'} />}
    </>
  )
}

export default PrivateRoute