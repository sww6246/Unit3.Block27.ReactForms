import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Auth from './components/Auth'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <SignUpForm setToken={setToken}/>
      <Auth token={token}/>
    </>
  )
}

export default App
