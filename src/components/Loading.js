import React from 'react'

function Loading() {
  console.log(process.env.PUBLIC_URL);
  return (
    <div className='d-flex justify-content-center my-5'>
        <img style={{width:"4vw"}} src={process.env.PUBLIC_URL+"/images/loading.gif"} alt="loading..."/>
    </div>
  )
}

export default Loading