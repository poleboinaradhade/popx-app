import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem', background: 'linear-gradient(180deg, #f7f8f9 0%, #eef2ff 100%)'}}>
      <div style={{marginBottom: 'auto', paddingTop: '4rem'}}>
        <h1 style={{fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#1a1a1a'}}>Welcome to PopX</h1>
        <p style={{color: '#666', lineHeight: '1.6', fontSize: '1rem'}}>
          Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit
        </p>
      </div>
      
      <button 
        onClick={() => navigate('/signup')}
        style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '1rem', borderRadius: '1rem', border: 'none', fontSize: '1rem', fontWeight: '600', marginBottom: '0.8rem', width: '100%', cursor: 'pointer', boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'}}>
        Create Account
      </button>
      
      <button 
        onClick={() => navigate('/login')}
        style={{background: 'linear-gradient(135deg, #d9d0ff 0%, #c5b9ff 100%)', color: '#1a1a1a', padding: '1rem', borderRadius: '1rem', border: 'none', fontSize: '1rem', fontWeight: '600', width: '100%', cursor: 'pointer', boxShadow: '0 4px 15px rgba(108, 37, 255, 0.2)'}}>
        Already Registered? Login
      </button>
    </div>
  )
}