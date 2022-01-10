import { Redirect } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const Landing = () => {
  const { loadUser } = useContext(AuthContext)
  // useEffect(() => loadUser(), [loadUser])
  return <Redirect to='/login' />
}

export default Landing
