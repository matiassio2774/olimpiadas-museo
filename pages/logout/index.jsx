import { useEffect } from "react";
import { useAuthContext } from "../../context/authContext";
import {useRouter} from 'next/router'


function Logout() {
  const router = useRouter()
  const {logout} = useAuthContext()
  useEffect(() => logout()
  )
  router.push('/login')
  return null
}

export default Logout