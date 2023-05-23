import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import styles from './Contact.module.css'

function Contact() {
  const [details, setDetails] = useState({
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  })
  const [users, setUsers] = useState([])

  const handleInput = (e)=>{
    const {name, value} = e.target
    setDetails({...details, [name]:value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(details.firstName && details.lastName && details.email && details.phone){
      const newDetails = {...details}
      const newUsers = [...users]
      setUsers([...newUsers, newDetails])
      localStorage.setItem('userObj', JSON.stringify([...newUsers, newDetails]))
    }
    setDetails({
      firstName:'',
    lastName:'',
    email:'',
    phone:''
    })
  }
  return (
    <>
    <Navbar/>
    <div className={styles.mainBox}>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="firstName">First Name:</label>
        <input id='firstName' name='firstName' value={details.firstName} onChange={handleInput} type="text" />
        </div>
        <div>
        <label htmlFor="lastName">Last Name:</label>
        <input id='lastName' name='lastName' value={details.lastName} onChange={handleInput} type="text" />
        </div>
        <div>
        <label htmlFor="email">Email:</label>
        <input id='email' name='email' value={details.email} onChange={handleInput} type='email' />
        </div>
        <div>
        <label htmlFor="phone">Phone Number:</label>
        <input id='phone' name='phone' value={details.phone} onChange={handleInput} type="tel" />
        </div>

        <input type="submit" className={styles.submit} value="Submit" />
      </form>
    </div>
    </>
  )
}

export default Contact
