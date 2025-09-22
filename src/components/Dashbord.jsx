import React from 'react'

const Dashbord = () => {
  return (
    <>
    <div className='   flex '>
      <div className=' w-64 h-screen fixed left-0 top-0 bg-gray-800 text-white p-4 overflow-y-auto'>
       <div className="flex flex-col items-center py-6 border-b border-gray-700">
        <img
          src="https://wanderwave-ng-blog.netlify.app/assets/adminLog-UUbddI60.png"
          alt="admin"
          className="size-14 mb-2"
        />
        <p className="font-semibold">Admin</p>
      </div>
      </div>
      <div className=' flex-1 ml-10 p-6 max-w-4xl mx-auto'>
          <h3>Main content</h3>
      </div>
    </div>
    </>
  )
}

export default Dashbord