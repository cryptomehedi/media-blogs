import React from 'react';
import CreatePost from './CreatePost';
import Feed from './Feed';

const Home = () => {
    return (
        <div>
            <CreatePost/>
            <Feed/>
        </div>
    );
};

export default Home;