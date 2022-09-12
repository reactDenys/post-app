import React from 'react';
import s from './PostItem.module.css'
import MyButton from "../../UI/MyButton/MyButton";


const PostItem = (props) => {
    return (
        <div className={s.postItem}>
            <div>
                <div className={s.title}>
                    {props.number}. {props.post.title}
                </div>
                <div className={s.description}>
                    {props.post.description}
                </div>
            </div>
            <MyButton onClick={ () => props.deletePost(props.post)} type='text'>Delete</MyButton>
        </div>
    );
};

export default PostItem;