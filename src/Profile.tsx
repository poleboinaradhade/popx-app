import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const navigate = useNavigate()

  return (
    <div style={{minHeight: '100vh', backgroundColor: '#f7f8f9'}}>
      
      {/* Top Header with Back Button */}
      <div style={{padding: '1rem 1.5rem', backgroundColor: 'white', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: '1rem'}}>
        <button 
          onClick={() => navigate(-1)}
          style={{background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer'}}>
          ←
        </button>
        <h2 style={{fontSize: '1.3rem', fontWeight: '500', margin: 0}}>Account Settings</h2>
      </div>
      
      {/* Profile Info */}
      <div style={{padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center'}}>
        <div style={{width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#ffb6c1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', position: 'relative'}}>
          👩
          <div style={{position: 'absolute', bottom: '0', right: '0', width: '18px', height: '18px', backgroundColor: '#6c25ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: 'white'}}>
            📷
          </div>
        </div>
        <div>
          <p style={{fontWeight: '600', margin: '0 0 0.2rem 0'}}>Marry Doe</p>
          <p style={{color: '#666', margin: 0, fontSize: '0.9rem'}}>Marry@Gmail.Com</p>
        </div>
      </div>
      
      {/* Description */}
      <div style={{padding: '0 1.5rem'}}>
        <p style={{color: '#555', lineHeight: '1.6'}}>
          Lorem Ipsum Dolor Sit Amet, Consectetur<br/>
          Adipiscing Elit, Sed Do Eiusmod Tempor<br/>
          Incididunt Ut Labore Et Dolore Magna Aliqua
        </p>
      </div>
      
      {/* Bottom dotted line area */}
      <div style={{marginTop: '3rem', borderTop: '1px dashed #ccc', height: '200px'}}></div>
    </div>
  )
}