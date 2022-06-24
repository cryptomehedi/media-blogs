import React, { useRef } from 'react';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [ signInWithEmailAndPassword, user, loading, error, ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail( auth );
    const userEmail = useRef('');
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const handleSubmit = async e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value 
        await signInWithEmailAndPassword( email, password );
        console.log(email, password);
    }
    const handleForgetPass = async () => {
        
        const email = userEmail.current.value
        console.log(email)
        await sendPasswordResetEmail (email)
        
    }
    if(user){
        navigate(from, { replace: true })
    }
    
    
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-gray-900">Start With A New Social Media</h1>
                <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                </div>
                <form onSubmit={handleSubmit} className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input ref={userEmail} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <p onClick={handleForgetPass} className='my-3 cursor-pointer'>forget password ?</p>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
                    <p className="text-xs text-red-400 mt-3">{error && error.message.slice(22, error.message.length-2)}</p>
                    <p className="text-xs text-red-400 mt-3">{error1 && error1.message.slice(22, error.message.length-2)}</p>
                    <p className="text-xs text-red-400 mt-3">{loading && <>Please wait...</>}</p>
                    <p className="text-xs text-red-400 mt-3">{sending && <>Please wait...</>}</p>
                    <p>New Here ? please <Link to='/reg'>Sign Up</Link></p>
                </form>
            </div>
        </section>
    );
};

export default Login;