import { useNavigate, useState } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div style={{minHeight: '100vh', padding: '2rem', backgroundColor: '#f7f8f9', paddingBottom: '6rem'}}>
      
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        style={{background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', marginBottom: '1rem'}}>
        ←
      </button>
      
      <h1 style={{fontSize: '1.8rem', fontWeight: '600', marginBottom: '0.5rem'}}>
        Signin to your<br/>PopX account
      </h1>
      <p style={{color: '#666', marginBottom: '2rem'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      
      <div style={{marginBottom: '1.5rem', position: 'relative'}}>
        <label style={{position: 'absolute', top: '-8px', left: '12px', backgroundColor: '#f7f8f9', padding: '0 4px', fontSize: '0.8rem', color: '#6c25ff'}}>
          Email Address
        </label>
        <input 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)} 
          placeholder="Enter email address" 
          style={{width: '100%', padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #ccc', backgroundColor: 'white', boxSizing: 'border-box'}}
        />
      </div>

      <div style={{marginBottom: '2rem', position: 'relative'}}>
        <label style={{position: 'absolute', top: '-8px', left: '12px', backgroundColor: '#f7f8f9', padding: '0 4px', fontSize: '0.8rem', color: '#6c25ff'}}>
          Password
        </label>
        <input 
          type="password" 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)} 
          placeholder="Enter password" 
          style={{width: '100%', padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #ccc', backgroundColor: 'white', boxSizing: 'border-box'}}
        />
      </div>

      <button 
        onClick={() => navigate('/profile')}
        style={{backgroundColor: '#6c25ff', color: 'white', padding: '0.8rem', borderRadius: '0.5rem', border: 'none', fontSize: '1rem', fontWeight: '500', width: '100%', position: 'fixed', bottom: '2rem', left: '2rem', right: '2rem', cursor: 'pointer'}}>
        Login
      </button>
    </div>
  )
}
