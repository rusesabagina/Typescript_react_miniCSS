import { useState } from 'react'
import './App.css'
import FormUser from './FormUser'
import { FAKE_USERS } from './FakeUsers';
import UserOversikt from './UserOversikt';

function App() {
 return(
  <>
  <div className='container'>
<FormUser/>
</div>
<div className='container'>
    <UserOversikt users={FAKE_USERS} />
</div>
  </>
 )
}

export default App
