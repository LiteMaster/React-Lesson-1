import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'left' }}>{title}</h1>
            {posts.map(post =>
                <PostItem remove={remove} posts={post} />
            )}
        </div>
    )

}

export default PostList;