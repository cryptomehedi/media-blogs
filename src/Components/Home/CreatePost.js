import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const CreatePost = () => {
    const [user] = useAuthState(auth)
    const { displayName } = user
    const handleSubmit = e => {
        e.preventDefault();
        const post= e.target.post.value
        console.log(post, displayName)
    } 


    return (
        <div>
            <form onSubmit={handleSubmit} className='ml-5 flex'> 
                <textarea className='bg-gray-200 rounded-lg resize-none	 h-20 w-96 p-2' name="post" id="post" ></textarea>
                <div className='ml-5'>
                    <button className='bg-gray-400 p-3 rounded-lg' type="submit">Post Here</button>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;