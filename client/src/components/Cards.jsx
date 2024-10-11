import React from 'react'
import {Link} from "react-router-dom"
function Cards({dt,i}) {
  return (
    <>
      <div className='flex flex-col gap-5 justify-center items-center  border-gray-500 bg-white rounded-lg shadow-lg hover:shadow-2xl p-2' key={i}>
        {/* card img section */}
        <div className='flex jusitfy-center items-center'>
          <img src={dt.image} className='' alt="" />
        </div>
        {/* card img section is finish */}
         {/* card username section */}
         <div className='flex justify-center items-center hover:cursor-pointer'>
          <strong>{dt.username}</strong>
        </div>
        {/* card username section is finish */}
        {/* card title section */}
        <div className=''>
          <Link to={`/user/${dt.id}`}>
          <button className='bg-blue-600 px-3 py-2 rounded text-white hover:bg-blue-700 transition-all'>kişi bilgisi</button>
          </Link>
        </div>
        {/* card title section is finish */}
      </div>
    </>
  )
}

export default Cards