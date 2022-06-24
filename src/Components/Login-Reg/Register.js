import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {

    const [ createUserWithEmailAndPassword, user,  loading, error, ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
    const [updateProfile, updating, error3] = useUpdateProfile(auth);
    const [error1, setError1] = useState('')
    const [error2, setError2] = useState('')
    const userPassword = useRef('');
    const handleSubmit = async e =>{
        e.preventDefault();
        const displayName = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmPassword = e.target.confirmPassword.value

        if(password.length > 6){
            if(password === confirmPassword){
                console.log(displayName, email, password, confirmPassword);
                await createUserWithEmailAndPassword (email, password)
                await updateProfile(displayName)
                alert(`welcome ${displayName}`)
            }else{
                setError1('')
                setError2('Password did not matched')
            }
        }else{
            setError2('')
            setError1('Password must be at least 6 characters')
        }
        setError1('')
        setError2('')
    }
    if(user)(
        alert('hey bro')
    )

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-gray-900">Start With A New Social Media</h1>
                <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                </div>
                <form onSubmit={handleSubmit} className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                    <div className="relative mb-4">
                        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input type="name" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        
                    </div>
                    <div className="relative mb-4">
                        <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                        <input ref={userPassword} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        <p className="text-xs text-red-400 mt-3">{error1 && error1}</p>
                    </div>
                    <div className="relative mb-4">
                        <label for="confirmPassword" className="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        <p className="text-xs text-red-400 mt-3">{error2 && error2}</p>
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button> 
                </form>
            </div>
        </section>
    );
};

export default Register;