import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'

const LoginForm = () => {
  // Context
  const { loginUser, loadUser } = useContext(AuthContext)

  // Local state
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  })

  const [alert, setAlert] = useState(null)

  const { username, password } = loginForm

  const onChangeLoginForm = (event) =>
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    })

  const login = async (event) => {
    event.preventDefault()

    try {
      const loginData = await loginUser(loginForm)
      if (!loginData.success) {
        setAlert({ type: 'danger', message: loginData.message })
        //alert will disappear after 5s:
        setTimeout(() => setAlert(null), 5000)
      }
      // loadUser()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Form className='my-4' onSubmit={login}>
        <AlertMessage info={alert} />
        <Form.Group className='mb-3'>
          <Form.Control
            type='text'
            placeholder='Username'
            name='username'
            required
            value={username}
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            required
            value={password}
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Button variant='success' type='submit'>
          Login
        </Button>
      </Form>
      <p>
        Don't have an account?
        <Link to='/register'>
          <Button variant='info' size='sm' className='btn'>
            Register
          </Button>
        </Link>
      </p>
    </>
  )
}

export default LoginForm
