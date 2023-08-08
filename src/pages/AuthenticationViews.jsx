import React from 'react'
import leftBackground from '../assets/Left Background.png';

function AuthenticationViews() {
  return (
   

<div className="h-screen md:flex">
      <div className="relative hidden w-full   md:flex md:w-2/5    justify-around items-center ">
        <img src={leftBackground} alt="" className="w-full h-full object-cover" />

        <h1 className="text-white  font-bold text-4xl font-sans absolute ">Students <span className=' text-slate-300 font-thin'>inc</span></h1>
      </div>
      <div className="flex md:w-3/5 justify-center py-10 items-center bg-slate-900">

        <div className="   md:max-w-md lg:max-w-full md:mx-auto s   md:w-1/2 xl:w-96     h-screen  flex items-center ">

          <div className="w-full h-100">
            <div className=' xl:hidden sm:hidden'>
              <h1 className="text-white font-bold text-4xl mb-20 ml-9  font-sans">Students <span className=' text-slate-300 font-thin'>inc</span></h1>
            </div>
            <p className="text-sm font-normal text-slate-500 ">Welcome Back</p>
            <h1 className="text-xl md:text-2xl font-bold text-slate-100  ">Log in to your account</h1>
            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-slate-300">Email Address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3  bg-slate-900 mt-2 border border-slate-800 rounded-l "
                  autoFocus
                  autoComplete="required"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-slate-300">Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Password"
                  minLength={6}
                  className="w-full px-4 py-3  bg-slate-900 mt-2 border border-slate-800 rounded-l"
                  required
                />
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-6   bg-blue-500 focus:ring-blue-400  rounded-ful" />
                  <label for="remember_me" class="ml-2 block text-sm text-gray-600">
                    Remember me
                  </label>
                </div>


                <div className="text-right mt-2">
                  <a href="#" className="text-sm font-semibold text-indigo-400 hover:text-blue-700 focus:text-blue-700">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full block my-3 bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              >
                Log In
              </button>
            </form>

            <button
              type="button"
              className="w-full my-3 block bg-slate-800 hover:bg-gray-100 hover:text-slate-900 focus:bg-gray-100 focus:text-slate-900 text-white font-semibold rounded-lg px-4 py-3 "
            >
              <div className="relative flex items-center  justify-center">
                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="w-6 " alt="google logo" />
                <span className="">Log in with Google</span>
              </div>
            </button>
            <button
              type="button"
              className="w-full block bg-slate-800 hover:bg-gray-100 hover:text-slate-900 focus:bg-gray-100 focus:text-slate-900 text-white font-semibold rounded-lg px-4 py-3 "
            >
              <div className="relative flex  justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" class=" w-6 " alt="Facebook logo" />
                <span className="">Log in with Facebook</span>
              </div>
            </button>




            


            <p className="mt-8 text-gray-600">
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">
                Join free today
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>


  )
}

export default AuthenticationViews