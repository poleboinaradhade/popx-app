import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [company, setCompany] = useState('')
  const [isAgency, setIsAgency] = useState('yes')

  return (
    <div style={{minHeight: '100vh', padding: '2rem', background: 'linear-gradient(180deg, #f7f8f9 0%, #eef2ff 100%)', paddingBottom: '6rem'}}>
      
      <button 
        onClick={() => navigate(-1)}
        style={{background: 'white', border: 'none', fontSize: '1.5rem', cursor: 'pointer', marginBottom: '1rem', width: '40px', height: '40px', borderRadius: '50%', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
        ←
      </button>
      
      <h1 style={{fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1a1a1a'}}>
        Create your<br/>PopX account
      </h1>
      
      {[
        {label: 'Full Name', value: fullName, setValue: setFullName, placeholder: 'Marry Doe', required: true},
        {label: 'Phone number', value: phone, setValue: setPhone, placeholder: 'Marry Doe', required: true},
        {label: 'Email address', value: email, setValue: setEmail, placeholder: 'Marry Doe', required: true},
        {label: 'Password', value: password, setValue: setPassword, placeholder: 'Marry Doe', required: true, type: 'password'},
        {label: 'Company name', value: company, setValue: setCompany, placeholder: 'Marry Doe', required: false}
      ].map((field, i) => (
        <div key={i} style={{marginBottom: '1.5rem', position: 'relative'}}>
          <label style={{position: 'absolute', top: '-8px', left: '12px', background: 'linear-gradient(180deg, #f7f8f9 0%, #eef2ff 100%)', padding: '0 6px', fontSize: '0.8rem', color: '#667eea', fontWeight: '500'}}>
            {field.label} {field.required && <span style={{color: 'red'}}>*</span>}
          </label>
          <input 
            type={field.type || 'text'}
            value={field.value} 
            onChange={(e)=>field.setValue(e.target.value)} 
            placeholder={field.placeholder}
            style={{width: '100%', padding: '1rem', borderRadius: '1rem', border: '2px solid #e0e0e0', backgroundColor: 'white', boxSizing: 'border-box', fontSize: '1rem', outline: 'none'}}
          />
        </div>
      ))}

      <div style={{marginBottom: '2rem'}}>
        <p style={{marginBottom: '0.8rem', fontWeight: '500'}}>Are you an Agency? <span style={{color: 'red'}}>*</span></p>
        <label style={{marginRight: '1.5rem', cursor: 'pointer', fontSize: '1rem'}}>
          <input type="radio" name="agency" checked={isAgency === 'yes'} onChange={()=>setIsAgency('yes')} style={{marginRight: '0.5rem'}}/>
          Yes
        </label>
        <label style={{cursor: 'pointer', fontSize: '1rem'}}>
          <input type="radio" name="agency" checked={isAgency === 'no'} onChange={()=>setIsAgency('no')} style={{marginRight: '0.5rem'}}/>
          No
        </label>
      </div>

      <button 
        onClick={() => navigate('/profile')}
        style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '1rem', borderRadius: '1rem', border: 'none', fontSize: '1rem', fontWeight: '600', width: '100%', position: 'fixed', bottom: '2rem', left: '2rem', right: '2rem', cursor: 'pointer', boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'}}>
        Create Account
      </button>
    </div>
  )
}
