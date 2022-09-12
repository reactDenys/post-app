import React from 'react';
import s from "./PostList.module.css";
import PostItem from "../PostItem/PostItem";

const PostList = ({posts, title, deletePost}) => {

    if (!posts.length) {
        return <h1 style={{'textAlign': 'center'}}>There are no posts!</h1>
    }

    return (
        <div className={s.postList}>
            <h1>{title}</h1>
            {posts.map((post, index) =>
                <PostItem deletePost={deletePost} key={post.id} number={index + 1} post={post}/>
            )}
        </div>
    );
};

export default PostList;