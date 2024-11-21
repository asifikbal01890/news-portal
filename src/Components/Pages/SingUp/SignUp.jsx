import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Provider';
import { updateCurrentUser, updateProfile } from 'firebase/auth';
import auth from '../../../firebase/firebase.config';

const SignUp = () => {
    const { register, updateUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const photoURL = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
       
        register(email, password)
        .then( result => {
            console.log(result.user)
            const userinfo = {
                displayName: name,
                photoURL:photoURL
            }
            updateUser(userinfo)
            .then(res=> console.log(res))
            .catch(e => console.log(e))
        })
        .catch(err => console.log(err))



    }
    return (

        <div className="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
            <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">Welcome to My Company</h1>
            <form onSubmit={handleRegister} className="w-full flex flex-col gap-4">

                <div className="flex items-start flex-col justify-start">
                    <label  className="text-sm text-gray-700 dark:text-gray-200 mr-2">Name:</label>
                    <input type="text" id="name" name="name" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label  className="text-sm text-gray-700 dark:text-gray-200 mr-2">Photo URL:</label>
                    <input type="text" id="username" name="photo" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Email:</label>
                    <input type="email" id="email" name="email" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-gray-700 dark:text-gray-200 mr-2">Password:</label>
                    <input type="password" id="password" name="password" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>


                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm">Register</button>
            </form>

            <div className="mt-4 text-center">
                <span className="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
                <Link to={"/signIn"} className="text-blue-500 hover:text-blue-600">Login</Link>
            </div>
        </div>



    );
};

export default SignUp;