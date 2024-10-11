import React from 'react'
import Loading from './Loading'

function SingleCards({dt}) {
  return (
    <div className='w-full p-3'>

        <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2'>

            <div className='flex justify-center items-center'>
                <img src={!dt.image?<Loading />:dt.image} className='w-72 hover:animate-spin transition-all' alt="" />
            </div>

            <div className='flex flex-col justify-start items-center mt-5 gap-5'>


                <div className='flex justify-between w-full items-center'>
                    <strong className='font-semibold text-3xl font-serif'>{dt.username}</strong>
                    <p className='text-4xl '>-</p>
                    <p className='px-4 py-2 bg-blue-700 rounded shadow-lg text-white animate-pulse transition-all'>{!dt.role?<Loading />:dt.role}</p>
                </div>

                <div className='grid w-full gap-5'>
                    <h1 className='bg-green-600 px-4 py-3 rounded text-white text-center'>personal information</h1>
                    <div className='flex justify-between items-center bg-gray-200 p-2'>
                        <p>phone number</p>
                        <i>{!dt.phone?<Loading />:dt.phone}</i>
                    </div>

                    <div className='flex justify-between items-center bg-gray-200 p-2'>
                        <p>email</p>
                        <i>{!dt.email?<Loading />:dt.email}</i>
                    </div>
                    
                    <div className='flex justify-between items-center bg-gray-200 p-2'>
                        <p>university</p>
                        <i>{!dt.university?<Loading />:dt.university}</i>
                    </div>

                </div>


            </div>

        </div>

        <div className='flex flex-col justify-center items-center mt-5 gap-5'>

            <div className='bg-green-600 w-full text-center text-white py-3'>
                <h1>bank information</h1>
            </div>

            <div className='flex w-full justify-between items-center bg-gray-200 p-2'>
                <p>iban</p>
                <i>{!dt.bank?<Loading />:dt.bank.iban}</i>
            </div>
            <div className='flex w-full justify-between items-center bg-gray-200 p-2'>
                <p>cardNumber</p>
                <i>{!dt.bank?<Loading />:dt.bank.cardNumber}</i>
            </div>
            <div className='flex w-full justify-between items-center bg-gray-200 p-2'>
                <p>cardType</p>
                <i>{!dt.bank?<Loading />:dt.bank.cardType}</i>
            </div>

        </div>
    </div>
  )
}

export default SingleCards