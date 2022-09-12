import React, {useState} from 'react';
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";

const FormItem = ({createPost}) => {
    let [body, setBody] = useState({
        title: '',
        description: ''
    })

    const addPost = e => {
        e.preventDefault();
        let newPost = {
            id: Date.now(),
            ...body
        }
        createPost(newPost)
        setBody({title: '', description: ''})
    }

    return (
        <form>
            <MyInput type="text" value={body.title} onChange={e => setBody({...body, title: e.target.value})}
                     placeholder="Post title"/>
            <MyInput type="text" value={body.description}
                     onChange={e => setBody({...body, description: e.target.value})}
                placeholder="Post description"/>
            <div>
                <MyButton type="submit" onClick={addPost}>Add post</MyButton>
            </div>
        </form>
    );
};

export default FormItem;