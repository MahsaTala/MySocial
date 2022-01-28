import React from 'react'
import { useParams } from 'react-router-dom';

const Post = () => {
    const urlParameters = useParams();
    console.log(urlParameters);
    return (
        <>
        <div>
            this is post with id {urlParameters.id} page
        </div>
         
        </>
    )
}

export default Post;
