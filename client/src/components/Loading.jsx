import React from 'react'

function Loading({feature}) {
  return (
    <div className='animate-spin'>
        <div className={feature?feature:null}>
            <p className='border border-blue-400 rounded-full bg-gray-300'>l</p>
        </div>
    </div>
  )
}

export default Loading