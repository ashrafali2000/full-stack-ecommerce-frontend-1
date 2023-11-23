import logo from "../../images/stylo logo.png"
import { useRef, useState } from "react"
import { Alert , Space, Button} from "antd"
import {Link } from "react-router-dom"
import axiosLib from "../../axios";


export default function Form({signUp, signUpHandler , signInHandler}) {
    const [loggedIn, setLoggedIn] = useState("");
    const [signup, setSignUp] = useState("");
    const emailRef = useRef()
    const passwordRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if(!signUp){
        //  return signInHandler(email, password);
      return axiosLib.post("user/login",{
            email, password
        }).then(response => setLoggedIn(response.data.user.message)).catch(err => console.log(err.response.data.message))
    
        }
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        // signUpHandler(firstName, lastName, email, password)
        axiosLib.post("user/signup",{
            firstName, lastName, email, password
        }).then(response => setSignUp(response.data)).catch(err => console.log(err))

    }
   

    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            {/* alert after sigin */}
      {loggedIn ? <Alert
      message={loggedIn}
      type="success"
      showIcon
 
    className="absolute lg:w-1/4  md:w-2/6  w-4/6 ml-auto mr-auto top-0 left-0 right-0"
      closable
    /> :  ""}
      {signup ? <Alert
      message={signup}
      type="success"
  
    className="absolute lg:w-1/4  md:w-2/6 w-4/6 ml-auto mr-auto top-0 left-0 right-0"
      showIcon
      closable
    /> :  ""}
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-24 w-auto"
              src={logo}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {signUp?"Create new account" :  "Sign in to your account"}
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6"  onSubmit={onSubmitHandler} >
              {signUp ? <div>
                <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="First Name" className="block text-sm font-medium leading-6 text-gray-900">
                    First Name
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="First Name"
                    name="First Name"
                    type="text"
                    ref={firstNameRef}
                    autoComplete="First Name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
                <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="last Name" className="block text-sm font-medium leading-6 text-gray-900">
                    last Name
                  </label>
                  </div>
                <div className="mt-2">
                  <input
                    id="last Name"
                    name="last Name"
                    type="text"
                    ref={lastNameRef}
                    autoComplete="last Name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              </div> :""}

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    ref={emailRef}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                {!signUp ? <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div> :""}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    ref={passwordRef}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                {!signUp ? " Sign in" : "Sign up"}
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
             {!signUp ? <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign up
              </Link> : <Link to="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign in
              </Link>}
            </p>
          </div>
          
        </div>
      </>
    )
  }