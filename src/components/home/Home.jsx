import React, { useEffect } from 'react'
import { useState } from 'react';
import Navbar from '../navbar/Navbar';
import styles from './Home.module.css'

function Home() {
  const [userData, setUserData] = useState([])
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('userObj')) ||[]
   setUserData([...data]);
  },[])

  const handleClear = ()=>{
    if(confirm('Do you want to clear')){
      localStorage.removeItem('userObj')
      const data = JSON.parse(localStorage.getItem('userObj')) ||[]
   setUserData([...data]);
    }
  }
  return (
    <>
    <Navbar/>
    <div className={styles.mainBox}>
      <h1>Welcome</h1>
      <div className={styles.names}>
      {userData.map((ele,index)=>{
        return(
          <h3 key={index}>{ele.firstName} {ele.lastName}</h3>
        )
      })}
      </div>
      <button className={styles.clear} onClick={handleClear}>Clear</button>
    </div>
    </>
  )
}

export default Home
