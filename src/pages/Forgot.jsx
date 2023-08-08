import React from 'react'


function Forgot() {
  return (
   

<div className="h-screen md:flex">
      <div className="relative hidden w-full   md:flex md:w-2/5    justify-around items-center ">
        
      </div>
      <div className="flex md:w-3/5 justify-center py-10 items-center ">

        <div className="   md:max-w-md lg:max-w-full md:mx-auto s   md:w-1/2 xl:w-96     h-screen  flex items-center ">

          <div className="w-full h-100">
            <div className=' xl:hidden sm:hidden'>
              <h1 className="text-gray-text font-bold text-4xl mb-20 ml-9  font-sans">Students <span className=' text-gray-text font-thin'>inc</span></h1>
            </div>
            <p className="text-sm font-normal text-gray-text ">Oops</p>
            <h1 className="text-xl md:text-2xl font-bold text-gray-text  ">Forget your password?</h1>
            <p className='text-gray-light mt-3'>
              Enter the email address you used when you <br/>joined and we’ll send you instructions to reset <br/>your password
            </p>
            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-text">Email Address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Jaime.lannister@gmail.com"
                  className="w-full px-4 py-3  bg-background-color mt-2 border border-slate-800 rounded-xl "
                  autoFocus
                  autoComplete="required"
                  required
                />
              </div>
             

              
              <button
                type="submit"
                className="w-full block my-3 bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              >
               Send Reset Instructions
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>


  )
}

export default Forgot