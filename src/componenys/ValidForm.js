import React from 'react'
function ValidForm() {
  return (
    <><div className='container mt-5'>

        <form className='form-control w-25 pe-4'>
        <label>Email</label>
        <input type="email" className='input-group mt-2' required/>
        <label>Password</label>
        <input type="password" className='input-group mt-2' required/>
        <button type="submit" className='btn btn-primary mt-1'>Login</button>
        </form>
    </div>
    </>
  )
}

export default ValidForm