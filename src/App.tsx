import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import Signup from './Signup'
import Profile from './Profile'
import Login from './Login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}