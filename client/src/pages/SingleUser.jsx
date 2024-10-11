import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleCards from '../components/SingleCards';
import Header from '../components/header';

function SingleUser() {
    const params = useParams();
    // ! id ye göre server tarafından user fetch işlemi ve state lerin tanımlanması
    const [user,setUser] = useState([])
    useEffect(() => {
        const userCatch = async () => {
            const user = await fetch(`http://localhost:5000/user/${params.id}`)
            .then(res => res.json())
            .then(data => setUser(data))
        }
        userCatch()
    },[])
    console.log(user)

  return (
    <div>
        <Header />
        <SingleCards dt={user} />
    </div>
  )
}

export default SingleUser