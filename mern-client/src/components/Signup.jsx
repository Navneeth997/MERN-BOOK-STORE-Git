import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../Context/AuthProvider';
import  googlelogo  from "../assets/google-logo.svg";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/'


  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setIsLoading(true); // Set loading state to true

    createUser(email, password)
      .then((userCredential) => {
        setIsLoading(false); // Reset loading state
        // Signed up
        const user = userCredential.user;
        alert("Signup successful",user);
        navigate(from, {replace: true})
        // ...
      })
      .catch((error) => {
        setIsLoading(false); // Reset loading state
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        alert("You Have entered wrong email and password!")
        //reload page
        window.location.reload();
        //...
        // ...
      });
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Sign up Form</h1>
				</div>
				<form onSubmit={handleSignup}  className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input id="email" name="email" type="text" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							
						</div>
						<div className="relative">
							<input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							
						</div>
            <p>If you have an account, Please <Link to="/login" className='text-blue-600 hover:underline'>Login</Link> here.</p>
						<div className="relative">
							<button className="bg-blue-500 text-white rounded-md px-6 py-2">Sign up</button>
						</div>
					</div>
				</form>
        <hr />
        <div className='flex w-full items-center flex-col mt-5 gap-3 '>
          <button className='block' > <img src={googlelogo} alt="logo" className='w-12 h-12 inline-block'/>Login with Google</button>
        </div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Signup;
