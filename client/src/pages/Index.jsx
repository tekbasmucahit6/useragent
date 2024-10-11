import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Cards from '../components/Cards'
import Loading from '../components/Loading'



function Index() {
  // search state tanımlama
    const [search,setSearch] = useState("")
    console.log(search)
  // all user data
    const [data,setData] = useState([])
  // searched user
    const [searchData,setSearchData] = useState([])

    useEffect(() => {
      fetch("http://localhost:5000")
            .then(res => res.json())
            .then(data => setData(data.users))
          },[])



          useEffect(() => {
            const filter = data.filter(data => data.username.includes(search))
            setSearchData(filter)
            console.log(searchData)
          },[search])
    
    
  return (
    <div className=''>
        <Header />
 

 {/* search bar */}
    <div className='flex justify-between items-center'>
      <input type="search" className='w-40 border p-2 rounded-lg' placeholder='user search' onChange={e => setSearch(e.target.value)} />
    </div>


 {/* user response */}
        <div className='grid grid-rows xl:grid-cols-4 xl:grid-rows-none lg:grid-cols-4 lg:grid-rows-none md:grid-cols-3 md:grid-rows-none gap-16 p-5'>
          {
            searchData.length > 0?
              searchData.map((dt,i) => (
              <Cards dt={dt} i={i} />
            ))
            :
            data.map((dt,i) => (
              <Cards dt={dt} i={i} />
            ))
            
          }
        </div>
  {/* user response is finish */}
    </div>
  )
}

export default Index